///import{funcoes} from "./funcoes";
/// MENU DE NAVEGAÇAO DO HEADER CRIADO DINAMICAMENTE.

//criando menu (ul, li, a)
const elMenu = document.getElementById('navbar');
const elMenuH1 = document.querySelector('.header-nav');
const menuUl = document.createElement('ul');
const aAA = document.querySelector('nav>ul');
const bBB = document.querySelector('.header-nav>ul');
const arrayClassesMenu = ["fa-twitter","fa-facebook-f","fa-youtube","fa-instagram-square","fa-github","fa-linkedin-in"];
  

function addLinks(){ ///LINKS -----------------------
  for(let i=0;i<arrayClassesMenu.length;i++){
    const menuLi = document.createElement('li'),
          menuLink = document.createElement('a');
          const addMenuLi  = menuUl.appendChild(menuLi);
          addMenuLi.classList.add("nav-item");

    const addMenuLink = menuLi.appendChild(menuLink);
          addMenuLink.setAttribute('href','#');
          addMenuLink.classList.add("nav-link","fab",arrayClassesMenu[i]);
}
}


/*=======================================================*/
function MenuUl(){
   const addMenuUl = elMenu.appendChild(menuUl);
         addMenuUl.classList.add("navbar-nav");
    addLinks();
       
  }

/*====================================================================================================================== */

function MenuH1(){
  const addMenuUl = elMenuH1.appendChild(menuUl);
           addMenuUl.classList.add("navbar-nav");
  addLinks();

}

function moveMenu(){ ///ALTERA O MENU DE ACORDO COM O TAMANHO DA JANELA 
    let mediaMenu = window.matchMedia('(min-width: 768px)');
    
    if(mediaMenu.matches){
      MenuH1();
     }else{
      MenuUl();
     }
  }
document.addEventListener('DOMContentLoaded',moveMenu);
//document.addEventListener('change',moveMenu);


