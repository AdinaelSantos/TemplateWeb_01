
/// MENU DE NAVEGAÇAO DO HEADER CRIADO DINAMICAMENTE.

//criando menu (ul, li, a)
const elMenu = document.getElementById('navbar');
const elMenuH1 = document.querySelector('.header-nav');
const menuUl = document.createElement('ul');
const aAA = document.querySelector('nav>ul');
const bBB = document.querySelector('.header-nav>ul');
const arrayClassesMenu = ["fa-twitter","fa-facebook-f","fa-youtube","fa-instagram-square","fa-github","fa-linkedin-in"];
const links = ['https://twitter.com/login?lang=pt',
               'https://pt-br.facebook.com/',
               'https://www.youtube.com/',
               'https://www.instagram.com/',
               'https://github.com/',
               'https://www.linkedin.com/home'];
  

function addLinks(){ ///LINKS -----------------------
  for(let i=0;i<arrayClassesMenu.length;i++){
    const menuLi = document.createElement('li'),
          menuLink = document.createElement('a');
          const addMenuLi  = menuUl.appendChild(menuLi);
          addMenuLi.classList.add("nav-item");

    const addMenuLink = menuLi.appendChild(menuLink);
          addMenuLink.setAttribute('href',links[i]);
          addMenuLink.setAttribute('target','_blank');
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

/*=============ASIDE*=============*/
const asideOpen = document.getElementById('aside-btn-open');
const asideClose = document.querySelector('.aside-btn-close');
const desabilitarConteudo = document.querySelector('.desabilitarConteudo');
const elementoDesabilitador = document.createElement('div');

asideOpen.addEventListener('click',function(){
  let aside = document.querySelector('.aside-container');
  aside.classList.replace('aside-close', 'aside-open');
})

asideClose.addEventListener('click', function(){
  let aside = document.querySelector('.aside-container');
  aside.classList.replace('aside-open', 'aside-close');
  
})

/*======================SUBMENU-LATERAL======================*/

const lateralLink = document.querySelectorAll('.lateral-link-submenu'),
      submenuLateral = document.querySelectorAll('.submenu'),
      setaSubmenu = document.querySelectorAll('.seta-submenu');

      for(let i=0;i< lateralLink.length;i++){
        lateralLink[i].addEventListener('click', function(){
          submenuLateral[i].classList.toggle('submenu-open');
          let exist = submenuLateral[i].classList.contains('submenu-open');
          if(exist){
            setaSubmenu[i].classList.replace('fa-chevron-down','fa-chevron-up');
          }else{
            setaSubmenu[i].classList.replace('fa-chevron-up','fa-chevron-down');
          }
          
        })
    }
      
      
   