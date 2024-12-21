
let heading = document.querySelector('h1');

let addFriend = document.querySelector('#add');


let count = 0;

addFriend.addEventListener('click',()=>{
    if(count==0){
    heading.innerHTML = "Friends"
    heading.style.color = "green"
    addFriend.innerHTML = "Remove Friend"
    addFriend.style.backgroundColor = "red"

    count = 1;
    }else{
    heading.innerHTML = "Stranger"
    heading.style.color = "red"
    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "green"

    count = 0;
    }
    
})

