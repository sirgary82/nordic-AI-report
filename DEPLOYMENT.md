# Deployment Guide

Complete guide for deploying the LKDV Solutions website to production.

## Pre-Deployment Checklist

✅ **Verify before deploying:**
```bash
npm run lint         # Should pass with 0 errors
npm run build        # Should complete successfully
```

**Current Status:**
- Package: `lkdv-solutions-website`
- All lint errors: Fixed ✅
- TypeScript: Passing ✅
- Build: Working ✅

---

## Build for Production

### Clean Build (Recommended)
```bash
rm -rf dist/
npm run build
```

### Expected Output
```
> lkdv-solutions-website@0.0.0 build
> tsc && vite build

vite v7.1.4 building for production...
✓ 11593 modules transformed.
✓ built in ~11s
```

### Build Output
The `dist/` folder will contain:
```
dist/
├── index.html
├── assets/
│   └── index-[hash].js  (~775 kB)
├── images/              (from public/)
├── locales/             (from public/)
├── .htaccess            (from public/)
└── CNAME                (if exists)
```

---

## Deployment to Production Server

### Step 1: Locate Your Web Root

Your web root folder is typically one of:
- `public_html/` (most common)
- `www/`
- `htdocs/`
- `wwwroot/`

All website files must be placed in this folder.

### Step 2: Upload Website Files

**Method A: FTP/SFTP Client (FileZilla, Cyberduck)**
1. Connect to your server
2. Navigate to `public_html/` (or your web root)
3. Upload **entire contents** of `dist/` directory to web root
   - `index.html` should be at top level
   - All folders should maintain their structure

**Method B: cPanel File Manager**
1. Login to cPanel
2. Open File Manager
3. Navigate to `public_html/`
4. Click "Upload"
5. Select all files from `dist/` folder
6. Upload and extract if needed

**Method C: rsync (Advanced)**
```bash
rsync -avz --delete dist/ user@server:/path/to/public_html/
```

### Step 3: Upload PHP Form Handler

