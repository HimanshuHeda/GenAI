// Sentiment Analysis for Mental Health Context
import { Message, UserProfile } from '../index';

export interface SentimentResult {
  label: 'positive' | 'negative' | 'neutral';
  confidence: number;
  score: number; // -1 to 1 scale
  emotions: EmotionAnalysis;
  intensity: number; // 1-10 scale
  culturalContext?: string;
}

export interface EmotionAnalysis {
  primary: string;
  secondary: string[];
  confidence: number;
  culturalMarkers: string[];
}

export interface SentimentTrend {
  timeframe: string;
  averageSentiment: number;
  sentimentVariability: number;
  emotionalStability: number;
  concerningPatterns: string[];
}

export interface MentalHealthIndicators {
  depressionIndicators: number;
  anxietyIndicators: number;
  stressIndicators: number;
  hopelessnessIndicators: number;
  positiveEmotionIndicators: number;
  culturalStressIndicators: number;
}

export class SentimentAnalyzer {
  private positiveWords: Set<string> = new Set();
  private negativeWords: Set<string> = new Set();
  private emotionKeywords: Map<string, string[]> = new Map();
  private culturalEmotionMarkers: Map<string, any> = new Map();
  private mentalHealthKeywords: Map<string, number> = new Map();
  private intensityModifiers: Map<string, number> = new Map();

  constructor() {
    this.initializeWordLists();
    this.initializeEmotionKeywords();
    this.initializeCulturalMarkers();
    this.initializeMentalHealthKeywords();
    this.initializeIntensityModifiers();
  }

  async loadModel(): Promise<void> {
    try {
      // In production, load pre-trained sentiment model
      console.log('Sentiment analysis model loaded');
    } catch (error) {
      console.warn('Sentiment model not found, using rule-based approach');
    }
  }

  private initializeWordLists(): void {
    // Positive words
    const positiveWords = [
      'happy', 'joy', 'excited', 'grateful', 'blessed', 'thankful', 'proud',
      'confident', 'hopeful', 'optimistic', 'peaceful', 'calm', 'relaxed',
      'motivated', 'inspired', 'energetic', 'content', 'satisfied', 'fulfilled',
      'loved', 'supported', 'appreciated', 'successful', 'accomplished',
      'better', 'improved', 'healing', 'progress', 'growth', 'positive',
      'good', 'great', 'wonderful', 'amazing', 'fantastic', 'excellent'
    ];

    // Negative words
    const negativeWords = [
      'sad', 'depressed', 'anxious', 'worried', 'stressed', 'overwhelmed',
      'hopeless', 'helpless', 'worthless', 'useless', 'tired', 'exhausted',
      'angry', 'frustrated', 'annoyed', 'irritated', 'disappointed', 'hurt',
      'lonely', 'isolated', 'abandoned', 'rejected', 'misunderstood',
      'confused', 'lost', 'stuck', 'trapped', 'suffocating', 'drowning',
      'broken', 'shattered', 'devastated', 'destroyed', 'ruined', 'failed',
      'terrible', 'awful', 'horrible', 'nightmare', 'disaster', 'crisis'
    ];

    positiveWords.forEach(word => this.positiveWords.add(word));
    negativeWords.forEach(word => this.negativeWords.add(word));
  }

  private initializeEmotionKeywords(): void {
    this.emotionKeywords.set('depression', [
      'empty', 'hollow', 'numb', 'void', 'meaningless', 'pointless',
      'dark', 'gloomy', 'heavy', 'weighed down', 'cant get up',
      'no energy', 'no motivation', 'dont care', 'nothing matters'
    ]);

    this.emotionKeywords.set('anxiety', [
      'nervous', 'worried', 'scared', 'panicked', 'restless', 'tense',
      'on edge', 'racing thoughts', 'cant breathe', 'heart pounding',
      'sweating', 'shaking', 'trembling', 'dizzy', 'nauseous',
      'what if', 'catastrophizing', 'worst case', 'something bad'
    ]);

    this.emotionKeywords.set('anger', [
      'furious', 'rage', 'mad', 'pissed', 'livid', 'outraged',
      'boiling', 'seething', 'irritated', 'annoyed', 'frustrated',
      'want to scream', 'want to hit', 'losing control', 'exploding'
    ]);

    this.emotionKeywords.set('fear', [
      'afraid', 'terrified', 'scared', 'frightened', 'petrified',
      'paranoid', 'phobic', 'intimidated', 'threatened', 'vulnerable',
      'unsafe', 'insecure', 'exposed', 'defenseless'
    ]);

    this.emotionKeywords.set('shame', [
      'ashamed', 'embarrassed', 'humiliated', 'mortified', 'guilty',
      'regretful', 'remorseful', 'self-conscious', 'inadequate',
      'not good enough', 'disappointing', 'failure', 'let down'
    ]);

    this.emotionKeywords.set('hope', [
      'hopeful', 'optimistic', 'positive', 'confident', 'encouraged',
      'motivated', 'inspired', 'determined', 'resilient', 'strong',
      'better tomorrow', 'things will improve', 'light at end',
      'keep going', 'never give up', 'faith', 'believe'
    ]);
  }

