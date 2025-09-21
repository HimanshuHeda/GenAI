# MindBridge dApp - Decentralized Mental Health Companion

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.72%2B-61dafb)](https://reactnative.dev/)

> **GenAI Exchange Hackathon 2025 Winner** 🏆  
> AI-powered mental health companion with Zero-Knowledge privacy and cultural sensitivity for Indian youth.

## 🎯 Project Overview

MindBridge is a revolutionary decentralized application that combines advanced AI, blockchain privacy, and cultural intelligence to provide mental health support specifically designed for Indian youth aged 18-25. The platform addresses mental health stigma through:

- **🤖 Culturally-Aware AI**: Gemini Pro fine-tuned for Indian contexts
- **🔐 Zero-Knowledge Privacy**: Complete data sovereignty through ZK proofs
- **🏆 NFT Data Ownership**: Users own their mental health journey
- **⚡ Lightning Network**: Instant micropayments for peer support
- **🌍 Cultural Sensitivity**: Deep understanding of Indian family dynamics

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    MindBridge dApp Stack                    │
├─────────────────────────────────────────────────────────────┤
│  Frontend: React Native + Next.js + Web3.js               │
│  Backend: Node.js + GraphQL + MongoDB + Redis             │
│  AI: Google Vertex AI + Gemini Pro + Hugging Face         │
│  Blockchain: Polygon PoS + Ethereum L1 + Lightning        │
│  Privacy: Circom + snarkjs + Zero-Knowledge Proofs        │
│  Storage: IPFS + MongoDB (Encrypted) + Redis Cache        │
│  Monitoring: Prometheus + Grafana + Custom Analytics      │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- Docker and Docker Compose
- Git
- Google Cloud Account (for Vertex AI)
- Polygon wallet with test MATIC

### Installation

```bash
# Clone the repository
git clone https://github.com/mindbridge-team/mindbridge-dapp.git
cd mindbridge-dapp

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development environment
npm run docker:up

# Deploy smart contracts
npm run blockchain:deploy

# Start development servers
npm run dev
```

### Environment Setup

1. **Google Cloud Setup**:
   ```bash
   # Enable Vertex AI API
   gcloud services enable aiplatform.googleapis.com
   
   # Create service account
   gcloud iam service-accounts create mindbridge-ai
   
   # Download credentials
   gcloud iam service-accounts keys create ./config/google-service-account.json \
     --iam-account=mindbridge-ai@your-project-id.iam.gserviceaccount.com
   ```

2. **Blockchain Setup**:
   ```bash
   # Get test MATIC from faucet
   # https://faucet.polygon.technology/
   
   # Deploy contracts to Mumbai testnet
   npm run blockchain:compile
   npm run blockchain:deploy
   ```

3. **Lightning Network Setup**:
   ```bash
   # Start Bitcoin testnet and LND
   npm run docker:up bitcoind lnd
   
   # Create LND wallet
   docker exec -it mindbridge-lnd lncli create
   
   # Fund Lightning channels
   docker exec -it mindbridge-lnd lncli newaddress p2wkh
   ```

## 📱 Applications

### Mobile App (React Native)
- **Location**: `apps/mobile/`
- **Features**: AI chat, mood tracking, crisis detection
- **Platforms**: iOS and Android
- **Tech Stack**: React Native, Expo, Web3Modal

### Web Dashboard (Next.js)
- **Location**: `apps/web/`
- **Features**: Analytics, NFT management, community
- **Tech Stack**: Next.js 14, Tailwind CSS, Web3.js

### Admin Portal (Next.js)
- **Location**: `apps/admin/`
- **Features**: Content moderation, analytics, user management
- **Tech Stack**: Next.js 14, Chart.js, MongoDB

## 🔧 Core Packages

### AI & ML Services
- **Location**: `packages/ai/`
- **Features**: Gemini Pro integration, cultural models, crisis detection
- **Models**: Cultural sensitivity, sentiment analysis, crisis prediction

### Blockchain Services
- **Location**: `packages/blockchain/`
- **Features**: Smart contracts, Web3 integration, Lightning Network
- **Contracts**: Identity, Wellness NFTs, Data Marketplace

### Privacy Layer
- **Location**: `packages/privacy/`
- **Features**: Zero-Knowledge proofs, homomorphic encryption
- **Circuits**: Wellness verification, peer support, anonymous achievements

### Cultural Framework
- **Location**: `packages/cultural/`
- **Features**: Indian context processing, language support
- **Languages**: Hindi, English, Tamil, Telugu, Bengali, Marathi

## 🔐 Privacy & Security

### Zero-Knowledge Proofs
- **Wellness Milestones**: Prove progress without revealing data
- **Peer Support**: Anonymous reputation system
- **Crisis Intervention**: Private emergency protocols

### Data Sovereignty
- **NFT Ownership**: Users own their mental health data
- **Blockchain Storage**: Immutable, encrypted records
- **Research Licensing**: Monetize data with full consent

### Cultural Privacy
- **Family Dynamics**: Respect for Indian family structures
- **Religious Sensitivity**: Multi-faith support systems
- **Regional Adaptation**: Localized privacy preferences

## 💰 Tokenomics

### MIND Token
- **Total Supply**: 1 billion tokens
- **Distribution**: Community (40%), Staking (20%), Development (15%)
- **Utility**: Governance, staking rewards, premium features

### Lightning Network
- **Micropayments**: 1-100 sats for peer support
- **Therapy Sessions**: 1000+ sats per session
- **Content Rewards**: 5-50 sats per helpful content

### NFT Marketplace
- **Wellness NFTs**: Achievement tokens (₹100-1000)
- **Data Licenses**: Research access (₹10k-100k)
- **Community Badges**: Reputation tokens (₹20-100)

## 🌍 Cultural Features

### Indian Context Adaptation
- **Family Dynamics**: Joint vs nuclear family scenarios
- **Academic Pressure**: JEE/NEET stress management
- **Regional Variations**: North/South/East/West India contexts
- **Gender-Specific**: Tailored support for diverse needs

### Language Support
- **Primary**: Hindi and English code-mixing
- **Regional**: Tamil, Telugu, Bengali, Marathi, Gujarati
- **Cultural Idioms**: Context-aware expressions
- **Religious Integration**: Multi-faith spiritual support

### Crisis Management
- **Cultural Sensitivity**: Family-aware intervention
- **Local Resources**: India-specific helplines
- **Emergency Protocols**: Culturally appropriate responses

## 📊 Development Workflow

### Commands
```bash
# Development
npm run dev              # Start all services
npm run build           # Build all packages
npm run test            # Run test suites
npm run lint            # Code linting

# Blockchain
npm run blockchain:compile    # Compile smart contracts
npm run blockchain:deploy     # Deploy to testnet
npm run blockchain:verify     # Verify contracts

# AI Training
npm run ai:train             # Train cultural models
npm run ai:evaluate          # Evaluate model performance
npm run ai:deploy            # Deploy to Vertex AI

# Infrastructure
npm run docker:build         # Build Docker images
npm run docker:up           # Start all services
npm run docker:down         # Stop all services
```

### Testing
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# AI model tests
npm run test:ai

# Blockchain tests
npm run test:contracts
```

## 🚀 Deployment

### Development
```bash
# Local development with hot reload
npm run dev
```

### Staging
```bash
# Deploy to staging environment
npm run deploy:staging
```

### Production
```bash
# Deploy to production
npm run deploy:production
```

### Monitoring
- **Prometheus**: Metrics collection at `:9090`
- **Grafana**: Dashboard at `:3001`
- **Logs**: Centralized logging with Winston
- **Alerts**: Custom alerts for system health

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards
- TypeScript for type safety
- ESLint + Prettier for formatting
- Jest for testing
- Conventional commits
- 80%+ test coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Cloud**: Vertex AI and Gemini Pro support
- **Polygon**: Blockchain infrastructure
- **Lightning Labs**: Lightning Network integration
- **Indian Mental Health Community**: Cultural insights and feedback
- **GenAI Exchange Hackathon**: Platform and opportunity

## 🔗 Links

- **Website**: [https://mindbridge.ai](https://mindbridge.ai)
- **Documentation**: [https://docs.mindbridge.ai](https://docs.mindbridge.ai)
- **Community**: [https://discord.gg/mindbridge](https://discord.gg/mindbridge)
- **Twitter**: [@MindBridgeAI](https://twitter.com/MindBridgeAI)

---

**Built with ❤️ for mental health awareness in India**

*"Breaking barriers, building bridges to mental wellness"*