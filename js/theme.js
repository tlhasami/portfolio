/* ==========================================
   THEME MODULE
   ========================================== */

const THEME_KEY = 'portfolio-theme';

// Initialize Theme
export function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    // Default to dark theme if no preference is saved
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);

        // Set initial icon
        const isDark = document.body.classList.contains('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Keyboard shortcut: D for dark mode toggle
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                toggleTheme();
            }
        }
    });
}

// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');

    // Update theme toggle icon
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Get Current Theme
export function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}