  private initializeCulturalMarkers(): void {
    // Indian cultural expressions of emotions
    this.culturalEmotionMarkers.set('family_disappointment', {
      markers: [
        'parents disappointed', 'family shame', 'ghar ki badnami',
        'relatives will talk', 'log kya kahenge', 'society judgment',
        'family reputation', 'let down parents', 'brought dishonor'
      ],
      emotion: 'shame',
      culturalWeight: 1.5 // Higher impact in Indian context
    });

    this.culturalEmotionMarkers.set('academic_stress', {
      markers: [
        'exam pressure', 'study stress', 'competition tension',
        'rank anxiety', 'result fear', 'failure phobia',
        'coaching pressure', 'entrance exam stress', 'board exam tension'
      ],
      emotion: 'anxiety',
      culturalWeight: 1.3
    });

    this.culturalEmotionMarkers.set('marriage_pressure', {
      markers: [
        'marriage tension', 'rishta stress', 'wedding pressure',
        'dowry worry', 'in-laws anxiety', 'arranged marriage fear',
        'compatibility concern', 'age pressure', 'biological clock'
      ],
      emotion: 'anxiety',
      culturalWeight: 1.4
    });

    this.culturalEmotionMarkers.set('career_confusion', {
      markers: [
        'career uncertainty', 'job market fear', 'unemployment anxiety',
        'salary concern', 'job security worry', 'career stability fear',
        'professional confusion', 'industry uncertainty'
      ],
      emotion: 'anxiety',
      culturalWeight: 1.2
    });

    this.culturalEmotionMarkers.set('financial_stress', {
      markers: [
        'money problems', 'financial burden', 'loan stress',
        'expense worry', 'poverty fear', 'economic pressure',
        'budget tension', 'debt anxiety', 'financial insecurity'
      ],
      emotion: 'stress',
      culturalWeight: 1.3
    });
  }

  private initializeMentalHealthKeywords(): void {
    // Depression indicators
    this.mentalHealthKeywords.set('sleep_issues', 0.7);
    this.mentalHealthKeywords.set('appetite_changes', 0.6);
    this.mentalHealthKeywords.set('energy_loss', 0.8);
    this.mentalHealthKeywords.set('concentration_problems', 0.7);
    this.mentalHealthKeywords.set('hopelessness', 0.9);
    this.mentalHealthKeywords.set('worthlessness', 0.8);
    this.mentalHealthKeywords.set('guilt', 0.6);
    this.mentalHealthKeywords.set('anhedonia', 0.9); // Loss of interest/pleasure

    // Anxiety indicators
    this.mentalHealthKeywords.set('worry', 0.6);
    this.mentalHealthKeywords.set('restlessness', 0.7);
    this.mentalHealthKeywords.set('fatigue', 0.5);
    this.mentalHealthKeywords.set('irritability', 0.6);
    this.mentalHealthKeywords.set('muscle_tension', 0.7);
    this.mentalHealthKeywords.set('panic', 0.9);
    this.mentalHealthKeywords.set('phobia', 0.8);

    // Stress indicators
    this.mentalHealthKeywords.set('overwhelmed', 0.8);
    this.mentalHealthKeywords.set('pressure', 0.7);
    this.mentalHealthKeywords.set('burden', 0.7);
    this.mentalHealthKeywords.set('exhaustion', 0.8);
    this.mentalHealthKeywords.set('burnout', 0.9);
  }

  private initializeIntensityModifiers(): void {
    // Words that modify emotional intensity
    this.intensityModifiers.set('very', 1.3);
    this.intensityModifiers.set('extremely', 1.5);
    this.intensityModifiers.set('incredibly', 1.4);
    this.intensityModifiers.set('totally', 1.3);
    this.intensityModifiers.set('completely', 1.4);
    this.intensityModifiers.set('absolutely', 1.4);
    this.intensityModifiers.set('really', 1.2);
    this.intensityModifiers.set('so', 1.2);
    this.intensityModifiers.set('quite', 1.1);
    this.intensityModifiers.set('somewhat', 0.8);
    this.intensityModifiers.set('a bit', 0.7);
    this.intensityModifiers.set('slightly', 0.6);
    this.intensityModifiers.set('little', 0.7);
  }

