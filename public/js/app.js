const contactForm = document.querySelector('.contact-form');

let name = document.getElementsByName('name')[0];
let company = document.getElementsByName('company')[0];
let email = document.getElementsByName('email')[0];
let phone = document.getElementsByName('phone')[0];
let message = document.getElementsByName('message')[0];

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let formData = {
        name: name.value,
        company: company.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.responseText == 'success') {
            alert('Email został wysłany');
            name.value = '';
            company.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        } else {
            alert("Wysłanie emaila nie powiodło się!");
        }
    }

    xhr.send(JSON.stringify(formData));

})