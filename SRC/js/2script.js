window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mb_block'),
    menuItem = document.querySelectorAll('.mb_menu__item'),
    hamburger = document.querySelector('.mb_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('mb_hamburger_active');
        menu.classList.toggle('mb_block_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('mb_hamburger_active');
            menu.classList.toggle('mb_block_active');
        })
    })
})