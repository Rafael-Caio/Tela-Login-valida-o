function logar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == "RafaelCaio.Tech@outlook.com" && senha == "12345"){
        alert("sucesso");
        location.href = "home.html";
    }
    else {
        alert("usuário ou senha incorreto")
    }
}