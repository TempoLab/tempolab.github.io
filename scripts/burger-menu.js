const burgerMenuToggle = () => {
    document.querySelector('#burger-menu-tray').classList.toggle('active')

    document.addEventListener('click', (event) => {
        if (!document.querySelector('#burger-menu-tray').contains(event.target) && !document.querySelector('#blog-pages-button').contains(event.target)) {
            document.querySelector('#burger-menu-tray').classList.remove('active');
        }
    })
}

const burgerFunToggle = () => {
    document.querySelector('#burger-fun-tray').classList.toggle('active')

    document.addEventListener('click', (event) => {
        if (!document.querySelector('#burger-fun-tray').contains(event.target) && !document.querySelector('#fun-pages-button').contains(event.target)) {
            document.querySelector('#burger-fun-tray').classList.remove('active');
        }
    })
}

document.querySelector('#blog-pages-button').onclick = burgerMenuToggle
document.querySelector('#fun-pages-button').onclick = burgerFunToggle