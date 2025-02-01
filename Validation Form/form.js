function sub() {
    var e_mail = document.getElementById("email").value;
    var namee = document.getElementById("name").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var emailerror = document.getElementById("emailerror");
    var nameerror = document.getElementById("nameerror");

    // Reset the error displays
    emailerror.style.display = "none";
    nameerror.style.display = "none";

    // Validate name
    if (namee === '') {
        nameerror.style.display = "block";
        return false;
    }

    // Validate email
    if (!emailRegex.test(e_mail)) {
        emailerror.style.display = "block";
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}
