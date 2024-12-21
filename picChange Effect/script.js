var mainImage = document.querySelector('#mainImage');
let imageContainer = document.querySelector("#smallImageContainer");

imageContainer.addEventListener('click',function(dets){
   
    let targetedImage = dets.target.getAttribute('src');

    mainImage.setAttribute('src',targetedImage);
})