# Manish Reddy's Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Manish%20Reddy-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, responsive, and feature-rich portfolio website showcasing AI/ML projects, cloud expertise, and professional experience.

[View Live Demo](#) • [Report Bug](https://github.com/manish-reddy7/manish-Reddy-Portfolio-/issues) • [Request Feature](https://github.com/manish-reddy7/manish-Reddy-Portfolio-/issues)

</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Fully Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **Dark/Light Mode Toggle** - Built-in theme switching with system preference detection
- **Smooth Animations** - Advanced animations using Framer Motion for engaging interactions
- **Glassmorphism Effects** - Modern glass-style components with blur effects
- **Gradient Backgrounds** - Dynamic animated gradient backgrounds
- **Interactive Components** - Hover effects, parallax scrolling, and micro-interactions

### 🚀 **Core Sections**
- **Hero Section** - Dynamic typewriter effect showcasing multiple roles
- **About** - Personal introduction with floating badges and highlights
- **Skills** - Categorized skill showcase with icons (Cloud, AI/ML, Development, Data, DevOps, Leadership)
- **Projects** - Featured project showcase with GitHub links and live demos
- **Experience** - Professional timeline with internships and education
- **Contact Form** - Functional contact form with Supabase backend integration
- **Footer** - Quick navigation, social links, and scroll-to-top button

### ⚙️ **Technical Features**
- **Type-Safe Development** - Full TypeScript implementation
- **Component Library** - Shadcn UI with Radix UI primitives
- **Form Validation** - React Hook Form with Zod schema validation
- **State Management** - React Query for server state management
- **Routing** - React Router DOM for navigation
- **Toast Notifications** - User feedback with Sonner
- **Testing Suite** - Vitest with React Testing Library
- **Code Quality** - ESLint configuration for consistent code standards

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Shadcn UI with Radix UI
- **Animations:** Framer Motion 12.26.2
- **Icons:** Lucide React 0.462.0

### **Development**
- **Type Checking:** TypeScript 5.8.3
- **Linting:** ESLint 9.32.0
- **Testing:** Vitest 3.2.4 + React Testing Library
- **Package Manager:** npm / Bun

### **Key Libraries**
- **Form Handling:** React Hook Form + Zod
- **Theme Management:** next-themes
- **Data Visualization:** Recharts
- **Carousel:** Embla Carousel
- **Utilities:** class-variance-authority, clsx, tailwind-merge

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18+ or Bun
- Git

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/manish-reddy7/manish-Reddy-Portfolio-.git
   cd manish-Reddy-Portfolio-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   The app will be available at `http://localhost:8080`

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production bundle |
| `npm run build:dev` | Build with development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run test suite once |
| `npm run test:watch` | Run tests in watch mode |

---

## 🚀 Deployment

### **Vercel (Recommended)**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/manish-reddy7/manish-Reddy-Portfolio-)

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy! 🎉

### **Netlify**
1. Push code to GitHub
2. Import repository in Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy! 🚀

### **GitHub Pages**
1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/manish-Reddy-Portfolio-/',
     // ... rest of config
   })
   ```
2. Build project: `npm run build`
3. Deploy `dist` folder to `gh-pages` branch

### **Self-Hosted / VPS**
```bash
# Build production bundle
npm run build

# Serve with any static server (e.g., nginx, serve)
npx serve -s dist -l 3000
```

---

## 🎯 Project Structure

```
manish-Reddy-Portfolio-/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Experience timeline
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer
│   ├── pages/              # Route pages
│   │   ├── Index.tsx       # Main page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── integrations/       # Third-party integrations
│   ├── assets/             # Images, fonts, etc.
│   ├── App.tsx             # App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── supabase/              # Supabase configuration
├── tests/                 # Test files
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🎨 Customization Guide

### **Update Personal Information**

1. **Update hero section** - Edit `src/components/Hero.tsx`:
   ```tsx
   const roles = ["Your Role 1", "Your Role 2"];
   const techStack = [/* your tech stack */];
   ```

2. **Update about section** - Edit `src/components/About.tsx`

3. **Update projects** - Edit `src/components/Projects.tsx`:
   ```tsx
   const projects = [
     {
       title: "Your Project",
       description: "Description",
       tech: ["Tech1", "Tech2"],
       github: "your-repo-url",
       // ...
     }
   ];
   ```

4. **Update skills** - Edit `src/components/Skills.tsx`

5. **Update experience** - Edit `src/components/Experience.tsx`

### **Theme Customization**

Edit `src/index.css` to customize color variables:
```css
:root {
  --primary: 220 90% 56%;
  --secondary: 142 76% 50%;
  --accent: 12 90% 55%;
  /* ... more colors */
}
```

### **Social Links**

Update social links in:
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`

---

## 🧪 Testing

Run the test suite:
```bash
# Run tests once
npm test

# Watch mode for development
npm run test:watch
```

Tests are configured with:
- **Vitest** for test runner
- **React Testing Library** for component testing
- **jsdom** for DOM simulation

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript configuration |
| `components.json` | Shadcn UI configuration |
| `eslint.config.js` | ESLint rules |
| `postcss.config.js` | PostCSS plugins |

---

## 🌟 Features Showcase

### **Advanced Animations**
- Typewriter effect for role switching
- Mouse parallax for hero section
- Scroll-triggered animations
- Floating geometric shapes
- Smooth page transitions

### **Performance Optimizations**
- Code splitting with Vite
- Lazy loading for components
- Optimized images
- CSS purging with Tailwind
- Fast refresh with SWC

### **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

---

## 📸 Screenshots

_Add screenshots of your portfolio here_

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

### **Development Workflow**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a pull request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Manish Reddy**
- GitHub: [@manish-reddy7](https://github.com/manish-reddy7)
- LinkedIn: [Gonu Manish Reddy](https://www.linkedin.com/in/gonu-manish-reddy-21a311299/)
- Email: manish7777war@gmail.com

---

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/manish-reddy7/manish-Reddy-Portfolio-?style=social)
![GitHub forks](https://img.shields.io/github/forks/manish-reddy7/manish-Reddy-Portfolio-?style=social)
![GitHub issues](https://img.shields.io/github/issues/manish-reddy7/manish-Reddy-Portfolio-)

---

<div align="center">

**Made with ❤️ by Manish Reddy**

If you found this helpful, give it a ⭐️!

</div>
