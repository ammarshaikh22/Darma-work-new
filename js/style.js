/* =========================
mobile Header Section Start
=========================*/
const menu = document.querySelector('.menu');
const menu_bar = document.querySelector('.menu-bar');
const cross_bar = document.querySelector('.cross-bar');

menu_bar.addEventListener('click', () => {
    menu.classList.add('d-menu')
    cross_bar.classList.add('d-crossbar')
})

cross_bar.addEventListener('click', () => {
    menu.classList.remove('d-menu')
    cross_bar.classList.remove('d-crossbar')
})

/*-- ============================
Projet Section Start
===========================--*/

const btns = document.querySelector('.btns-2');
const btn = document.querySelectorAll('.btn');
const pro_img = document.querySelectorAll('.pro-images');


btns.addEventListener('click', (e) => {
    const btn_clicked = e.target
    btn.forEach((elem) => {
        btn_clicked.classList.add('active-btn')
        elem.classList.remove('active-btn')
    })
    const btn_num = btn_clicked.dataset.btnNum;
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    pro_img.forEach((elem) => {
        elem.classList.add('p-btn-not-active')
    })
    img_active.forEach((elem) => {
        elem.classList.remove('p-btn-not-active')
    })
})