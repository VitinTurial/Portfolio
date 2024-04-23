var menu = document.querySelector('nav ul')
var menuBar = document.querySelector('nav .menu-icon')
var iconMenu = document.querySelector('nav .menu-icon img')

menuBar.addEventListener('click',function(){

if (iconMenu.getAttribute("src") == 'images/Menu.png'){
    iconMenu.setAttribute("src","images/TurnBack.png");
}else{
 iconMenu.setAttribute("src","images/Menu.png")
}

 menu.classList.toggle('active')
});