// Indian Context Processor for Cultural Adaptation
import { UserProfile, ConversationContext } from '../index';

export interface RegionalContext {
  region: 'north' | 'south' | 'east' | 'west' | 'northeast' | 'central';
  state: string;
  language: string;
  culturalNuances: string[];
  communicationStyle: string;
  familyStructure: string;
  religiousInfluences: string[];
}

export interface FamilyDynamics {
  type: 'nuclear' | 'joint' | 'extended';
  parentalExpectations: string[];
  siblingDynamics: string[];
  genderRoles: string[];
  decisionMakingStyle: string;
}

export interface SocioeconomicContext {
  economicBackground: 'lower' | 'lower-middle' | 'middle' | 'upper-middle' | 'upper';
  educationalAccess: string[];
  careerPressures: string[];
  financialStressors: string[];
  opportunityConstraints: string[];
}

export interface GenerationalContext {
  ageGroup: string;
  generationalValues: string[];
  technologyAdaptation: string;
  culturalConflicts: string[];
  modernVsTraditional: string;
}

export interface CulturalAdaptation {
  communicationStyle: string;
  metaphorsAndExamples: string[];
  culturallyRelevantCoping: string[];
  familyInvolvementLevel: string;
  religiousSpiritualResources: string[];
}

export class IndianContextProcessor {
  private regionalData: Map<string, RegionalContext> = new Map();
  private culturalMarkers: Map<string, any> = new Map();
  private familyPatterns: Map<string, FamilyDynamics> = new Map();
  private socioeconomicFactors: Map<string, SocioeconomicContext> = new Map();

  constructor() {
    this.initializeRegionalData();
    this.initializeCulturalMarkers();
    this.initializeFamilyPatterns();
    this.initializeSocioeconomicFactors();
  }

  private initializeRegionalData(): void {
    // North India
    this.regionalData.set('north', {
      region: 'north',
      state: '',
      language: 'Hindi/Punjabi/Urdu',
      culturalNuances: [
        'Strong emphasis on family honor (izzat)',
        'Hierarchical family structures',
        'Direct communication style',
        'Business and entrepreneurship culture',
        'Festival celebrations are community-wide'
      ],
      communicationStyle: 'Direct but respectful',
      familyStructure: 'Patriarchal joint families common',
      religiousInfluences: ['Hinduism', 'Sikhism', 'Islam']
    });

    // South India
    this.regionalData.set('south', {
      region: 'south',
      state: '',
      language: 'Tamil/Telugu/Malayalam/Kannada',
      culturalNuances: [
        'High emphasis on education and academic achievement',
        'Traditional values with modern outlook',
        'Language pride and cultural preservation',
        'Strong artistic and literary traditions',
        'Respect for elders and teachers'
      ],
      communicationStyle: 'Polite and indirect',
      familyStructure: 'Traditional but education-focused',
      religiousInfluences: ['Hinduism', 'Christianity', 'Islam']
    });

    // East India
    this.regionalData.set('east', {
      region: 'east',
      state: '',
      language: 'Bengali/Odia/Assamese',
      culturalNuances: [
        'Intellectual and artistic appreciation',
        'Political awareness and social consciousness',
        'Emphasis on literature and philosophy',
        'Community bonding and social gatherings',
        'Traditional festivals with modern celebrations'
      ],
      communicationStyle: 'Expressive and emotional',
      familyStructure: 'Close-knit families with emotional bonds',
      religiousInfluences: ['Hinduism', 'Islam', 'Buddhism']
    });

    // West India
    this.regionalData.set('west', {
      region: 'west',
      state: '',
      language: 'Marathi/Gujarati/Hindi',
      culturalNuances: [
        'Business-oriented and entrepreneurial',
        'Blend of traditional and cosmopolitan values',
        'Strong work ethic and success orientation',
        'Community support systems',
        'Progressive outlook on social issues'
      ],
      communicationStyle: 'Pragmatic and business-oriented',
      familyStructure: 'Nuclear families increasing but joint family values',
      religiousInfluences: ['Hinduism', 'Jainism', 'Islam', 'Christianity']
    });
  }

