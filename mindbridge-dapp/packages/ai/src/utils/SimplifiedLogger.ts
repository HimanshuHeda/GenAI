// Simplified Logger utility for MindBridge AI system
export interface LogEntry {
  timestamp: Date;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  userId?: string;
  sessionId?: string;
  context?: Record<string, any>;
  stack?: string;
}

export interface UserActivity {
  userId: string;
  sessionId: string;
  action: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface PrivacyConfig {
  logUserMessages: boolean;
  logUserProfile: boolean;
  dataRetentionDays: number;
  anonymizeAfterDays: number;
  encryptSensitiveData: boolean;
}

export class Logger {
  private logBuffer: LogEntry[] = [];
  private privacyConfig: PrivacyConfig;

  constructor(
    name: string = 'MindBridgeAI',
    privacyConfig: Partial<PrivacyConfig> = {}
  ) {
    this.privacyConfig = {
      logUserMessages: false, // Default to privacy-first
      logUserProfile: false,
      dataRetentionDays: 30,
      anonymizeAfterDays: 7,
      encryptSensitiveData: true,
      ...privacyConfig
    };
  }

  /**
   * Log debug message
   */
  debug(message: string, context?: Record<string, any>, userId?: string, sessionId?: string): void {
    this.log('debug', message, context, userId, sessionId);
  }

  /**
   * Log info message
   */
  info(message: string, context?: Record<string, any>, userId?: string, sessionId?: string): void {
    this.log('info', message, context, userId, sessionId);
  }

  /**
   * Log warning message
   */
  warn(message: string, context?: Record<string, any>, userId?: string, sessionId?: string): void {
    this.log('warn', message, context, userId, sessionId);
  }

  /**
   * Log error message
   */
  error(message: string, error?: Error, context?: Record<string, any>, userId?: string, sessionId?: string): void {
    const logContext = {
      ...context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : undefined
    };
    
    this.log('error', message, logContext, userId, sessionId, error?.stack);
  }

  /**
   * Log critical system error
   */
  critical(message: string, error?: Error, context?: Record<string, any>, userId?: string, sessionId?: string): void {
    const logContext = {
      ...context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : undefined
    };
    
    this.log('critical', message, logContext, userId, sessionId, error?.stack);
  }

  /**
   * Log user activity (with privacy considerations)
   */
  logUserActivity(
    userId: string,
    sessionId: string,
    action: string,
    metadata?: Record<string, any>
  ): void {
    // Sanitize metadata to remove sensitive information
    const sanitizedMetadata = this.sanitizeMetadata(metadata);
    
    console.log(`User Activity: ${action}`, {
      userId: this.anonymizeUserId(userId),
      sessionId: this.anonymizeSessionId(sessionId),
      timestamp: new Date(),
      metadata: sanitizedMetadata
    });
  }

  /**
   * Log conversation interaction (privacy-aware)
   */
  logConversation(
    userId: string,
    sessionId: string,
    messageType: 'user' | 'ai',
    messageLength: number,
    sentiment?: string,
    crisisLevel?: number
  ): void {
    if (!this.privacyConfig.logUserMessages) {
      // Only log metadata, not content
      this.logUserActivity(userId, sessionId, 'message_sent', {
        messageType,
        messageLength,
        sentiment,
        crisisLevel: crisisLevel ? this.categorizeCrisisLevel(crisisLevel) : undefined
      });
    }
  }

  /**
   * Log AI model performance metrics
   */
  logModelPerformance(
    modelName: string,
    operation: string,
    duration: number,
    success: boolean,
    context?: Record<string, any>
  ): void {
    this.info(`Model performance: ${modelName}`, {
      operation,
      duration,
      success,
      ...context
    });
  }

  /**
   * Log privacy-sensitive event
   */
  logPrivacyEvent(
    event: 'data_access' | 'data_deletion' | 'data_anonymization' | 'consent_change',
    userId: string,
    details: Record<string, any>
  ): void {
    this.info(`Privacy event: ${event}`, {
      userId: this.anonymizeUserId(userId),
      ...details
    });
  }

  /**
   * Log security event
   */
  logSecurityEvent(
    event: 'authentication' | 'authorization' | 'data_breach' | 'suspicious_activity',
    severity: 'low' | 'medium' | 'high' | 'critical',
    details: Record<string, any>
  ): void {
    const level = severity === 'critical' ? 'critical' : 
                 severity === 'high' ? 'error' :
                 severity === 'medium' ? 'warn' : 'info';

    this.log(level, `Security event: ${event}`, {
      severity,
      ...details
    });
  }

  /**
   * Create audit trail for compliance
   */
  createAuditTrail(
    action: string,
    userId: string,
    resource: string,
    outcome: 'success' | 'failure',
    details?: Record<string, any>
  ): void {
    this.info(`Audit: ${action}`, {
      userId: this.anonymizeUserId(userId),
      resource,
      outcome,
      ...details
    });
  }

  private log(
    level: 'debug' | 'info' | 'warn' | 'error' | 'critical',
    message: string,
    context?: Record<string, any>,
    userId?: string,
    sessionId?: string,
    stack?: string
  ): void {
    const entry: LogEntry = {
      timestamp: new Date(),
      level,
      message,
      userId: userId ? this.anonymizeUserId(userId) : undefined,
      sessionId: sessionId ? this.anonymizeSessionId(sessionId) : undefined,
      context: context ? this.sanitizeMetadata(context) : undefined,
      stack
    };

    this.logBuffer.push(entry);

    // Console output for development
    console.log(`[${entry.timestamp.toISOString()}] ${level.toUpperCase()}: ${message}`, context || '');
  }

  private anonymizeUserId(userId: string): string {
    // Simple hash-based anonymization (browser-compatible)
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      const char = userId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16).substring(0, 16);
  }

  private anonymizeSessionId(sessionId: string): string {
    // Simple hash-based anonymization (browser-compatible)
    let hash = 0;
    for (let i = 0; i < sessionId.length; i++) {
      const char = sessionId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16).substring(0, 16);
  }

  private sanitizeMetadata(metadata?: Record<string, any>): Record<string, any> | undefined {
    if (!metadata) return undefined;

    const sanitized: Record<string, any> = {};
    const sensitiveKeys = ['password', 'token', 'secret', 'key', 'email', 'phone', 'address'];

    for (const [key, value] of Object.entries(metadata)) {
      const keyLower = key.toLowerCase();
      
      if (sensitiveKeys.some(sensitive => keyLower.includes(sensitive))) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof value === 'string' && value.length > 100) {
        // Truncate long strings that might contain sensitive information
        sanitized[key] = value.substring(0, 100) + '...';
      } else {
        sanitized[key] = value;
      }
    }

    return sanitized;
  }

  private categorizeCrisisLevel(level: number): string {
    if (level >= 8) return 'high';
    if (level >= 5) return 'medium';
    return 'low';
  }

  /**
   * Get recent logs for debugging
   */
  getRecentLogs(count: number = 10): LogEntry[] {
    return this.logBuffer.slice(-count);
  }

  /**
   * Clear log buffer
   */
  clearLogs(): void {
    this.logBuffer = [];
  }
}

// Singleton instance for global use
let globalLogger: Logger | null = null;

export function getLogger(name?: string, privacyConfig?: Partial<PrivacyConfig>): Logger {
  if (!globalLogger) {
    globalLogger = new Logger(name, privacyConfig);
  }
  return globalLogger;
}

export default Logger;