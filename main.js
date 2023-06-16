const navbarEmail = document.querySelector('#email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('mouseover', toggleDesktopMenu);
navbarEmail.addEventListener('mouseout', toggleDesktopMenu);

desktopMenu.addEventListener('mouseover')

//console.log('js')
function toggleDesktopMenu(){
    
    // console.log('QUI')
    // const isHidden = desktopMenu.getAttribute('class').includes('hidden');

    // if(isHidden) 
    // {
    //     desktopMenu.setAttribute('class', 'desktop-menu')
    // }
    // else
    // {
    //     desktopMenu.setAttribute('class', 'desktop-menu hidden')
    // }    
  
    desktopMenu.classList.toggle('hidden');
}