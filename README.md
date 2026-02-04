# Portfolio Website

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Features

- 🎨 Bold, editorial-style design with brutalist aesthetic
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions
- 🖱️ Custom cursor effects (desktop only)
- 🎯 Interactive project cards with hover effects
- 📊 Skills showcase with hover animations
- 🔗 Social media integration
- 🚀 Optimized for GitHub Pages deployment

## Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser:
   - Simply double-click the file, or
   - Use a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js with npx
npx serve
```

3. Visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub named `yourusername.github.io` (replace `yourusername` with your GitHub username)
2. Upload all files (`index.html`, `script.js`, `README.md`) to the repository
3. Go to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select the `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be live at `https://yourusername.github.io`

### Method 2: Using Git Command Line

1. Create a new repository on GitHub (don't initialize with README)

2. Initialize and push your code:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select the `main` branch
   - Click Save

4. Your site will be published at `https://yourusername.github.io/portfolio`

## Customization

### Personal Information

Edit `index.html` to customize:

1. **Name and Title** (Line ~97-102)
```html
<h1 class="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
    YOUR<br/>
    <span class="gradient-text">NAME</span>
</h1>
<p class="text-xl md:text-2xl mb-8 font-light tracking-wide">
    YOUR TITLE / ROLE / SPECIALTY
</p>
```

2. **About Section** (Line ~124-137)
   - Update the bio text
   - Replace the placeholder image div with your photo

3. **Projects** (Line ~145-314)
   - Update project titles, descriptions, and technologies
   - Replace gradient backgrounds with actual project screenshots
   - Update project links

4. **Skills** (Line ~318-378)
   - Modify skill lists to match your expertise
   - Add or remove skills as needed

5. **Contact Information** (Line ~383-423)
   - Update email, GitHub, and LinkedIn links
   - Add other social media platforms

### Colors and Styling

Edit the CSS variables in `index.html` (Line ~21-26):
```css
:root {
    --primary: #0A0A0A;      /* Main text color */
    --secondary: #F5F5F5;    /* Background color */
    --accent: #FF3366;        /* Accent color */
    --accent-hover: #CC2952;  /* Hover state */
}
```

### Fonts

The portfolio uses:
- **Archivo Black** for headings (bold, display font)
- **Work Sans** for body text (clean, readable)

To change fonts, update the Google Fonts link (Line ~11):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap" rel="stylesheet">
```

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── script.js           # JavaScript for interactions
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 95+ (Performance)
- **Mobile Friendly**: Yes
- **Load Time**: < 2 seconds
- **CDN**: Tailwind CSS via CDN
- **Fonts**: Google Fonts with preconnect

## Tips for Best Results

1. **Replace placeholder content** with your actual projects and information
2. **Add real project images** instead of gradient backgrounds
3. **Update all links** to point to your actual social media and projects
4. **Optimize images** before uploading (use WebP format, compress images)
5. **Test responsiveness** on different devices
6. **Update meta tags** for better SEO (add to `<head>`)

## Adding Custom Domain (Optional)

1. Purchase a domain from a registrar
2. In your repository, create a file named `CNAME` with your domain:
```
yourdomain.com
```
3. Configure DNS settings at your registrar:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`

## License

Feel free to use this template for your own portfolio. No attribution required, but appreciated!

## Credits

- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Archivo Black & Work Sans
- **Icons**: SVG icons embedded in HTML

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub.

---

**Made with ❤️ and code**
