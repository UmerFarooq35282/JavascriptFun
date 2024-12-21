let field = document.querySelector("#mainInput");
getvalue = field.getAttribute('value')
var setvalue = ""
document.querySelector(".btnContainer").addEventListener("click" , (e)=>{
    value1 = e.target.textContent;
    if (value1 == "="){
        evaluate = eval(getvalue)
        field.setAttribute('value' , evaluate)
        getvalue = evaluate
    }else if (value1 == "AC"){
        getvalue = getvalue.slice(0,-1)
        field.setAttribute('value' , getvalue)
    }
    else if(value1 == "C"){
        getvalue = ""
        field.setAttribute('value' , getvalue)
    }else{
        getvalue += value1
        setvalue = field.setAttribute('value' , getvalue)
    }
})

// 8 + 3 - 5 + 2 - 5
// 13 - 10
// 3