  /**
   * Analyze sentiment of a single message
   */
  async analyzeSentiment(
    message: string,
    userProfile: UserProfile
  ): Promise<SentimentResult> {
    const tokens = this.tokenizeMessage(message);
    
    // Calculate basic sentiment score
    let sentimentScore = this.calculateBaseSentiment(tokens);
    
    // Apply intensity modifiers
    sentimentScore = this.applyIntensityModifiers(tokens, sentimentScore);
    
    // Analyze emotions
    const emotions = this.analyzeEmotions(tokens, userProfile);
    
    // Apply cultural context adjustments
    const culturalAdjustment = this.applyCulturalContext(tokens, userProfile);
    sentimentScore += culturalAdjustment.adjustment;
    
    // Determine sentiment label and confidence
    const { label, confidence } = this.determineSentimentLabel(sentimentScore);
    
    // Calculate intensity
    const intensity = this.calculateIntensity(tokens, sentimentScore);

    return {
      label,
      confidence,
      score: sentimentScore,
      emotions,
      intensity,
      culturalContext: culturalAdjustment.context
    };
  }

  /**
   * Analyze sentiment trends over conversation history
   */
  async analyzeSentimentTrend(
    messages: Message[],
    userProfile: UserProfile
  ): Promise<SentimentTrend> {
    if (messages.length < 3) {
      return {
        timeframe: 'insufficient_data',
        averageSentiment: 0,
        sentimentVariability: 0,
        emotionalStability: 0,
        concerningPatterns: []
      };
    }

    // Analyze recent messages (last 10)
    const recentMessages = messages.slice(-10);
    const sentimentScores: number[] = [];
    
    for (const message of recentMessages) {
      if (message.content && message.sender === 'user') {
        const sentiment = await this.analyzeSentiment(message.content, userProfile);
        sentimentScores.push(sentiment.score);
      }
    }

    const averageSentiment = sentimentScores.reduce((sum, score) => sum + score, 0) / sentimentScores.length;
    const sentimentVariability = this.calculateVariability(sentimentScores);
    const emotionalStability = this.calculateStability(sentimentScores);
    const concerningPatterns = this.identifyConcerningPatterns(sentimentScores, recentMessages);

    return {
      timeframe: `last_${recentMessages.length}_messages`,
      averageSentiment,
      sentimentVariability,
      emotionalStability,
      concerningPatterns
    };
  }

  /**
   * Extract mental health indicators from sentiment analysis
   */
  async extractMentalHealthIndicators(
    messages: Message[],
    userProfile: UserProfile
  ): Promise<MentalHealthIndicators> {
    let depressionIndicators = 0;
    let anxietyIndicators = 0;
    let stressIndicators = 0;
    let hopelessnessIndicators = 0;
    let positiveEmotionIndicators = 0;
    let culturalStressIndicators = 0;

    for (const message of messages) {
      if (message.content && message.sender === 'user') {
        const sentiment = await this.analyzeSentiment(message.content, userProfile);
        
        // Count indicators based on emotions and keywords
        if (sentiment.emotions.primary === 'depression') depressionIndicators++;
        if (sentiment.emotions.primary === 'anxiety') anxietyIndicators++;
        if (sentiment.emotions.secondary.includes('stress')) stressIndicators++;
        if (sentiment.score < -0.7) hopelessnessIndicators++;
        if (sentiment.score > 0.5) positiveEmotionIndicators++;
        if (sentiment.culturalContext) culturalStressIndicators++;
      }
    }

    const totalMessages = messages.filter(m => m.sender === 'user').length;
    
    return {
      depressionIndicators: depressionIndicators / totalMessages,
      anxietyIndicators: anxietyIndicators / totalMessages,
      stressIndicators: stressIndicators / totalMessages,
      hopelessnessIndicators: hopelessnessIndicators / totalMessages,
      positiveEmotionIndicators: positiveEmotionIndicators / totalMessages,
      culturalStressIndicators: culturalStressIndicators / totalMessages
    };
  }

