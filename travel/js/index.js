console.log(`Оценка - 102.5 балла 
Отзыв по пунктам ТЗ:
Частично выполненные пункты:
1) на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) 
Отзыв: изображения переключаются, если их тянуть курсором
2) логин попап соответствует верстке его закрытие происходит при клике вне попапа 
Отзыв: на мобилке не пашет
Выполненные пункты:
1) Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) 

2) Анимации плавного перемещения для слайдера 

3) логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) 

4) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) 

`);

// BURGER MENU
const menuBurger = document.querySelector('.burger-navigation');
const openButton = document.querySelector('.burger-menu_lines');
const closeButton = document.querySelector('.close-menu');
const hamburgerItems = document.querySelectorAll('.nav-link');
const overlay = document.querySelector('.menu-overlay');

function toggleActive() {
    menuBurger.classList.toggle('active');
}

if (openButton) {
    openButton.addEventListener("click", toggleActive);
}

if (closeButton) {
    closeButton.addEventListener("click", toggleActive);
    overlay.addEventListener("click", toggleActive);
}

if (hamburgerItems.length > 0) {
    hamburgerItems.forEach(menuBurger => { menuBurger.addEventListener("click", toggleActive) });
}

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(menuBurger);
    const withinButtonBoundaries = e.composedPath().includes(openButton);
    if (!withinBoundaries && !withinButtonBoundaries) {
        menuBurger.classList.remove('active');
    }
})




// SLIDER
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: false,
        centerMode: true,
        variableWidth: true,
    });

    $('.slider').slick('slickGoTo', 1);
});


// SLIDER MOBILE
$(document).ready(function () {
    $('.slider_mobile').slick({
        arrows: true,
        dots: true,
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
    });
});





// LOG IN and SIGN UP
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    })
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    })
});




// Open POP UP desctop
const popUpBox = document.querySelector('.pop_up_box');
const loginButton = document.querySelector('.login-button'); //кнопка десктоп
const closeLoginWindow = document.querySelector('.pop_up_box-overlay');
const overlayLoginButton = document.querySelector('.pop_up_box-overlay');


function popUpWindow() {
    popUpBox.classList.toggle('active');
}

if (loginButton) {
    loginButton.addEventListener("click", popUpWindow);
}

if (closeLoginWindow) {
    overlayLoginButton.addEventListener("click", popUpWindow);
}

document.addEventListener('click', (e) => {
    const boundariesDesctop = e.composedPath().includes(popUpBox);
    const button_boundariesDesctop = e.composedPath().includes(loginButton);
    if (!boundariesDesctop && !button_boundariesDesctop) {
        popUpBox.classList.remove('active');
    }
})




// Open POP UP mobile
// const popUpMobile = document.querySelector('.pop_up_box');
// const loginButtonMobile = document.querySelector('.account'); //кнопка мобилка
// const closePopUp = document.querySelector('.pop_up_box-overlay');
// const overlayPopUp = document.querySelector('.pop_up_box-overlay');


// function popUpWindowMobile() {
//     popUpMobile.classList.toggle('active');
// }

// if (loginButtonMobile) {
//     loginButtonMobile.addEventListener('click', popUpWindowMobile);
// }

// if (closePopUp) {
//     overlayPopUp.addEventListener('click', popUpWindowMobile);
// }

// document.addEventListener('click', (e) => {
//     const boundaries = e.composedPath().includes(popUpMobile);
//     const button_boundaries = e.composedPath().includes(loginButtonMobile);
//     if (!boundaries && !button_boundaries) {
//         popUpMobile.classList.remove('active');
//     }
// })




// DATA
document.querySelector("[type='button']").addEventListener("click", function(event){
    event.preventDefault();
    let fields = document.querySelectorAll("input:not([type='button']), select");
    let text = [];
    fields.forEach(f=>{ text.push(f.value)});
    alert(text);
});