1. **Create forms directory** (if it doesn't exist):
   - cPanel: Click "New Folder" → name it "forms"
   - FTP: Create directory `public_html/forms/`

2. **Upload the PHP file**:
   ```
   Source: forms/send-form.php
   Destination: public_html/forms/send-form.php
   ```

### Step 4: Set Permissions

**On the server, set these permissions:**
```bash
# Directories
chmod 755 public_html/
chmod 755 public_html/forms/
chmod 755 public_html/assets/
chmod 755 public_html/images/
chmod 755 public_html/locales/

# Files
chmod 644 public_html/index.html
chmod 644 public_html/.htaccess
chmod 644 public_html/forms/send-form.php
```

**Using FTP Client:**
- Right-click file/folder → File Permissions
- Directories: 755 (rwxr-xr-x)
- Files: 644 (rw-r--r--)

---

## Post-Deployment Verification

### Automated Checks
```bash
# Check website loads
curl -I https://lkdv.fi
# Expected: HTTP/2 200

# Test a page
curl https://lkdv.fi/about
# Expected: HTML content
```

### Manual Browser Testing

Visit https://lkdv.fi and verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
  - [ ] Home, About, Services, Platform
  - [ ] Nordic AI Report
  - [ ] Industry pages (Legal, Financial, Government, Healthcare)
  - [ ] Contact, Pilot Program
- [ ] Language switcher works (EN ↔ FI)
- [ ] Mobile navigation menu works
- [ ] All images display correctly
- [ ] No console errors (F12 → Console tab)
- [ ] Contact form submits successfully
- [ ] Email arrives at info@lkdv.fi

### Performance Checks

- [ ] Page load time < 3 seconds
- [ ] Images load properly
- [ ] No 404 errors in Network tab (F12)
- [ ] CSS/JS bundles load correctly

---

## Troubleshooting

### Issue: 404 Errors on Page Refresh

**Problem:** Direct URLs like `/about` return 404

**Solution:**
1. Verify `.htaccess` file was uploaded to `public_html/`
2. Check that `mod_rewrite` is enabled on server
3. Contact hosting support if needed

**.htaccess should contain:**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]
```

### Issue: Contact Form Not Working

**Problem:** Form submits but no email arrives

**Solution:**
1. Verify `public_html/forms/send-form.php` exists
2. Check PHP error logs on server
3. Test PHP mail function:
   ```php
   <?php mail('info@lkdv.fi', 'Test', 'Test message'); ?>
   ```
4. Verify security token matches in both:
   - `utils/formService.ts`
   - `forms/send-form.php`

### Issue: Styles Look Broken

**Problem:** Website appears unstyled

**Solution:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check that `assets/` folder was uploaded
3. Verify `assets/` folder permissions (755)
4. Check browser console for 404 errors

### Issue: Images Not Loading

**Problem:** Images show broken icon

**Solution:**
1. Verify `images/` folder was uploaded
2. Check folder permissions: 755
3. Check file permissions: 644
4. Verify paths in browser Network tab (F12)

### Issue: Language Switching Not Working

**Problem:** Language selector doesn't change content

**Solution:**
1. Verify `locales/` folder was uploaded
2. Check both `locales/en/` and `locales/fi/` exist
3. Verify translation JSON files are present
4. Clear browser localStorage

---

## Alternative: GitHub Pages (Testing Only)

For testing purposes, you can deploy to GitHub Pages:

```bash
npm run deploy
```

**Note:** This deploys to your GitHub Pages URL (e.g., `username.github.io/repo`), NOT to lkdv.fi production server.

---

## Server Requirements

Your Apache server already meets these requirements:

- ✅ Apache 2.4.65
- ✅ PHP 5.32+
- ✅ sendmail at `/usr/sbin/sendmail`
- ✅ mod_rewrite enabled
- ✅ MariaDB 10.11.14 (if needed)

---

## Security Considerations

### Current Protection Layers

✅ **Already Implemented:**
- CORS origin validation (only allowed domains)
- Rate limiting (10 form submissions per hour)
- Spam keyword filtering
- Email validation
- Server-side security token check
- PHP mail headers validation

### Security Warning

⚠️ **Hardcoded Security Token:**

The frontend contains a security token in `utils/formService.ts:23`:
```typescript
const SECURITY_TOKEN = "A9f3dR7xH2pQ5sT1zL8mN6bV0cK4eG";
```

**Issue:** This token is visible in the compiled JavaScript bundle.

**Impact:** Provides minimal security; attackers can extract it.

**Recommended Improvements:**

1. **Add reCAPTCHA v3** (Recommended)
   ```bash
   # Get keys from: https://www.google.com/recaptcha/admin
   ```
   - Invisible to users
   - Scores bot likelihood (0.0 - 1.0)
   - Better protection than frontend token

2. **Add Honeypot Fields**
   - Hidden form fields that bots fill but humans don't
   - Easy to implement, effective against simple bots

3. **Rotate Security Token**
   - Generate new random token periodically
   - Update in both frontend and PHP backend

4. **Monitor Submissions**
   - Check `info@lkdv.fi` for spam patterns
   - Review PHP error logs regularly
   - Adjust rate limits if needed

---

## Deployment Workflow

**Typical deployment process:**

1. **Make changes** to codebase
2. **Test locally** with `npm run dev`
3. **Run quality checks**:
   ```bash
   npm run lint
   npm run build
   npm run preview
   ```
4. **Build for production**: `npm run build`
5. **Upload to server**:
   - `dist/` → `public_html/`
   - `forms/` → `public_html/forms/` (if changed)
6. **Test production site**:
   - Visit https://lkdv.fi
   - Test all pages
   - Submit test form
   - Check email arrives

---

## Quick Reference

```bash
# Development
npm run dev              # Start dev server (localhost:5173)
npm run preview          # Preview production build

# Build
npm run build            # Build to dist/

# Quality
npm run lint             # Run ESLint

# Deploy
npm run deploy           # GitHub Pages only
# Manual upload for production: dist/ → server
```

---

## Files to Upload

### Always Upload (every deployment):
- ✅ `dist/` contents → `public_html/`

### Upload Once (unless changed):
- ✅ `forms/send-form.php` → `public_html/forms/`

### Never Upload:
- ❌ `node_modules/`
- ❌ `src/`, `components/`, `pages/`, `theme/`, `utils/`
- ❌ `.git/`
- ❌ `.md` files (documentation)

---

## Support

**Technical Issues:**
- Email: info@lkdv.fi
- Check documentation in this repository

**Server Access Issues:**
- Contact your hosting provider
- Verify credentials and permissions

**Code Issues:**
- Review [PROJECT_INSTRUCTIONS.md](./PROJECT_INSTRUCTIONS.md)
- Check error logs (browser console, server PHP logs)

---

**Status:** 🚀 Ready to Deploy
