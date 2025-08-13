# Portfolio Website

## Overview

This is a personal portfolio website built as a full-stack application showcasing web development skills. The project features a modern, responsive design with a Netflix-inspired dark theme and demonstrates proficiency in React, TypeScript, and full-stack development. The portfolio includes sections for personal information, education, projects (featuring a Flipkart clone), skills, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS with custom design system featuring Netflix-inspired color scheme and glass morphism effects
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development Setup**: Custom Vite integration for seamless development experience with HMR
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Storage Interface**: Abstracted storage layer with in-memory implementation and planned database integration

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured but not yet implemented)
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Current State**: In-memory storage implementation for development

### Authentication and Authorization
- **Planned Implementation**: User authentication system with session management
- **Session Storage**: PostgreSQL session store configured (connect-pg-simple)
- **Security**: Password hashing and secure session handling (to be implemented)

### External Dependencies
- **Database Provider**: Neon Database (PostgreSQL serverless)
- **Font Services**: Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Image Assets**: Unsplash for placeholder images and local asset management
- **Development Tools**: Replit integration for cloud development environment
- **UI Libraries**: Extensive Radix UI component suite for accessible, unstyled primitives
- **Utilities**: date-fns for date manipulation, clsx for conditional styling, various carousel and interaction libraries

The architecture follows a modern full-stack pattern with clear separation between client and server code, shared TypeScript schemas, and a component-driven UI approach. The design emphasizes developer experience with comprehensive tooling and type safety throughout the stack.