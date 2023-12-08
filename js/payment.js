//payment page starts
const email= document.getElementById("email");
const guestName= document.getElementById("guestname");
const street= document.getElementById("street");
const zipCode= document.getElementById("zipcode");
const city= document.getElementById("city");
const phoneNumberOne= document.getElementById("phonenumberone");
const phoneNumberTwo= document.getElementById("phonenumbertwo");
const goPay= document.getElementById("gopay");

goPay.addEventListener('click', function (event) {
    if (email.value===""){
        alert("please enter your Email");
        console.log(email);
        event.preventDefault();
    }
    else if (guestName.value===""){
        alert("please enter your name");
        console.log(guestName);
        event.preventDefault();
    }
    else if (street.value===""){
        alert("Please enter your address");
        // email.focus();
        console.log(street); 
        event.preventDefault();
    }
    else if (zipCode.value===""){
        alert("Please enter your zipCode");
        // email.focus();
        console.log(zipcode); 
        event.preventDefault();
    }
    else if (city.value===""){
        alert("Please enter your city");
        // email.focus();
        console.log(city); 
        event.preventDefault();
    }
    else if (phoneNumberOne.value===""){
        alert("Please enter your area code");
        // email.focus();
        console.log(phoneNumberOne); 
        event.preventDefault();
    }
    else if (phoneNumberTwo.value===""){
        alert("Please enter your phone number");
        // email.focus();
        console.log(phoneNumberTwo); 
        event.preventDefault();
    }
    else {alert('thank you for your submission')}
})

