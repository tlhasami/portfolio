/* ==========================================
   THEME MODULE
   ========================================== */

const THEME_KEY = 'portfolio-theme';

// Initialize Theme
export function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
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
}

// Get Current Theme
export function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}
