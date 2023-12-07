

let theAll = document.querySelector("#all");
let theGoods = document.querySelectorAll(".all input");

theAll.onclick = function(){
    for(let item = 0;item <theGoods.length;item++){
        theGoods[item].checked = theAll.checked
    }
}

for(let item = 0; item < theGoods.length; item++){
    theGoods[item].onclick=checked
}

function checked(){
    let count = 0
    for(let item = 0; item < theGoods.length; item++){
        if(theGoods[item].checked){
            count++
        }
    }
    if(count === theGoods.length){
        theAll.checked = true
    } else {theAll.checked = false}
}