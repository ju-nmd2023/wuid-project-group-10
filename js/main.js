
const speed= document.getElementById("speed");
const finalclick= document.getElementById("finalclick");
const mmaa= document.getElementById("mmaa");
const siffror= document.getElementById("siffror");

finalclick.addEventListener('click', function (event) {
    if (speed.value===""){
        alert("please enter your speed dial number");
        console.log(speed);
        event.preventDefault();
    }
    else if (mmaa.value===""){
        alert("please enter the Expire date");
        console.log(mmaa);
        event.preventDefault();
    }
    else if (siffror.value===""){
        alert("Please enter the security number");
        // email.focus();
        console.log(siffror); 
        event.preventDefault();
    }
    else {alert('thank you for your submission')}
})