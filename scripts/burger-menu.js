const burgerMenuToggle = () => {
    document.querySelector('#burger-menu-tray').classList.toggle('active')
}

document.querySelector('#blog-pages-button').onclick = burgerMenuToggle