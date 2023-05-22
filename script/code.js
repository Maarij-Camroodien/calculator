let output = document.querySelector ('#displayarea');
function display(value){
    output.value += value;
}

// backspace
let result = document.querySelector("#displayarea")
document.querySelector ('.backspace').
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})

// clear
document.querySelector('#clear').
addEventListener('click', ()=>{
    output.value = ""
})

// addition subtraction division multiplication
document.querySelectorAll('.operator').forEach( (ops)=> {
    ops.addEventListener('click', (e)=>{
        result.value += e.target.innerText
    })
})

// equal
document.querySelector('#equal')
.addEventListener('click', (e)=>{
    result.value = eval(result.value).toFixed(2);
})