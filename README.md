# 🚀 Yassir Mastadi - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<div align="center">
  
  ### Modern, High-Performance Portfolio Website
  
  **[Live Demo](https://yassirmastadi.vercel.app)** • **[Report Bug](https://github.com/iamy4sser/portfolio/issues)** • **[Request Feature](https://github.com/iamy4sser/portfolio/issues)**
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

A modern, performant portfolio website built with **Next.js 16** and **React 19**, showcasing my journey as a **Full Stack Developer**. This project demonstrates expertise in creating production-grade web applications with emphasis on performance, user experience, and modern design patterns.

### ✨ Key Highlights

- 🎨 **Modern UI/UX** - Sleek design with smooth animations and transitions
- ⚡ **Lightning Fast** - Optimized for Core Web Vitals and SEO
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🎭 **Interactive** - Engaging animations powered by Framer Motion
- 📧 **Contact Integration** - Working contact form with email notifications
- 🔒 **Type Safe** - Built with TypeScript for reliability

---

## 🚀 Features

### Core Features

- ✅ **Hero Section** - Eye-catching landing with animated elements
- ✅ **About Section** - Professional journey and skills showcase
- ✅ **Tech Stack** - Interactive technology cards with animations
- ✅ **Projects Portfolio** - Showcase of 8+ professional projects
- ✅ **Contact Form** - Functional email integration with Gmail SMTP
- ✅ **Smooth Scroll** - Snap-scroll navigation between sections
- ✅ **Responsive Navigation** - Adaptive indicators for easy navigation

### Technical Features

- 🎨 **Framer Motion Animations** - Smooth, performant animations
- 📊 **Intersection Observer** - Scroll-triggered animations
- 🎯 **Dynamic Imports** - Code splitting for optimal performance
- 🖼️ **Optimized Images** - Next.js Image component with lazy loading
- 📱 **Mobile-First Design** - Progressive enhancement approach
- 🔄 **Client-Side Rendering** - Strategic use of CSR for interactive components

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.1.1 | React Framework |
| [React](https://react.dev) | 19.0.0 | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [Framer Motion](https://www.framer.com/motion) | Latest | Animations |

### Backend & Tools

| Technology | Purpose |
|------------|---------|
| Next.js API Routes | Backend API |
| Nodemailer | Email Service |
| Gmail SMTP | Email Provider |
| Vercel | Deployment & Hosting |
| Git | Version Control |

### Development Tools
```json
{
  "typescript": "^5.0.0",
  "eslint": "^9.0.0",
  "prettier": "^3.0.0",
  "postcss": "^8.4.0"
}
```

---

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org))
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/iamy4sser/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```env
# Email Configuration (Gmail SMTP)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL_TO=recipient@example.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure
```
portfolio/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── contact/
│   │       └── route.ts          # Contact form endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── components/                   # React Components
│   ├── BackgroundGrid.tsx
│   ├── Navigation.tsx
│   ├── section/                  # Page Sections
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About section
│   │   ├── Tech.tsx             # Tech stack section
│   │   ├── Projects.tsx         # Projects showcase
│   │   └── Contact.tsx          # Contact form
│   └── ui/                       # Reusable UI components
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions
│
├── public/                       # Static assets
│   ├── img/                      # Images
│   ├── files/                    # Documents (CV, etc.)
│   └── favicon.ico
│
├── styles/                       # Additional styles
│
├── .env.local                    # Environment variables (not in git)
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GMAIL_USER` | Gmail address for sending emails | `your-email@gmail.com` |
| `GMAIL_APP_PASSWORD` | Gmail App Password (16 characters) | `abcd efgh ijkl mnop` |
| `CONTACT_EMAIL_TO` | Recipient email address | `contact@example.com` |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID |
| `NEXT_PUBLIC_SITE_URL` | Production URL |

### 📧 Setting Up Gmail SMTP

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Select "2-Step Verification"
   - Scroll to "App passwords"
   - Generate a new password for "Mail"
3. **Copy the 16-character password** (remove spaces)
4. **Add to `.env.local`** as shown above

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript compiler check |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iamy4sser/portfolio)

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm run start
```

---

## ⚡ Performance

This portfolio is optimized for maximum performance:

- ✅ **Lighthouse Score:** 95+ across all metrics
- ✅ **First Contentful Paint:** < 1.5s
- ✅ **Time to Interactive:** < 3.0s
- ✅ **Cumulative Layout Shift:** < 0.1
- ✅ **SEO Score:** 100

### Optimization Techniques

- Code splitting with dynamic imports
- Image optimization with Next.js Image
- CSS optimization with Tailwind CSS
- Lazy loading for below-fold content
- Minimal JavaScript bundle size

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write clean, readable code
- Add comments for complex logic
- Test thoroughly before submitting PR
- Follow existing code style

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
```
MIT License

Copyright (c) 2025 Yassir Mastadi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Yassir Mastadi** - Full Stack Developer

- 🌐 Website: [yassirmastadi.com](https://yassirmastadi.com)
- 📧 Email: yassirmastadi@gmail.com
- 💼 LinkedIn: [linkedin.com/in/yassir-mastadi](https://linkedin.com/in/yassir-mastadi)
- 🐱 GitHub: [@iamy4sser](https://github.com/iamy4sser)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel](https://vercel.com) for hosting
- [Geist Font](https://vercel.com/font) by Vercel

---

<div align="center">
  
### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Yassir Mastadi](https://github.com/iamy4sser)

</div>
