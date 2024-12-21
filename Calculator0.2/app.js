let btns = document.querySelectorAll('.btn1');
let str = "";
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(dets)=>{
        value = dets.target.innerHTML;
        if(value == "="){
            result = eval(str)
            document.querySelector('#mainInput').value = result
            str = result
        }else if (value == "C"){
            str = ""
            document.querySelector('#mainInput').value = str
        }else if (value == "AC"){
            str = str.slice(0,-1)
            document.querySelector('#mainInput').value = str
        }
        else{
            str += value
            document.querySelector('#mainInput').value = str
        }
    })
})