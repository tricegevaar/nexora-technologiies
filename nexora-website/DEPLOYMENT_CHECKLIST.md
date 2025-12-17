# Nexora Website - Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup
Before deploying to Vercel, you MUST set up email configuration:

**Step 1: Get Gmail App Password**
1. Go to your Google Account: https://myaccount.google.com/security
2. Enable 2-Factor Authentication (if not already enabled)
3. Search for "App passwords" in settings
4. Select "Mail" and generate a new app password
5. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

**Step 2: Update .env.local (for local testing)**
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Step 3: Add to Vercel (for production)**
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these two variables:
   - `EMAIL_USER` = your-gmail@gmail.com
   - `EMAIL_PASS` = your-16-character-app-password
4. Make sure to add them for "Production", "Preview", and "Development"

### 2. Contact Information ✅
- [x] Email: tiisomabogwane81@gmail.com
- [x] Phone: +27 84 874 4120
- [x] WhatsApp: 27848744120
- [x] Address: Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa

### 3. Build Test
Run this command to make sure everything builds correctly:
```bash
cd nexora-website
npm run build
```

### 4. Test Contact Form Locally
1. Set up your .env.local file with real credentials
2. Run: `npm run dev`
3. Go to http://localhost:3000/contact
4. Submit a test message
5. Check if you receive the email at tiisomabogwane81@gmail.com

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Set Root Directory to: `nexora-website`
5. Add environment variables (EMAIL_USER and EMAIL_PASS)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
cd nexora-website
npm install -g vercel
vercel login
vercel --prod
```

---

## 📋 Post-Deployment Checklist

After deployment, test these features:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] About page displays properly
- [ ] Services page shows all services
- [ ] Portfolio page filters work
- [ ] Contact form submits successfully
- [ ] You receive test email at tiisomabogwane81@gmail.com
- [ ] WhatsApp widget opens correctly
- [ ] Mobile menu works on small screens
- [ ] All images load properly
- [ ] Footer displays correct information

---

## 🔧 Troubleshooting

### Contact Form Not Working
1. Check Vercel logs for errors
2. Verify EMAIL_USER and EMAIL_PASS are set correctly
3. Make sure Gmail App Password is correct (not regular password)
4. Check if 2FA is enabled on your Google account

### Images Not Loading
- Make sure all images are in the `public/photos/` folder
- Check that image paths start with `/photos/` not `./photos/`

### Build Errors
- Run `npm run build` locally first
- Check for TypeScript errors: `npm run lint`
- Make sure all dependencies are installed: `npm install`

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review the error messages
3. Verify all environment variables are set
4. Test locally first with `npm run dev`

---

## ✨ Your Website is Ready!

Once deployed, your website will be live at: `https://your-project-name.vercel.app`

You can also add a custom domain in Vercel settings.
