# 🚗 Car Detailer Template

A modern, responsive car detailing website template built with React, TypeScript, and Tailwind CSS. Features smooth animations, a professional design, and all the essential sections needed for a car detailing business.

![Car Detailer Template Hero](https://i.imgur.com/kbmmuPx.png)

![Car Detailer Template](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple?logo=vite)

## ✨ Features

- **Modern Design**: Clean, professional layout with dark theme and gradient backgrounds
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **TypeScript**: Type-safe development with full TypeScript support
- **Component-Based**: Modular React components for easy customization
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🏗️ Sections Included

- **Header**: Navigation with mobile menu and call-to-action buttons
- **Hero**: Eye-catching landing section with service highlights
- **Services**: Detailed service offerings with pricing and descriptions
- **Gallery**: Showcase of before/after photos and work examples
- **About**: Company information and team details
- **Testimonials**: Customer reviews and ratings
- **FAQ**: Frequently asked questions section
- **Contact**: Contact form and business information
- **Footer**: Links, social media, and additional information

![Testimonials and About Sections](https://i.imgur.com/7ux1jMx.png)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.14.0
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Vite 5.4.2
- **Linting**: ESLint with TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jargyl/car-detailer-template.git
   cd car-detailer-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the template in action.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Colors and Styling

The template uses Tailwind CSS for styling. You can customize colors, fonts, and spacing by modifying:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom CSS

### Content

Update the content in each component file located in `src/components/`:

- `Hero.tsx` - Main landing section
- `Services.tsx` - Service offerings and pricing
- `Gallery.tsx` - Photo gallery and portfolio
- `About.tsx` - Company information
- `Testimonials.tsx` - Customer reviews
- `Contact.tsx` - Contact information and form

### Animations

Animations are configured in `src/utils/animations.ts`. You can modify or add new animations using Framer Motion.

## 📱 Responsive Design

The template is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_PHONE_NUMBER=+1234567890
```

### Meta Tags

Update the meta information in `index.html` and `src/App.tsx` for SEO optimization.

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

If you have any questions or need help customizing the template, feel free to:

- Open an issue on GitHub
- Contact the maintainer

---

**Made with ❤️ for car detailing businesses**
