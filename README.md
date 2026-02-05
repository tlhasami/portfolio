# 🎨 Talha Sami - Portfolio Website

A classic black & white personal portfolio website showcasing software development skills, competitive programming achievements, projects, and certificates.

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling and design system
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── icons/             # Icon assets
│   ├── images/            # Image assets
│   └── resume.pdf         # Downloadable resume (add your PDF here)
└── README.md              # Project documentation
```

## ✨ Features

### Design & Aesthetics
- **Classic Black & White Theme** with elegant color palette
- **Theme Toggle** - Switch between light and dark modes
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern Typography** - Playfair Display (serif), Inter (sans-serif), Fira Code (monospace)
- **Font Awesome Icons** - Professional iconography throughout

### Interactive Elements
- **Smooth Scroll Navigation** with active section highlighting
- **Typewriter Effect** on hero tagline
- **Scroll Animations** - Fade-in effects for cards and sections
- **3D Hover Effects** on project cards
- **Parallax Background** on hero section
- **Cursor Trail Effect** (desktop only)
- **Certificate Filtering** - Filter by category
- **Auto-hiding Header** - Hides on scroll down, shows on scroll up
- **Back to Top Button** - Appears after scrolling

### Keyboard Shortcuts
- Press **T** - Scroll to top
- Press **D** - Toggle dark/light theme

### Sections
1. **Hero/Landing** - Name, tagline, and introduction
2. **About Me** - Professional background and specializations
3. **Achievements** - Competitive programming highlights
4. **Projects** - C++ SFML and Flutter projects showcase
5. **Certificates** - Filterable certificate gallery
6. **Contact** - Email, location, and social links

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and JavaScript

### Installation

1. **Clone or download** this repository
2. **Add your resume** - Place your PDF resume in `assets/resume.pdf`
3. **Update content** - Edit `index.html` to add your:
   - Personal information
   - Project links and descriptions
   - Certificate images
   - Social media links
   - Email address

### Running Locally

Simply open `index.html` in your web browser:
```bash
# Option 1: Double-click index.html

# Option 2: Use a local server (recommended)
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray-dark: #333333;
    /* ... more colors */
}
```

### Fonts
Change Google Fonts in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Content
All content is in `index.html`. Search for sections by their IDs:
- `#home` - Hero section
- `#about` - About section
- `#achievements` - Achievements
- `#projects` - Projects
- `#certificates` - Certificates
- `#contact` - Contact information

## 📦 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts** - Typography

## 🌟 Key Features Implementation

### Theme Toggle
Saves preference to localStorage and persists across sessions.

### Certificate Filtering
Dynamic filtering with smooth transitions using data attributes.

### Scroll Animations
Intersection Observer API for performance-optimized animations.

### 3D Card Effects
CSS transforms with JavaScript mouse tracking for interactive hover states.

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Talha Sami**
- GitHub: [@talhasami](https://github.com/talhasami)
- LinkedIn: [talhasami](https://linkedin.com/in/talhasami)
- LeetCode: [talhasami](https://leetcode.com/talhasami)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Made with ❤️ and lots of ☕**
