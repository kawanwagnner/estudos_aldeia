const btn = document.querySelector('#btnMenu'); 

btn.addEventListener('click', () => {
    const navBar = document.querySelector('.navbar'); 
    const headerPage = document.getElementsByTagName('header')[0]; 
    const tegAmenu = document.querySelector('.linkNavBar'); 

    navBar.classList.toggle('active'); 
    headerPage.classList.toggle('changeColorsHeader')
    btn.classList.toggle('changeColorButton'); 
    headerPage.classList.toggle('colorLinkMenu'); 
    tegAmenu.classList.toggle('colorLinkMenu')
    
    if (btn.innerHTML == 'X') {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
    } else {
        btn.innerHTML = 'X'; 
    }
})


/* change theme */

const btnChangeTheme = document.querySelector('#change_theme')

btnChangeTheme.addEventListener('click', () => {
    const bodyPage = document.body; 
    document.querySelectorAll('.hide').forEach(item => item.style.display = 'none')
    bodyPage.classList.toggle('changeMode'); 
})
