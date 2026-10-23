 <div align="center">

# Next.js Mastery Journey

**A Hands-On Journey into Modern Next.js Development**

Building a strong foundation in Next.js through structured learning, practical implementation, and a deeper understanding of modern web application architecture.

![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-Components-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Type%20Safe-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better%20Auth-Authentication-333333)

</div>

---

## About the Project

**Next.js Mastery Journey** is a hands-on learning repository focused on understanding Next.js beyond the basics.

This project documents my practical journey through the Next.js App Router, React Server Components, data fetching, caching, server-side operations, API development, and authentication architecture.

The goal is not simply to make an application work, but to understand how its different parts interact, why specific patterns are used, and how to write maintainable, secure, and reliable code.

Throughout this journey, I focus on building a clear understanding of concepts before applying them in practice.

## Technology Stack

| Technology       | Purpose                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **Next.js**      | Application framework, routing, rendering, and server-side capabilities |
| **React**        | Component-based UI development                                          |
| **TypeScript**   | Type safety and maintainable code                                       |
| **Tailwind CSS** | Utility-first styling                                                   |
| **Better Auth**  | Authentication and session management                                   |
| **ESLint**       | Code quality and consistency                                            |
| **Git & GitHub** | Version control and project tracking                                    |

## Core Concepts Explored

### 1. Next.js App Router & Routing

- File-system-based routing
- Nested routes and layouts
- Route groups and shared layouts
- Dynamic route segments
- Navigation and route organization
- Loading UI and loading boundaries
- Error handling and not-found pages

### 2. Server Components & Client Components

- React Server Components in Next.js
- Client Components and the `"use client"` directive
- Server and client execution boundaries
- Understanding when to use each component type
- Passing data between server and client components
- Keeping server-only logic away from client-side code

### 3. Data Fetching & Rendering

- Fetching data on the server
- Asynchronous Server Components
- Handling loading and error states
- Understanding rendering behavior
- Streaming and Suspense fundamentals
- Choosing appropriate data-fetching patterns

### 4. Caching & Revalidation

- Understanding caching concepts in Next.js
- Cache behavior and data freshness
- Revalidation strategies
- Static and dynamic rendering considerations
- Understanding the trade-offs between performance and fresh data

### 5. Forms, Server Actions & Mutations

- Handling form submissions
- Server Actions fundamentals
- Performing server-side mutations
- Request validation and error handling
- Managing submission states
- Understanding the boundary between client interactions and server execution

### 6. Route Handlers & API Development

- Creating API endpoints using Route Handlers
- Handling HTTP methods and requests
- Working with request bodies and JSON responses
- Dynamic API routes
- Returning appropriate HTTP status codes
- Performing server-side authentication checks
- Understanding REST API fundamentals within Next.js

### 7. Authentication & Session Management

- Authentication versus authorization
- Email and password authentication
- Google and GitHub OAuth concepts
- Session management
- Protected pages and server-side session checks
- Password reset flows
- Email verification
- Authentication configuration with Better Auth

### 8. Authorization & Application Security

- Role-based authorization
- Permissions and resource ownership
- Protecting sensitive operations
- Server-side access control
- Environment variables and secret management
- Rate limiting fundamentals
- Secure authentication flows
- Common authentication and authorization mistakes

## Project Structure

The project follows the Next.js App Router conventions and uses the `src/` directory to organize application code.

```text
NEXTJS-MASTERY-JOURNEY/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── _components/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── posts/
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       ├── auth.ts
│       ├── auth-client.ts
│       └── auth-database.ts
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

The structure represents the main areas of the project. Individual directories and files may evolve as implementations are refined.

### Key Directories

- `src/app/` — Application routes, layouts, pages, and API endpoints.
- `src/app/(auth)/` — Authentication-related pages grouped using route groups.
- `src/app/_components/` — Shared application components.
- `src/app/api/` — API endpoints implemented with Route Handlers.
- `src/app/dashboard/` — Dashboard-related functionality.
- `src/lib/` — Shared application logic and authentication configuration.
- `public/` — Static assets.

## Engineering Principles

### Understand Before Implementing

Every feature should be supported by an understanding of how it works, why it is needed, and which trade-offs it introduces.

### Server-Side Security First

Authentication, authorization, and sensitive data operations must be enforced on the server rather than relying solely on client-side UI restrictions.

### Maintain Clear Boundaries

Keep server-side operations, client interactions, shared utilities, and application routes organized according to their responsibilities.

### Write Maintainable TypeScript

Use meaningful names, clear interfaces, explicit data boundaries, and appropriate error handling to make the code easier to understand and maintain.

### Build Incrementally

Improve the project through small, understandable changes. Preserve existing working implementations and avoid unnecessary rewrites.

### Learn Through Practical Work

Use real implementation scenarios to understand framework behavior, investigate errors, and develop reliable problem-solving skills.

## Getting Started

### Prerequisites

- Node.js compatible with the project's installed Next.js version
- npm
- Git

### Installation

Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd NEXTJS-MASTERY-JOURNEY
npm install
```

### Environment Configuration

Create a local `.env` file in the project root when required by the features you intend to run.

Depending on your authentication configuration, the application may require environment variables for:

- Better Auth configuration and secret
- Google OAuth credentials
- GitHub OAuth credentials
- Email delivery service
- Database connection and other integrations

Use valid credentials for the services you configure. Never commit real API keys, passwords, OAuth client secrets, or authentication secrets to version control.

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Validate the Application

Run the available project checks:

```bash
npm run lint
npm run build
```

These commands help identify code-quality issues and production build errors. Available scripts depend on the project's `package.json`.

## Useful Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)

## Learning Philosophy

Mastering a framework requires more than memorizing APIs or copying examples.

I aim to understand the underlying concepts, apply them through practical development, learn from implementation errors, and improve the quality of my code over time.

This repository represents that process: structured learning, hands-on experimentation, and a commitment to developing strong engineering fundamentals.

---

<div align="center">

**Learn Deeply. Build Carefully. Improve Continuously.**

_One concept at a time, one implementation at a time._

</div>
