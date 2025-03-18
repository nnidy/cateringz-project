function validateAll(){
    const email = document.getElementById("email");
    const password = document.getElementById("pw");
    const form = document.getElementById("form-masuk");

    if(
        email.value.trim() === "" ||
        password.value.trim()===""
    ){
        alert("Semua bagian harus diisi");
    }else if(!email.value.endsWith("@gmail.com") && !email.value.startsWith("0")){
        alert("Email/Nomor Telepon Invalid");
    }else{
        form.submit();
    }
}