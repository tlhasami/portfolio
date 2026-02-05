/* ==========================================
   MAIN ENTRY POINT - PORTFOLIO JAVASCRIPT
   ========================================== */

// Import all modules
import { initSmoothScroll, initActiveNavTracking, initAutoHideHeader, initBackToTop } from './navigation.js';
import { initTheme } from './theme.js';
import {
   initLoadingScreen,
   initScrollReveal,
   initTypewriter,
   initParallax,
   initCursorTrail,
   init3DTilt
} from './animations.js';
import { initCertificateFilters } from './filters.js';
import { initKeyboardShortcuts, initEasterEgg, logPerformance } from './utils.js';
import { initMobileMenu } from './mobile.js';
import { initProjects } from './projects.js';

/* ==========================================
   INITIALIZATION
   ========================================== */

// Initialize all features when DOM is ready and content is loaded
document.addEventListener('DOMContentLoaded', () => {
   // Core functionality that doesn't depend on injected HTML (or minimal dependencies)
   initTheme();

   console.log('DOM ready, initializing features...');

   initSmoothScroll();
   initActiveNavTracking();
   initAutoHideHeader();
   initBackToTop();
   initMobileMenu();

   // Animations
   initLoadingScreen();
   initScrollReveal();
   initTypewriter();
   initParallax();
   initCursorTrail();
   init3DTilt();

   // Interactive features
   initProjects();
   initCertificateFilters();
   initKeyboardShortcuts();

   // Utilities
   initEasterEgg();
   logPerformance();
});

/* ==========================================
   KEYBOARD SHORTCUTS HELP
   ========================================== */
console.log(`
%cKeyboard Shortcuts:
%cT - Scroll to top
H - Go to Home
A - Go to About
P - Go to Projects
C - Go to Contact
D - Toggle dark/light theme
`, 'color: #e0e0e0; font-weight: bold; font-size: 14px;', 'color: #a0a0a0; font-size: 12px;');
