function validateAll(){
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const tlp = document.getElementById("notlp");
    const address = document.getElementById("address");
    const job = document.getElementById("job");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const password = document.getElementById("pw");
    const password2 = document.getElementById("pw1");
    const agree = document.getElementById("agree");
    const form = document.getElementById("form-daftar");

    const today = new Date();
    const dobDate = new Date(dob.value);
     if(
        nama.value.trim()==""||
        email.value.trim() === "" ||
        tlp.value===""||
        address.value.trim()===""||
        job.value.trim()===""||
        dob.value===""||
        gender.value==="none"||
        password.value.trim()==="" ||
        password2.value.trim()==="" ||
        !agree.checked
    ){
        alert("Semua bagian harus diisi");
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email harus berakhiran @gmail.com");
    }else if(!tlp.value.startsWith("0")){
        alert("Nomor telpon harus berawalan 0")
    }else if(tlp.value.length<10){
        alert("Nomor telepon tidak valid");
    }else if(address.value.length<15){
        alert("Alamat minimal 15 karakter");
    }else if(checkAge(today, dobDate)<17){
        alert("Usia minimal 17 tahun");
    }else if(password.value!==password2.value){
        alert("Password tidak sama");
    }
    else{
        form.submit();
    }
}


function checkAge(today, dobDate){
    const age = today.getFullYear() - dobDate.getFullYear();

    if(today.getMonth()===dobDate.getMonth()){
        if(today.getDate()<dobDate.getDate()){
            return age-1;
        }
        else{
            return age;
        }
    }else if(today.getMonth()<dobDate.getMonth()){
        return age-1;
    }else{
        return age;
    }
}