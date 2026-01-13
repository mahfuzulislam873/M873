# 🔐 How to Add Supabase Secrets to GitHub

## Step 1: Get Your Supabase Credentials

### 1.1 Go to Supabase Dashboard
1. Open https://app.supabase.com in your browser
2. Sign in with your account
3. Select your M873 project (or create one if you haven't)

### 1.2 Find Your Project URL
1. In your Supabase project, click **Settings** (left sidebar)
2. Click **API** (under Configuration)
3. Look for **Project URL**
4. Copy the entire URL (it looks like: `https://your-project-id.supabase.co`)

### 1.3 Find Your Anon Key
1. In the same **API** settings page
2. Look for **Project API keys**
3. Find the **anon** key (it's a long string starting with `eyJ`)
4. Copy the entire key

## Step 2: Add Secrets to GitHub Repository

### 2.1 Navigate to GitHub Secrets
1. Go to: **https://github.com/mahfuzulislam873/M873/settings/secrets/actions**
2. You should see a page titled "Actions secrets and variables"

### 2.2 Add VITE_SUPABASE_URL Secret
1. Click the green **"New repository secret"** button
2. **Name**: Type exactly `VITE_SUPABASE_URL`
3. **Secret**: Paste your Supabase Project URL
4. Click **"Add secret"**

### 2.3 Add VITE_SUPABASE_ANON_KEY Secret
1. Click **"New repository secret"** again
2. **Name**: Type exactly `VITE_SUPABASE_ANON_KEY`
3. **Secret**: Paste your Supabase Anon Key
4. Click **"Add secret"**

## Step 3: Enable GitHub Pages

### 3.1 Go to Pages Settings
1. Navigate to: **https://github.com/mahfuzulislam873/M873/settings/pages**
2. This opens the GitHub Pages configuration

### 3.2 Configure Source
1. Under **"Source"** section
2. Select **"GitHub Actions"** from the dropdown
3. Click **"Save"** if there's a save button

## Step 4: Verify Everything is Working

### 4.1 Check the Actions Tab
1. Go to: **https://github.com/mahfuzulislam873/M873/actions**
2. You should see a workflow running automatically
3. Look for green checkmarks (success) or red X (failure)

### 4.2 Monitor the Build Process
The workflow will:
1. Install dependencies (`npm ci`)
2. Build the project (`npm run build`)
3. Deploy to GitHub Pages

### 4.3 Access Your Live Site
Once the workflow shows ✅ green checkmarks, your site will be live at:
**https://mahfuzulislam873.github.io/M873/**

## 🆘 Troubleshooting

### If Build Fails:
1. **Check Secrets**: Make sure both secrets are added with exact names
2. **Check Supabase**: Ensure your Supabase project is active
3. **Check Logs**: Click on the failed workflow in Actions tab
4. **Verify Keys**: Double-check you copied the full URL and key

### Common Issues:
- **Secret names must be exact** (case-sensitive)
- **Supabase project must be active**
- **GitHub Pages must be enabled**

## 📱 Alternative Method (Mobile)

If you're on mobile:
1. Use GitHub mobile app or mobile browser
2. Navigate to your repository
3. Tap **Settings** → **Secrets and variables** → **Actions**
4. Follow the same steps above

## ⏱️ Timeline
- **Adding secrets**: 2-3 minutes
- **First deployment**: 3-5 minutes after secrets are added
- **Live URL**: Available immediately after successful deployment

---

**Need help?** Check the Actions tab for real-time deployment status!