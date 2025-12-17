# 🚀 Quick Start Guide

## Before You Deploy - IMPORTANT!

### Step 1: Set Up Gmail App Password (5 minutes)

1. Go to: https://myaccount.google.com/security
2. Enable **2-Factor Authentication** (if not already on)
3. Search for "**App passwords**" in the search bar
4. Click "App passwords"
5. Select "**Mail**" from dropdown
6. Click "**Generate**"
7. **COPY** the 16-character password (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env.local File

Open `nexora-website/.env.local` and replace:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Example:**
```env
EMAIL_USER=tiisomabogwane81@gmail.com
EMAIL_PASS=xyzw abcd efgh ijkl
```

### Step 3: Test Locally

```bash
cd nexora-website
npm run dev
```

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email: tiisomabogwane81@gmail.com
5. You should receive the test message!

---

## Deploy to Vercel (10 minutes)

### Option 1: Via Vercel Website (Easiest)

1. **Push to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**
   - Root Directory: `nexora-website`
   - Framework Preset: Next.js (auto-detected)

4. **Add Environment Variables** ⚠️ CRITICAL
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `EMAIL_USER` | your-gmail@gmail.com |
   | `EMAIL_PASS` | your-16-char-app-password |

   Make sure to select: ✅ Production ✅ Preview ✅ Development

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd nexora-website
vercel --prod
```

When prompted, add environment variables:
- `EMAIL_USER`
- `EMAIL_PASS`

---

## After Deployment

### Test Your Live Website

Visit your Vercel URL (e.g., `https://nexora-website.vercel.app`)

**Test Checklist:**
- [ ] Homepage loads
- [ ] Click all navigation links
- [ ] Test mobile menu (resize browser)
- [ ] Click WhatsApp widget
- [ ] Submit contact form
- [ ] Check email arrives at tiisomabogwane81@gmail.com

### Add Custom Domain (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add your domain (e.g., nexora.co.za)
4. Follow DNS instructions

---

## Common Issues & Fixes

### ❌ Contact Form Not Working

**Problem:** Form submits but no email received

**Solution:**
1. Check Vercel logs (Project → Deployments → Click deployment → Runtime Logs)
2. Verify environment variables are set correctly
3. Make sure you used Gmail **App Password**, not regular password
4. Check spam folder

### ❌ Build Failed

**Problem:** Deployment fails during build

**Solution:**
```bash
# Test build locally first
cd nexora-website
npm run build

# If errors, fix them and try again
```

### ❌ Images Not Loading

**Problem:** Images show broken

**Solution:**
- Images must be in `public/photos/` folder
- Use paths like `/photos/logo.png` (with leading slash)

---

## Need Help?

1. Check Vercel deployment logs
2. Review error messages carefully
3. Test locally first with `npm run dev`
4. Verify all environment variables are set

---

## 🎉 You're All Set!

Your website is now live and ready to receive client inquiries!

**Your Contact Info:**
- 📧 Email: tiisomabogwane81@gmail.com
- 📱 Phone: +27 84 874 4120
- 💬 WhatsApp: +27 84 874 4120
- 📍 Address: Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa
