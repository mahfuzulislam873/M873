# 🚀 M873 GitHub Repository Setup & Deployment Guide

## Prerequisites

1. **GitHub Account**: Make sure you have access to `https://github.com/mahfuzulislam873/M873`
2. **Git Installed**: Ensure Git is installed on your system
3. **GitHub Personal Access Token**: You'll need this for authentication

## Step 1: Generate GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
4. Copy the generated token (save it securely)

## Step 2: Configure Git Authentication

### Option A: Using HTTPS with Personal Access Token
```bash
# Remove existing remote
git remote remove origin

# Add remote with your token
git remote add origin https://YOUR_TOKEN@github.com/mahfuzulislam873/M873.git
```

### Option B: Using SSH (Recommended)
```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to GitHub
# Copy the public key and add it to GitHub Settings → SSH and GPG keys
cat ~/.ssh/id_ed25519.pub

# Add remote using SSH
git remote remove origin
git remote add origin git@github.com:mahfuzulislam873/M873.git
```

## Step 3: Push Your Code

```bash
# Add all files
git add .

# Commit your changes
git commit -m "feat: complete M873 AI Platform with CI/CD pipeline"

# Push to main branch
git push -u origin main
```

## Step 4: Configure GitHub Repository Settings

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"

2. **Set Up Secrets**:
   - Go to Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

## Step 5: Verify Deployment

1. **Check Actions Tab**: Monitor your workflow runs
2. **Check Pages**: Your site will be available at `https://mahfuzulislam873.github.io/M873/`
3. **Build Status**: Look for green checkmarks in your repository

## Troubleshooting

### Permission Denied (403)
- Ensure your token has correct scopes
- Check if you have write access to the repository
- Try using SSH instead of HTTPS

### Build Failures
- Check the Actions tab for error logs
- Ensure all environment variables are set correctly
- Verify your Supabase credentials

### Site Not Loading
- Check if GitHub Pages is enabled
- Verify the base path in `vite.config.ts`
- Check browser console for errors

## Quick Commands Reference

```bash
# Check git status
git status

# Check remote configuration
git remote -v

# Test connection
git ls-remote origin

# Force push (use carefully)
git push -f origin main
```

## Need Help?

If you encounter any issues:
1. Check the [GitHub documentation](https://docs.github.com/)
2. Review the deployment logs in the Actions tab
3. Verify all secrets are configured correctly

Your M873 AI Platform is ready for deployment! 🎉