  private initializeCulturalMarkers(): void {
    // Language patterns indicating cultural context
    this.culturalMarkers.set('academic_pressure', {
      hindi: ['padhai ka bojh', 'career ki tension', 'competitive exam'],
      tamil: ['kalvi azhuttam', 'exam bayam', 'porattam'],
      bengali: ['porashona chap', 'chakrir chinta', 'exam er bhoy'],
      markers: ['JEE', 'NEET', 'UPSC', 'board exam', 'rank', 'percentile']
    });

    this.culturalMarkers.set('family_expectations', {
      hindi: ['maa baap ki asha', 'ghar ki ijjat', 'khandaan ka naam'],
      tamil: ['kudumba manam', 'veettu perumai', 'appa amma asai'],
      bengali: ['baba mar asha', 'gharr samman', 'kutumber naam'],
      markers: ['family pride', 'parents dreams', 'relatives comparison']
    });

    this.culturalMarkers.set('marriage_pressure', {
      hindi: ['shaadi ka dabav', 'rishta dekh rahe', 'sasural ki tension'],
      tamil: ['kalyanam pressure', 'varappogiren', 'maapillai paakka'],
      bengali: ['biye er chap', 'bor dekha', 'shoshur badi'],
      markers: ['arranged marriage', 'dowry', 'caste', 'horoscope matching']
    });

    this.culturalMarkers.set('career_dilemma', {
      hindi: ['kya karu samajh nahi aa raha', 'career confusion', 'future dark'],
      tamil: ['enna panrathu theriyala', 'career problem', 'bhavi karuppu'],
      bengali: ['ki korbo bujhte parchi na', 'career niye chinta', 'bhobishyot ondhokar'],
      markers: ['engineering vs medical', 'arts stream shame', 'job security']
    });
  }

  private initializeFamilyPatterns(): void {
    this.familyPatterns.set('joint_family', {
      type: 'joint',
      parentalExpectations: [
        'Academic excellence and career success',
        'Maintaining family traditions and values',
        'Contributing to family reputation',
        'Respect for elders and authority',
        'Participation in family decisions'
      ],
      siblingDynamics: [
        'Comparison and competition',
        'Shared responsibilities and support',
        'Gender-based different expectations',
        'Elder sibling responsibility model'
      ],
      genderRoles: [
        'Boys: Career focus and family earning responsibility',
        'Girls: Balance between career and family preparation',
        'Traditional roles with modern adaptations',
        'Safety and behavioral restrictions'
      ],
      decisionMakingStyle: 'Collective with elder authority'
    });

    this.familyPatterns.set('nuclear_family', {
      type: 'nuclear',
      parentalExpectations: [
        'Academic achievement and career stability',
        'Financial independence and success',
        'Personal happiness with cultural values',
        'Modern outlook with traditional roots'
      ],
      siblingDynamics: [
        'Individual focus with mutual support',
        'Less comparison but performance pressure',
        'Modern gender expectations',
        'Collaborative rather than hierarchical'
      ],
      genderRoles: [
        'More egalitarian approach',
        'Career focus for both genders',
        'Shared household responsibilities',
        'Individual choice with family input'
      ],
      decisionMakingStyle: 'Democratic with parental guidance'
    });
  }

  private initializeSocioeconomicFactors(): void {
    this.socioeconomicFactors.set('middle_class', {
      economicBackground: 'middle',
      educationalAccess: [
        'Government schools with private tuition',
        'Coaching classes for competitive exams',
        'Limited access to premium institutions',
        'Self-funded higher education'
      ],
      careerPressures: [
        'Stable job security over passion',
        'Government job preferences',
        'Engineering/Medical as primary options',
        'Quick return on educational investment'
      ],
      financialStressors: [
        'Education loan burdens',
        'Limited recreational spending',
        'Healthcare cost concerns',
        'Job market competition'
      ],
      opportunityConstraints: [
        'Limited network and connections',
        'Geographic mobility restrictions',
        'Resource constraints for skill development',
        'Traditional career path adherence'
      ]
    });
  }

