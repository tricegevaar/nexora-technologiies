# Push Nexora Website to GitHub - Step by Step

## Step 1: Create a New GitHub Repository

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name**: `nexora-website`
   - **Description**: "Professional website for Nexora Technologies"
   - **Visibility**: Choose Public or Private (your choice)
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license
3. Click **"Create repository"**
4. **KEEP THIS PAGE OPEN** - you'll need the commands shown

## Step 2: Open Command Prompt or PowerShell

1. Press `Windows + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```bash
   cd "C:\Users\Tiiso\Desktop\nexora website"
   ```

## Step 3: Initialize Git (if not already done)

```bash
git init
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Commit Your Code

```bash
git commit -m "Initial commit - Nexora website ready for deployment"
```

## Step 6: Connect to GitHub

**IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

```bash
git remote add origin https://github.com/YOUR-USERNAME/nexora-website.git
```

Example: If your GitHub username is "tiisomabogwane", use:
```bash
git remote add origin https://github.com/tiisomabogwane/nexora-website.git
```

## Step 7: Set Main Branch

```bash
git branch -M main
```

## Step 8: Push to GitHub

```bash
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)

### How to Create a Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Nexora Website Deploy"
4. Check: `repo` (Full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** - you won't see it again!
7. Use this token as your password when pushing

---

## Step 9: Verify on GitHub

1. Go to: https://github.com/YOUR-USERNAME/nexora-website
2. You should see all your files!

---

## Step 10: Import to Vercel

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Find and select `nexora-website`
4. Click "Import"
5. **Configure:**
   - Root Directory: `nexora-website`
   - Framework: Next.js (auto-detected)
6. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add `EMAIL_USER` = `tiisomabogwane81@gmail.com`
   - Add `EMAIL_PASS` = `your-16-character-app-password`
   - Check: ✅ Production ✅ Preview ✅ Development
7. Click **"Deploy"**

---

## 🎉 Done!

Your website will be live in 2-3 minutes at: `https://nexora-website.vercel.app`

---

## Troubleshooting

### "fatal: not a git repository"
Run: `git init` first

### "remote origin already exists"
Run: `git remote remove origin` then try Step 6 again

### Authentication failed
You need a Personal Access Token (see Step 8 instructions)

### Files not showing on GitHub
Make sure you ran `git add .` and `git commit -m "message"` before pushing