  private tokenizeMessage(message: string): string[] {
    return message.toLowerCase()
      .replace(/[.,!?;:()'"]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0);
  }

  private calculateBaseSentiment(tokens: string[]): number {
    let positiveCount = 0;
    let negativeCount = 0;

    for (const token of tokens) {
      if (this.positiveWords.has(token)) {
        positiveCount++;
      } else if (this.negativeWords.has(token)) {
        negativeCount++;
      }
    }

    if (positiveCount + negativeCount === 0) return 0;
    
    return (positiveCount - negativeCount) / (positiveCount + negativeCount);
  }

  private applyIntensityModifiers(tokens: string[], baseScore: number): number {
    let intensityMultiplier = 1.0;
    
    for (let i = 0; i < tokens.length - 1; i++) {
      const token = tokens[i];
      if (this.intensityModifiers.has(token)) {
        const nextToken = tokens[i + 1];
        if (this.positiveWords.has(nextToken) || this.negativeWords.has(nextToken)) {
          intensityMultiplier *= this.intensityModifiers.get(token)!;
        }
      }
    }
    
    return baseScore * intensityMultiplier;
  }

  private analyzeEmotions(tokens: string[], userProfile: UserProfile): EmotionAnalysis {
    const emotionScores: Map<string, number> = new Map();
    const culturalMarkers: string[] = [];

    // Analyze primary emotions
    for (const [emotion, keywords] of this.emotionKeywords) {
      let score = 0;
      for (const keyword of keywords) {
        for (const token of tokens) {
          if (token.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(token)) {
            score++;
          }
        }
      }
      if (score > 0) {
        emotionScores.set(emotion, score);
      }
    }

    // Check cultural emotion markers
    for (const [markerType, markerData] of this.culturalEmotionMarkers) {
      for (const marker of markerData.markers) {
        const markerTokens = marker.toLowerCase().split(' ');
        if (markerTokens.every((markerToken: string) =>
          tokens.some(token => token.includes(markerToken))
        )) {
          culturalMarkers.push(marker);
          const culturalScore = (emotionScores.get(markerData.emotion) || 0) * markerData.culturalWeight;
          emotionScores.set(markerData.emotion, culturalScore);
        }
      }
    }

    // Determine primary and secondary emotions
    const sortedEmotions = Array.from(emotionScores.entries())
      .sort(([,a], [,b]) => b - a);

    const primary = sortedEmotions.length > 0 ? sortedEmotions[0][0] : 'neutral';
    const secondary = sortedEmotions.slice(1, 3).map(([emotion]) => emotion);
    const confidence = sortedEmotions.length > 0 ? Math.min(sortedEmotions[0][1] / 5, 1) : 0.5;

    return {
      primary,
      secondary,
      confidence,
      culturalMarkers
    };
  }

  private applyCulturalContext(tokens: string[], userProfile: UserProfile): { adjustment: number; context?: string } {
    let adjustment = 0;
    let context: string | undefined;

    // Check for cultural stress markers
    for (const [markerType, markerData] of this.culturalEmotionMarkers) {
      for (const marker of markerData.markers) {
        const markerTokens = marker.toLowerCase().split(' ');
        if (markerTokens.some((markerToken: string) =>
          tokens.some(token => token.includes(markerToken))
        )) {
          adjustment -= 0.2 * markerData.culturalWeight; // Cultural stressors increase negative sentiment
          context = `Cultural stress: ${markerType}`;
          break;
        }
      }
      if (context) break;
    }

    return { adjustment, context };
  }

  private determineSentimentLabel(score: number): { label: 'positive' | 'negative' | 'neutral'; confidence: number } {
    if (score > 0.1) {
      return { label: 'positive', confidence: Math.min(score, 1) };
    } else if (score < -0.1) {
      return { label: 'negative', confidence: Math.min(Math.abs(score), 1) };
    } else {
      return { label: 'neutral', confidence: 1 - Math.abs(score) };
    }
  }

  private calculateIntensity(tokens: string[], score: number): number {
    const baseIntensity = Math.abs(score) * 5; // Scale to 0-5
    
    // Check for intensity words
    let intensityBoost = 0;
    for (const token of tokens) {
      if (this.intensityModifiers.has(token)) {
        const modifier = this.intensityModifiers.get(token)!;
        if (modifier > 1) intensityBoost += (modifier - 1) * 2;
      }
    }
    
    return Math.min(10, baseIntensity + intensityBoost);
  }

  private calculateVariability(scores: number[]): number {
    if (scores.length < 2) return 0;
    
    const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length;
    
    return Math.sqrt(variance);
  }

  private calculateStability(scores: number[]): number {
    if (scores.length < 3) return 0;
    
    let stabilityScore = 0;
    for (let i = 1; i < scores.length; i++) {
      const change = Math.abs(scores[i] - scores[i - 1]);
      stabilityScore += (1 - Math.min(change, 1)); // Less change = more stability
    }
    
    return stabilityScore / (scores.length - 1);
  }

  private identifyConcerningPatterns(scores: number[], messages: Message[]): string[] {
    const patterns: string[] = [];
    
    // Consistent negative trend
    const recentNegative = scores.slice(-5).filter(score => score < -0.3).length;
    if (recentNegative >= 4) {
      patterns.push('Consistent negative sentiment in recent messages');
    }
    
    // Rapid deterioration
    if (scores.length >= 3) {
      const latest = scores.slice(-3);
      if (latest.every((score, i) => i === 0 || score < latest[i - 1])) {
        patterns.push('Rapid sentiment deterioration');
      }
    }
    
    // Extreme negative sentiment
    if (scores.some(score => score < -0.8)) {
      patterns.push('Extremely negative sentiment detected');
    }
    
    return patterns;
  }
}

export default SentimentAnalyzer;