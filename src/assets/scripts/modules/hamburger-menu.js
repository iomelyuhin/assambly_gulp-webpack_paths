function humburger() {

  //HUMBURGER SCRIPT

  const burger = document.querySelector('.hamburger');
  const humMenu = document.querySelector('.navigation');
  // const wrapper = document.querySelector('.wrapper');
  // const socials = document.querySelector('.socials--header')

  burger.addEventListener('click', function() {
    
    burger.classList.toggle('is-active');
    humMenu.classList.toggle('active');
    // wrapper.classList.toggle('wrapper--humMenu');
    // socials.classList.toggle('socials--humburger')
  });

  humMenu.addEventListener('click', ()=> {
    const target = event.target;


    if(target.classList.contains('navigation__link')) {
      burger.classList.toggle('is-active');
      humMenu.classList.toggle('active');
      // wrapper.classList.toggle('wrapper--humMenu');
    }

  });

  // MENU SERVICES
  const menu = document.querySelector('#serviceMenu');
  const toggleMnuBtn = document.querySelector("#toggleMenuBtn");

  toggleMnuBtn.addEventListener('click', function() {
    
    menu.classList.toggle('active')
    
  })
};

module.exports = humburger;