  /**
   * Process user's cultural context for personalized support
   */
  async processUserContext(userProfile: UserProfile): Promise<CulturalAdaptation> {
    const regionalContext = this.getRegionalContext(userProfile);
    const familyContext = this.getFamilyContext(userProfile);
    const socioeconomicContext = this.getSocioeconomicContext(userProfile);
    const generationalContext = this.getGenerationalContext(userProfile);

    return this.generateCulturalAdaptation(
      regionalContext,
      familyContext,
      socioeconomicContext,
      generationalContext,
      userProfile
    );
  }

  /**
   * Analyze conversation for cultural markers
   */
  analyzeCulturalMarkers(message: string, userProfile: UserProfile): string[] {
    const detectedMarkers: string[] = [];
    const messageLower = message.toLowerCase();

    // Check for cultural markers in the message
    for (const [markerType, markerData] of this.culturalMarkers) {
      // Check English markers
      if (markerData.markers) {
        for (const marker of markerData.markers) {
          if (messageLower.includes(marker.toLowerCase())) {
            detectedMarkers.push(`${markerType}: ${marker}`);
          }
        }
      }

      // Check language-specific markers based on user's region
      const userRegion = this.getUserRegion(userProfile);
      if (userRegion === 'north' && markerData.hindi) {
        for (const hindiMarker of markerData.hindi) {
          if (messageLower.includes(hindiMarker.toLowerCase())) {
            detectedMarkers.push(`${markerType}: ${hindiMarker} (Hindi)`);
          }
        }
      }
      // Add similar checks for other languages
    }

    return detectedMarkers;
  }

  /**
   * Get culturally appropriate responses
   */
  getCulturallyAppropriateResponse(
    issue: string,
    userProfile: UserProfile
  ): { response: string; culturalContext: string[] } {
    const regionalContext = this.getRegionalContext(userProfile);
    const familyType = userProfile.familyType || 'nuclear';

    let response = '';
    const culturalContext: string[] = [];

    switch (issue) {
      case 'academic_pressure':
        if (regionalContext.region === 'south') {
          response = 'I understand the immense pressure to excel academically, especially in South Indian culture where education is highly valued. Remember that your worth isn\'t defined solely by exam scores or rankings.';
          culturalContext.push('South Indian emphasis on academic excellence');
        } else if (regionalContext.region === 'north') {
          response = 'Main samjh sakta hun ki competitive exams ka kitna pressure hota hai. Yaad rakhiye ki success ke kai raste hain, sirf ek exam se aapki jindagi decide nahi hoti.';
          culturalContext.push('North Indian competitive exam culture');
        }
        break;

      case 'family_expectations':
        if (familyType === 'joint') {
          response = 'Living in a joint family means balancing multiple expectations, which can be overwhelming. It\'s important to communicate your feelings while respecting family dynamics.';
          culturalContext.push('Joint family dynamics and expectations');
        } else {
          response = 'Even in nuclear families, parental expectations can feel intense. Remember that open communication with your parents about your feelings and aspirations is key.';
          culturalContext.push('Nuclear family expectations');
        }
        break;

      case 'marriage_pressure':
        response = 'Marriage-related pressure is common in Indian families, but remember that your happiness and readiness matter. Consider having honest conversations about your timeline and preferences.';
        culturalContext.push('Indian marriage customs and family pressure');
        break;

      case 'career_confusion':
        response = 'Career confusion is natural, especially with limited "acceptable" career options in Indian society. Explore your interests while considering practical aspects your family values.';
        culturalContext.push('Limited career options perception in Indian society');
        break;

      default:
        response = 'I understand you\'re going through a difficult time. In our culture, seeking help shows strength, not weakness.';
        culturalContext.push('Cultural stigma around mental health');
    }

    return { response, culturalContext };
  }

