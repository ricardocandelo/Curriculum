const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyle = document.documentElement.style;

toggleTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('oscuro.png')){
        toggleIcon.src='elementos/iconos/claro.png';
        toggleText.textContent= 'Modo Light';
    } else {
        toggleIcon.src='elementos/iconos/oscuro.png';
        toggleText.textContent= 'Modo Oscuro';
    }
});

toggleColors.addEventListener('click', (e) =>{   
    rootStyle.setProperty('--primary-color', e.target.dataset.color);

});


//Visualizacion de proyectos

const videos = document.querySelectorAll('.video');
const containervid = document.querySelector('.container-video');
const span = document.querySelector('.container-video span');
const videocontainer = document.querySelector('.video-show');

videos.forEach(vid => {
    vid.onclick =() =>{
        containervid.style.display='block';
        containervid.src = vid.getAttribute('src');
    }
    
}); 

span.onclick = () =>{
    containervid.style.display='none';
}


