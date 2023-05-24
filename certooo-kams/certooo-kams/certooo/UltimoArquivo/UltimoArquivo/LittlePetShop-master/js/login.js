function validarLogin(){

    let todosValidados = true;
    let email = frmlogin.frmusuario.value;
    let senha = frmlogin.frmsenha.value;
    let divMensagem = document.getElementById('mensagem');

    email = email.trim()
    let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
    let emailValido = padraoEmail.test(email);

    if (emailValido == false) {
        divMensagem.classList.remove('msgSucesso'); 
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Formato do E-mail não é Válido!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block'; 
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    senha = senha.trim()
    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
    let senhaValida = padraoSenha.test(senha);

    if (senhaValida == false) {
        divMensagem.classList.remove('msgSucesso'); 
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Sua Senha não é Válida!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    if(todosValidados == true){
        divMensagem.classList.remove('msgErroo'); 
        divMensagem.classList.add('msgSucesso'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Login realizado com sucesso!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = true;
        return true

    }
}

var divElement = document.getElementById('mensagem');
function mensagem (){
    divElement.style.display = 'none';
}
