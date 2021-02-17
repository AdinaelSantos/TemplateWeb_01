/*

function sizeOfThings(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  
  document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
  document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;

};

sizeOfThings();

window.addEventListener('resize', function(){
	sizeOfThings();
});




x = window.screen.width;
y = window.screen.height;

if(x <800){
//Ação aqui
}


*/
///REMOVENDO O ELEMENTO MENU ATRAVES DO ELEMENTO PAI.
/*
var pegando = document.querySelector('.navbar');
console.log(pegando);
var remov = document.querySelector('.navbar-nav');
var remopvido = pegando.removeChild(remov);
*/

///REMOVENDO O ELEMENTO MENU SEM CONHECER O PAI
/*
var no = document.querySelector(".navbar-nav");
if (no.parentNode) {
  no.parentNode.removeChild(no);
}
console.log(no);
*/

//// BREAKPOINTS BOOTSTRAP
/*
xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
*/
/*var largJanela = window.screen.width;
console.log(largJanela);

document.write(screen.width+'x'+screen.height);
   
   //resolução 'real' navegador
   var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
   console.log(width);*/
   
   ///----------------------
   /*const consultaMedia = window.matchMedia('min-width:768');
   if (consultaMedia.matches) {
    const no = document.querySelector(".navbar-nav");
    if (no.parentNode) {
    no.parentNode.removeChild(no);
}
  } else {
    /* a viewport menos que 400 pixels de largura */
  /*}*/
 /* const consultaMedia = window.matchMedia('(min-width:768)');
  function menuMediaQuery(consultaMedia){
      if(consultaMedia.matches){
        const removeMenu = document.querySelector(".navbar-nav");
        if (removeMenu.parentNode) {
            removeMenu.parentNode.removeChild(no);
        }
  }else{

  }
}
menuMediaQuery(consultaMedia);*/