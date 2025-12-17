# Nexora Technologies Website

A modern, professional Next.js website for Nexora Technologies - showcasing digital solutions, services, and portfolio.

## 🚀 Features

- **Modern Design**: Premium UI with glass morphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Contact Form**: Working email integration with nodemailer
- **WhatsApp Widget**: Direct messaging integration
- **Portfolio Showcase**: Filterable project gallery
- **Services Display**: Comprehensive service offerings with pricing
- **SEO Optimized**: Built with Next.js 16 for optimal performance

## 📋 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Notifications**: React Hot Toast

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
cd nexora-website
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file (already created) and add your Gmail credentials:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**How to get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Factor Authentication
3. Search for "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 3. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form sends emails to: **tiisomabogwane81@gmail.com**

Make sure to:
1. Set up EMAIL_USER and EMAIL_PASS in .env.local
2. Use a Gmail App Password (not your regular password)
3. Test the form before deploying

## 🌐 Deployment to Vercel

### Quick Deploy
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Add New Project"
4. Import your repository
5. Set Root Directory to: `nexora-website`
6. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
7. Click "Deploy"

### Environment Variables in Vercel
Don't forget to add these in Vercel project settings:
- `EMAIL_USER` = your-gmail@gmail.com
- `EMAIL_PASS` = your-app-password

## 📞 Contact Information

- **Email**: tiisomabogwane81@gmail.com
- **Phone**: +27 84 874 4120
- **WhatsApp**: +27 84 874 4120
- **Address**: Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa

## 📁 Project Structure

```
nexora-website/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── api/contact/    # Contact form API
│   │   ├── contact/        # Contact page
│   │   ├── portfolio/      # Portfolio page
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── components/
│       ├── About.tsx       # About section
│       ├── Clients.tsx     # Client logos
│       ├── CTA.tsx         # Call-to-action
│       ├── Footer.tsx      # Footer
│       ├── Hero.tsx        # Hero section
│       ├── Navbar.tsx      # Navigation
│       ├── Portfolio.tsx   # Portfolio section
│       ├── Services.tsx    # Services section
│       ├── Testimonials.tsx # Testimonials
│       └── WhatsAppWidget.tsx # WhatsApp chat
├── public/
│   └── photos/            # Images and logos
├── .env.local            # Environment variables
└── package.json          # Dependencies

```

## ✅ Pre-Deployment Checklist

- [x] All pages load correctly
- [x] Contact form configured
- [x] Email integration set up
- [x] WhatsApp widget working
- [x] Mobile responsive
- [x] Images optimized
- [x] Build successful
- [ ] Environment variables added to Vercel
- [ ] Test contact form in production

## 🔧 Troubleshooting

### Contact Form Not Working
- Verify EMAIL_USER and EMAIL_PASS are correct
- Use Gmail App Password, not regular password
- Check Vercel logs for errors

### Build Errors
```bash
npm run build
```
Check for TypeScript or dependency errors.

### Images Not Loading
- Ensure images are in `public/photos/`
- Use paths like `/photos/image.png`

## 📝 License

© 2024 Nexora Technologies. All rights reserved.

## 🎉 Ready to Deploy!

Your website is production-ready. Follow the deployment checklist in `DEPLOYMENT_CHECKLIST.md` for step-by-step instructions.
