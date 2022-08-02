function validEmail(emailJP)
{
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(String(emailJP).toLowerCase());
}

function validPhone(phoneJP)
{
    var regPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return regPhone.test(String(phoneJP).toLowerCase());
}

function validateContact()
{
    let fullNameJ = document.forms["form"]["fullName"].value;
    let emailJ = document.forms["form"]["email"].value;
    let phoneJ = document.forms["form"]["phone"].value;
    let messageJ = document.forms["form"]["message"].value;

    if (fullNameJ != "" && emailJ != "" && validEmail(emailJ) == true && validPhone(phoneJ) == true && String(messageJ).length < 250)
    {
        alert("Message sent successfully");
    }
    else if (fullNameJ == "")
    {
        alert("Full name cannot be empty")
    }
    else if (emailJ == "")
    {
        alert("E-mail Address cannot be empty")
    }
    else if (validEmail(emailJ) == false)
    {
        alert("E-mail Address is invalid")
    }
    else if (validPhone(phoneJ) == false)
    {
        alert("Phone number is invalid")
    }
    else if (String(messageJ).length > 250)
    {
        alert("Message was too big")
    }
}