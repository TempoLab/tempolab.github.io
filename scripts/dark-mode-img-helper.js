const imgToggle = (isDark) => {
    if (isDark === true) {
        document.querySelector('#suse-main').src = 'assets/img/suse-dark.jpeg';
        return;
    }
    document.querySelector('#suse-main').src = 'assets/img/suse.jpg';
    return;
};