# 🛠️ Complete Guide to Fix Blank Page on GitHub Pages (React + Vite)

## Step 1: Fix vite.config.ts Base Path Configuration

**Current Status:** ✅ Already configured correctly

Your [vite.config.ts](file:///C:/Users/USER/OneDrive/Desktop/m873-next-horizon-main/vite.config.ts) is already set up correctly:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/M873/' : '/',
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
```

**✅ This is correct!** The base path `/M873/` matches your repository name.

## Step 2: Verify Environment Variables in React

Let me check how your app accesses Supabase environment variables:

```typescript
// Check src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/integrations/supabase/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})
```

**✅ This is the correct Vite syntax!** Using `import.meta.env.VITE_*` is proper for Vite apps.

## Step 3: Update GitHub Actions Workflow

Your current workflow is already configured correctly. Let me verify it:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build project
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**✅ This is correct!** The secrets are properly passed to the build step.

## Step 4: Complete Fix Commands

### 4.1 Clean Build and Deploy
```bash
# Clean everything
rm -rf dist node_modules package-lock.json

# Fresh install
npm install

# Build with production environment
npm run build

# Check if build output exists
ls -la dist/
```

### 4.2 Verify Build Output
```bash
# Check if index.html exists
cat dist/index.html | head -20

# Check if assets are built
ls -la dist/assets/
```

### 4.3 Manual GitHub Pages Settings Check
Go to: https://github.com/mahfuzulislam873/M873/settings/pages

**Required Settings:**
- **Source**: GitHub Actions
- **Branch**: main (already set)

### 4.4 Force New Deployment
```bash
# Add a small change to trigger deployment
echo "$(date): Deployment trigger" >> deployment.log
git add deployment.log
git commit -m "Trigger deployment to fix blank page"
git push origin main
```

## Step 5: Check for Common Console Errors

### 5.1 Browser Console Check
Open your site: https://mahfuzulislam873.github.io/M873/

Press **F12** → **Console** tab. Look for these errors:

**Error: "Error: supabaseKey is required"**
- **Cause**: GitHub Secrets not added
- **Fix**: Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to GitHub Secrets

**Error: "Failed to load resource: net::ERR_ABORTED"**
- **Cause**: Wrong base path
- **Fix**: Already fixed in vite.config.ts

**Error: "Cannot GET /"**
- **Cause**: GitHub Pages not enabled
- **Fix**: Enable GitHub Pages in repository settings

### 5.2 Network Tab Check
Press **F12** → **Network** tab → Reload page

Look for:
- **404 errors** on CSS/JS files
- **Failed requests** to Supabase
- **CORS errors** (shouldn't happen with GitHub Pages)

## Step 6: Verification Checklist

### ✅ Environment Variables
```bash
# Check if secrets are set (in GitHub repository)
# Go to: Settings → Secrets and variables → Actions
# Should see:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_ANON_KEY
```

### ✅ Build Process
```bash
# Local build test
npm run build

# Should create dist/ folder with:
# - index.html
# - assets/ folder with CSS/JS files
```

### ✅ GitHub Pages Settings
- Repository: https://github.com/mahfuzulislam873/M873/settings
- Pages section: Source = GitHub Actions
- Actions tab: Latest workflow should be green ✅

### ✅ Live Site Test
Visit: https://mahfuzulislam873.github.io/M873/

**Success indicators:**
- Page loads without blank screen
- No "supabaseKey is required" error in console
- Site functionality works (navigation, auth, etc.)

## Quick Fix Summary

1. **Base path**: ✅ Already correct (/M873/)
2. **Environment variables**: ✅ Using correct Vite syntax
3. **GitHub Actions**: ✅ Properly configured
4. **GitHub Secrets**: Need to verify they're added
5. **GitHub Pages**: Need to verify it's enabled

## Next Steps

1. **Check GitHub Secrets** - Go to your repository settings and verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are added
2. **Check GitHub Pages Status** - Go to repository settings → Pages and ensure it's enabled
3. **Test Live Site** - Visit your URL and check browser console
4. **Report Back** - Let me know what errors you see (if any)

The most common remaining issue is missing GitHub Secrets. Once you confirm they're added, your site should load properly!