  /**
   * Generate family involvement suggestions
   */
  generateFamilyInvolvementStrategy(
    userProfile: UserProfile,
    issueType: string
  ): { strategy: string; considerations: string[] } {
    const familyType = userProfile.familyType || 'nuclear';
    const age = userProfile.age;
    
    let strategy = '';
    const considerations: string[] = [];

    if (age < 18) {
      strategy = 'Parent/guardian involvement is strongly recommended given age and cultural context';
      considerations.push('Minor status requires family involvement');
      considerations.push('Cultural expectation of family support for young people');
    } else if (age >= 18 && age <= 25) {
      if (familyType === 'joint') {
        strategy = 'Gradual family involvement with trusted family member as intermediary';
        considerations.push('Multiple family members may have opinions');
        considerations.push('Start with most understanding family member');
        considerations.push('Consider generation gap in mental health understanding');
      } else {
        strategy = 'Direct communication with parents/immediate family with preparation';
        considerations.push('Parents may need education about mental health');
        considerations.push('Frame conversation around cultural values');
      }
    } else {
      strategy = 'Optional family involvement based on user preference and family dynamics';
      considerations.push('Adult autonomy vs cultural family involvement');
      considerations.push('Consider impact on family relationships');
    }

    // Issue-specific considerations
    if (issueType === 'academic_pressure') {
      considerations.push('Family may be source of pressure - approach carefully');
      considerations.push('Focus on alternative success definitions');
    } else if (issueType === 'marriage_pressure') {
      considerations.push('Highly sensitive topic requiring cultural navigation');
      considerations.push('May require external family elder mediation');
    }

    return { strategy, considerations };
  }

  /**
   * Get region-specific resources
   */
  getRegionSpecificResources(userProfile: UserProfile): string[] {
    const region = this.getUserRegion(userProfile);
    const resources: string[] = [];

    switch (region) {
      case 'north':
        resources.push('Delhi-NCR: Fortis Hospital Mental Health Services');
        resources.push('Punjab: Government Medical College Counseling');
        resources.push('Haryana: PGIMS Rohtak Psychology Department');
        break;

      case 'south':
        resources.push('Tamil Nadu: NIMHANS Bangalore (nearby)');
        resources.push('Karnataka: NIMHANS - National Institute of Mental Health');
        resources.push('Kerala: Government Medical College Mental Health');
        resources.push('Andhra Pradesh: Osmania Medical College Services');
        break;

      case 'west':
        resources.push('Maharashtra: Tata Institute of Social Sciences');
        resources.push('Gujarat: BJ Medical College Mental Health');
        resources.push('Mumbai: Bombay Hospital Psychology Department');
        break;

      case 'east':
        resources.push('West Bengal: Institute of Psychiatry, Kolkata');
        resources.push('Odisha: SCB Medical College Mental Health');
        resources.push('Assam: Gauhati Medical College Services');
        break;

      default:
        resources.push('National Mental Health Programme resources');
        resources.push('District hospital mental health services');
    }

    return resources;
  }

  private getRegionalContext(userProfile: UserProfile): RegionalContext {
    const region = this.getUserRegion(userProfile);
    return this.regionalData.get(region) || this.regionalData.get('north')!;
  }

  private getFamilyContext(userProfile: UserProfile): FamilyDynamics {
    const familyType = userProfile.familyType || 'nuclear';
    return this.familyPatterns.get(`${familyType}_family`) || this.familyPatterns.get('nuclear_family')!;
  }

  private getSocioeconomicContext(userProfile: UserProfile): SocioeconomicContext {
    // Simplified - in real implementation, this would be more sophisticated
    return this.socioeconomicFactors.get('middle_class')!;
  }

  private getGenerationalContext(userProfile: UserProfile): GenerationalContext {
    const age = userProfile.age;
    
    if (age >= 13 && age <= 17) {
      return {
        ageGroup: 'Gen Z Teens',
        generationalValues: ['Digital native', 'Social awareness', 'Individual expression', 'Global outlook'],
        technologyAdaptation: 'Native',
        culturalConflicts: ['Traditional vs modern values', 'Parent-teen communication gap'],
        modernVsTraditional: 'Leaning modern but respecting traditions'
      };
    } else if (age >= 18 && age <= 25) {
      return {
        ageGroup: 'Gen Z Young Adults',
        generationalValues: ['Career flexibility', 'Mental health awareness', 'Social justice', 'Work-life balance'],
        technologyAdaptation: 'Native',
        culturalConflicts: ['Career choice freedom', 'Marriage timing', 'Lifestyle choices'],
        modernVsTraditional: 'Balancing both with preference for choice'
      };
    } else {
      return {
        ageGroup: 'Millennial',
        generationalValues: ['Career stability', 'Family balance', 'Economic security', 'Social responsibility'],
        technologyAdaptation: 'Adapted',
        culturalConflicts: ['Traditional expectations vs personal goals'],
        modernVsTraditional: 'Integration of both'
      };
    }
  }

