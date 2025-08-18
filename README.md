# SupportHub - AI-Powered Customer Support Platform

A modern, responsive web application built with React, TypeScript, and Tailwind CSS that provides AI-powered customer support with human escalation capabilities.

## Features

- 🤖 **AI-Powered Support**: Instant responses using advanced AI technology
- 👥 **Human Escalation**: Seamless handoff to human agents when needed
- 🎨 **Dark/Light Theme**: Toggle between themes with persistent preferences
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔐 **Admin Dashboard**: Comprehensive admin panel for system management
- 🎫 **Ticket Management**: Create and track support tickets
- 🌐 **Multi-Domain Support**: Support for different business domains

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Context API

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── ProfileDropdown.tsx # User profile menu
│   └── TicketModal.tsx # Ticket creation modal
├── contexts/           # React Context providers
│   ├── AppContext.tsx  # Main application state
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Landing.tsx     # Home page
│   ├── Login.tsx       # User authentication
│   ├── DomainSelection.tsx # Domain selection
│   ├── Chat.tsx        # AI chat interface
│   ├── AdminLogin.tsx  # Admin authentication
│   ├── AdminRegister.tsx # Admin registration
│   └── AdminDashboard.tsx # Admin panel
├── types/              # TypeScript type definitions
│   └── index.ts        # Main type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration

## Features in Detail

### AI Chat Interface
- Real-time conversation with AI assistant
- Context-aware responses
- Automatic ticket creation for complex issues

### Admin Dashboard
- User management and activity monitoring
- System statistics and analytics
- Ticket oversight and escalation management

### Multi-Domain Support
- Customer Support
- Technical Support
- Finance
- Travel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the repository.


