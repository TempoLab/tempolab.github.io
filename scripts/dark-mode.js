const toggleDarkHelper = (isDark) => {
    if (isDark === true) {
        document.querySelector('#darkModeContainer').innerHTML =
            '<button class="nav-item toggle-dark" id="toggleDark">☼</button>';
        document.body.classList.add('dark');
        return;
    }
    document.querySelector('#darkModeContainer').innerHTML =
        '<button class="nav-item toggle-dark" id="toggleDark">☾</button>';
    document.body.classList.remove('dark');
    return;
};

const darkModeStateSetup = () => {
    const existing = JSON.parse(localStorage.getItem('isDark'));
    if (document.querySelector('[data-page="index"]')) {
        imgToggle(existing)
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const setDefault = existing === null ? isDark : existing;
    localStorage.setItem('isDark', JSON.stringify(setDefault));
    toggleDarkHelper(setDefault);
};
darkModeStateSetup();

const toggleDarkMode = () => {
    let existing = JSON.parse(localStorage.getItem('isDark'));
    if (document.querySelector('[data-page="index"]')) {
        imgToggle(!existing)
    }
    if (existing === true) {
        existing = false;
        toggleDarkHelper(existing);
        document.querySelector('#toggleDark').onclick = toggleDarkMode;
        localStorage.setItem('isDark', JSON.stringify(existing));
        return;
    }
    existing = true;
    toggleDarkHelper(existing);
    document.querySelector('#toggleDark').onclick = toggleDarkMode;
    localStorage.setItem('isDark', JSON.stringify(existing));
    return;
};

document.querySelector('#toggleDark').onclick = toggleDarkMode;
