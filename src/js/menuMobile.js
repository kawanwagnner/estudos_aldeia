const btn = document.querySelector('#btnMenu'); 

btn.addEventListener('click', () => {
    const navBar = document.querySelector('.navbar'); 

    navBar.classList.toggle('active')
})