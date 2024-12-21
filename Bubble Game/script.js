var score = 0;
var randomNum = 0;
var timer = 60;

function increaseScore(){
   score += 10;
      document.querySelector("#score").textContent = score;
}

function getNewHit(){
   randomNum = Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent = randomNum;
}
function bubbleMaker(){
   var clutter = "";
   for(let i=1; i<=151; i++){
      let randomNumber = Math.floor(Math.random()*10);
      clutter += `<div class="bubble">${randomNumber}</div>`;
   }
   document.querySelector('#bottom').innerHTML = clutter;
}



function reduceTimer(){
   var timerint = setInterval(function(){
      if(timer>0){
         timer--;
         document.querySelector('#timer').textContent = timer;
      }else{
         clearInterval(timerint);
         document.querySelector('#bottom').innerHTML = `Game Over <br> Total Score: ${score}`
      }
      
   },1000)
}



bubbleMaker();
reduceTimer();
getNewHit();


document.querySelector("#bottom").addEventListener('click',function(dets){
   clickedNumber = Number(dets.target.textContent);
   if(clickedNumber===randomNum){
      increaseScore();
      getNewHit();
      bubbleMaker();
   }
})