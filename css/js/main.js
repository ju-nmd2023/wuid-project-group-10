
const speed= document.getElementById("speed");
const finalclick= document.getElementById("finalclick");

finalclick.addEventListener('click', function () {
    if (speed.value===""){
        alert("please enter your speed dial number");
        console.log(speed);
    }
    else {alert('thank you for your submission')}
})