  private generateCulturalAdaptation(
    regional: RegionalContext,
    family: FamilyDynamics,
    socioeconomic: SocioeconomicContext,
    generational: GenerationalContext,
    userProfile: UserProfile
  ): CulturalAdaptation {
    return {
      communicationStyle: this.adaptCommunicationStyle(regional, generational),
      metaphorsAndExamples: this.generateCulturalMetaphors(regional, userProfile),
      culturallyRelevantCoping: this.generateCopingStrategies(regional, family),
      familyInvolvementLevel: this.determineFamilyInvolvement(family, userProfile),
      religiousSpiritualResources: this.generateSpiritualResources(regional, userProfile)
    };
  }

  private adaptCommunicationStyle(regional: RegionalContext, generational: GenerationalContext): string {
    if (regional.region === 'south') {
      return 'Polite, respectful, with emphasis on education and achievement while being encouraging';
    } else if (regional.region === 'north') {
      return 'Direct but warm, acknowledging family dynamics and practical concerns';
    } else if (regional.region === 'east') {
      return 'Emotionally expressive, intellectually engaging, with cultural and artistic references';
    } else {
      return 'Pragmatic and solution-focused while being culturally sensitive';
    }
  }

  private generateCulturalMetaphors(regional: RegionalContext, userProfile: UserProfile): string[] {
    const metaphors: string[] = [];
    
    if (regional.region === 'south') {
      metaphors.push('Like a temple sculpture, you are being carefully carved - each challenge shapes your strength');
      metaphors.push('Education is like a banyan tree - it provides shade for generations');
    } else if (regional.region === 'north') {
      metaphors.push('Life is like farming - some seasons are for planting, others for harvesting');
      metaphors.push('Family is like a strong fort - it protects but also needs maintenance');
    }
    
    return metaphors;
  }

  private generateCopingStrategies(regional: RegionalContext, family: FamilyDynamics): string[] {
    const strategies: string[] = [];
    
    strategies.push('Practice meditation or prayer as per your family traditions');
    strategies.push('Engage in regional cultural activities like music or dance');
    strategies.push('Seek wisdom from respected family elders');
    strategies.push('Use journaling in your native language to express feelings');
    
    if (family.type === 'joint') {
      strategies.push('Find a quiet space in the house for personal reflection');
      strategies.push('Communicate with family members individually to build understanding');
    }
    
    return strategies;
  }

  private determineFamilyInvolvement(family: FamilyDynamics, userProfile: UserProfile): string {
    if (userProfile.age < 18) {
      return 'High - Parent/guardian involvement required';
    } else if (family.type === 'joint') {
      return 'Moderate - Gradual involvement with cultural sensitivity';
    } else {
      return 'Moderate - Direct family communication with preparation';
    }
  }

  private generateSpiritualResources(regional: RegionalContext, userProfile: UserProfile): string[] {
    const resources: string[] = [];
    
    resources.push('Local temple/mosque/church counseling services');
    resources.push('Spiritual practices from your tradition (meditation, prayer, chanting)');
    resources.push('Community religious events for social support');
    resources.push('Seek guidance from respected religious leaders in your community');
    
    return resources;
  }

  /**
   * Extract cultural markers from message text
   */
  extractCulturalMarkers(message: string, userProfile: UserProfile): string[] {
    return this.analyzeCulturalMarkers(message, userProfile);
  }

  private getUserRegion(userProfile: UserProfile): string {
    // Simplified region detection - in real implementation, this would use location data
    return 'north'; // Default
  }
}

export default IndianContextProcessor;