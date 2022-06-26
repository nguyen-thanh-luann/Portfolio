const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const mynav = document.querySelector('.mynav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const caraImg = document.querySelector('#caraImg')
const ntlImg = document.querySelector('#ntlImg')
const portfolioImg = document.querySelector('#portfolioImg')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    mynav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    mynav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

function slideShowCaraImg(){
  let i = 0;
  setInterval(function(){
  caraImg.src = caraImgList[i]

  i++
  if(i >= caraImgList.length-1){
    i = 0
  }
  }, 1300)
}

function slideShowNtlShopImg(){
  let i = 0;
  setInterval(function(){
  ntlImg.src = ntlImgList[i]
  i++
  if(i >= ntlImgList.length-1){
    i = 0
  }
  }, 1500)
}

function slideShowPortfolioImg(){
  let i = 0;
  setInterval(function(){
    portfolioImg.src = portfolioImgList[i]
  i++
  if(i >= portfolioImgList.length-1){
    i = 0
  }
  }, 1700)
}

const caraImgList = [
  './assets/img/caraAdminDashbar.png',
  './assets/img/caraMen.png',
  './assets/img/caraClientHome.png',
  './assets/img/caraProductDetail.png',
  './assets/img/caraProductManager.png',
  './assets/img/caraWomen.png',
]

const ntlImgList = [
  './assets/img/ntlShop.png',
  './assets/img/ntlShop2.png',
  './assets/img/ntlShopLogin.png',
  './assets/img/ntlShopRegister.png',
]

const portfolioImgList = [
  './assets/img/portfolioAbout.png',
  './assets/img/portfolioContact.png',
  './assets/img/portfolioHome.png',
  './assets/img/portfolioProjects.png',
]



slideShowCaraImg();

slideShowNtlShopImg();

slideShowPortfolioImg()