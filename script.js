const phone = window.matchMedia('screen and (max-width: 480px)');
const Menu = document.querySelector('.menu-box');
const burguerButton = document.querySelector('#burgerMenu');

phone.addListener(validation);



function validation(event){
    if(event.matches){
        burguerButton.addEventListener('click', showHide);
    }else{
        burguerButton.removeEventListener('click', showHide)
    }
}
validation(phone);


function showHide(){
    if(Menu.classList.contains('is-active')){
        Menu.classList.remove('is-active');
    }else{
        Menu.classList.add('is-active');
    }
}