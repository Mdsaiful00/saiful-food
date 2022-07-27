let proFile = document.querySelector('.profile');
document.querySelector('#user-btn').onclick = () =>{
    proFile.classList.toggle('active');

}



function loader(){
    document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
    setInterval( loader , 2000);
}

window.onload = fadeOut;


let barBtn = document.querySelector('#bar-btn');
let navBar = document.querySelector('.navbar');

barBtn.addEventListener('click' , () =>{
    barBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
} )




