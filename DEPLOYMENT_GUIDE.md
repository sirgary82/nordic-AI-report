# LKDV Solutions Oy Website Deployment Guide

## Overview
This document provides comprehensive instructions for deploying the LKDV Solutions Oy website to your Apache shared hosting server.

## 1. Preparing for Deployment

### Finding Your Web Root

In a shared hosting environment, your web root folder is typically one of these:
- `public_html/` (most common)
- `www/` 
- `htdocs/`
- `wwwroot/`

All website files must be placed in this folder for your site to be accessible.

### Required Files

After running `npm run build`, the following files are ready for deployment:

- **Static Website Files in `dist/`:**
  - `index.html` (main entry point)
  - `assets/` directory (contains all JavaScript and CSS)
  - `images/` directory (contains all images)
  - `locales/` directory (contains translations)
  - `.htaccess` (for routing)
  - `CNAME` file

- **PHP Form Handler in `server-implementation/`:**
  - `send-form.php`

## 2. Deployment Process

### Step 1: Upload Website Files

1. Connect to your web server using FTP, SFTP, or the file manager in your hosting control panel.
2. Navigate to your web root folder (e.g., `public_html`).
3. **Important:** Upload the entire contents of the `dist` directory directly to your web root.
   - Make sure `index.html` is at the top level of your web root folder
   - All other files and folders should maintain their structure

### Step 2: Set Up the Form Handler

1. Create a folder called `forms` in your web root folder.
   - Using cPanel: Click "New Folder" and name it "forms"
   - Using FTP: Create a directory called "forms" in your web root

2. Upload the `server-implementation/send-form.php` file to this `forms` directory.
   - The final path should be `public_html/forms/send-form.php` (or similar)

3. Set appropriate permissions:
   - For the forms directory: 755 (rwxr-xr-x)
   - For the send-form.php file: 644 (rw-r--r--)

## 3. Post-Deployment Checklist

- [ ] Visit your domain (https://lkdv.fi) and verify the homepage loads
- [ ] Navigate through all pages to ensure they load properly
- [ ] Test language switching between Finnish and English
- [ ] Test the contact form by submitting a test message
- [ ] Verify email is received at info@lkdv.fi
- [ ] Check that all images display correctly
- [ ] Test the site on both desktop and mobile devices

## 4. Troubleshooting Common Issues

### 404 Errors on Page Refresh
- Make sure the `.htaccess` file was properly uploaded
- Verify mod_rewrite is enabled on your server

### Contact Form Not Working
- Confirm the `forms` directory exists and permissions are correct
- Check server error logs for PHP issues
- Verify the security token matches in both backend and frontend

### Images Not Loading
- Ensure all images were uploaded to the correct location
- Check image file permissions

### Broken Links
- Verify that all paths in the website are relative paths
- Make sure the Router is working correctly with client-side routing

## 5. Server Requirements (Your Server Already Meets These)

- Apache 2.4.65 ✓
- PHP 5.32+ ✓
- MariaDB 10.11.14 ✓
- sendmail path: /usr/sbin/sendmail ✓

## 6. Security Considerations

- The security token in `formService.ts` and `send-form.php` provides basic protection
- Rate limiting prevents spam form submissions
- CORS protection limits requests to your domain only
- Proper file permissions help secure the server
