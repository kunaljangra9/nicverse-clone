# Nicverse Clone

A pixel-perfect clone of the [Nicverse website](https://notnicto.com/) built with modern web technologies.

## 🚀 Live Demo

- **GitHub Repository**: [https://github.com/kunaljangra9/nicverse-clone](https://github.com/kunaljangra9/nicverse-clone)
- **Live Site**: [https://same-c4apef6zrsw-latest.netlify.app](https://same-c4apef6zrsw-latest.netlify.app)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Dark Theme**: Modern dark theme with gradient text effects
- **Smooth Animations**: Custom CSS animations for letters, buttons, and background effects
- **Interactive Navigation**: Mobile-friendly navigation with hamburger menu
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Component-Based**: Modular React components for maintainability

## 🛠️ Technologies Used

- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Package Manager**: Bun
- **Deployment**: Static export ready for any hosting platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunaljangra9/nicverse-clone.git
   cd nicverse-clone
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
nicverse-clone/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with fonts
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── header.tsx           # Navigation header
│   │   ├── hero-section.tsx     # Main hero section with animations
│   │   └── footer.tsx           # Footer with social links
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Deployment

The project is configured for static export and can be deployed to any static hosting service:

1. **Build for production**
   ```bash
   bun run build
   ```

2. **The built files will be in the `out/` directory**

### Deployment Platforms

- **Netlify**: Drag and drop the `out` folder to Netlify
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable Pages in repository settings
- **Any static host**: Upload the contents of the `out` folder

## 🎨 Customization

### Colors and Theme
- Modify the color scheme in `tailwind.config.ts`
- Update CSS variables in `src/app/globals.css`

### Animations
- Custom animations are defined in `src/app/globals.css`
- Animation timing and effects can be adjusted in the keyframes

### Content
- Update text content in the respective component files
- Social media links can be modified in `src/components/footer.tsx`

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add some amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design inspiration from [Nicverse](https://notnicto.com/)  
- Built with [Next.js](https://nextjs.org/)  
- UI components from [shadcn/ui](https://ui.shadcn.com/)  
- Icons from [Lucide React](https://lucide.dev/)

---

**Note**: This is a clone project created for educational purposes. All design credit goes to the original Nicverse website creators.