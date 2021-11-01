function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    var gender = document.getElementsByName("gender");
    var getValue = false
    var city = document.register.selek.selectedIndex;
    var address = document.getElementById("address").value;
    if(!name) {
        alert("Name harus diisi");
        return false;
    } 
    if(!email) {
        alert("Email harus diisi");
        return false;
    }
    for (var i = 0; i < gender.length ; i++) {
        if(gender[i].checked == true) {
            getValue = true;
        }
    }
    if(!getValue) {
        alert("Gender harus dipilih");
        return false;
    } 
    if(city == 0) {
        alert("City harus dipilih");
        return false;
    } 
    if(address.length == 0) {
        alert("Address harus diisi");
        return false;
    } 
    if(!address.includes("Street")) {
        alert("Address harus mengandung kata 'Street'");
        return false;
    }
    return true;
}

function validateLogin() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if(!email) {
        alert("Email harus diisi")
        return false;
    } 
    if (!pass) {
        alert("Password harus diisi")
        return false;
    }
    return true;
}
