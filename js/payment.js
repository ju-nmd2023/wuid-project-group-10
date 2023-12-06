//payment page starts
const email= document.getElementById("email");
const guestname= document.getElementById("guestname");
const street= document.getElementById("street");
const zipcode= document.getElementById("zipcode");
const city= document.getElementById("city");
const phonenumberone= document.getElementById("phonenumberone");
const phonenumbertwo= document.getElementById("phonenumbertwo");
const gopay= document.getElementById("gopay");

gopay.addEventListener('click', function (event) {
    if (email.value===""){
        alert("please enter your Email");
        console.log(email);
        event.preventDefault();
    }
    else if (guestname.value===""){
        alert("please enter your name");
        console.log(guestname);
        event.preventDefault();
    }
    else if (street.value===""){
        alert("Please enter your address");
        // email.focus();
        console.log(street); 
        event.preventDefault();
    }
    else if (zipcode.value===""){
        alert("Please enter your zipcode");
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
    else if (phonenumberone.value===""){
        alert("Please enter your area code");
        // email.focus();
        console.log(phonenumberone); 
        event.preventDefault();
    }
    else if (phonenumbertwo.value===""){
        alert("Please enter your phone number");
        // email.focus();
        console.log(phonenumbertwo); 
        event.preventDefault();
    }
    else {alert('thank you for your submission')}
})
