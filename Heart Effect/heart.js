
let containner = document.querySelector('#cardBody');
let heart = document.querySelector('i');

containner.addEventListener('dblclick',()=>{
    heart.style.opacity = .8;
    heart.style.transform = "translate(-50%,-50%) scale(1.5)"
    heart.style.color = "red"


    setTimeout(function(){
        heart.style.opacity = 0;
    },1500)
})