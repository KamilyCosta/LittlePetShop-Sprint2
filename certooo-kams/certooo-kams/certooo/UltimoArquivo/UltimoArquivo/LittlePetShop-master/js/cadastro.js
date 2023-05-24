function validarDados() {
    //primeira forma de pegar os dados formulario (Name)
    // variavel  = name-do-formulario.name-do-input.valor
    //Pegar elementos 

    let todosValidados = true;
    let usuario = document.getElementById("frmusuario").value;
    let endereco = document.getElementById("frmendereco").value;
    let cidade = document.getElementById("frmcidade").value;
    let uf = document.getElementById("frmestado").value;
    let email = document.getElementById("frmemail").value;
    let telefone = document.getElementById("frmtelefone").value;
    let dataNasc = document.getElementById("frmdata").value;
    let cpf = document.getElementById("frmcpf").value;
    let id = document.getElementById("frmid").value;
    let senha = document.getElementById("frmsenha").value;
    let confirma = document.getElementById("frmconfirma").value;
    let pet = document.getElementById("frmpet").value;
    let dataNascAnimal = document.getElementById("frmDataAnimal").value;
    let outros = document.getElementById("frmoutros").value;

    let divMensagem = document.getElementById("mensagem");
    divMensagem.innerHTML = ''; // altera o conteudo interno do elemento
    divMensagem.style.display = 'none';

    pet = pet.trim()  //tirar os espaços em branco
    if (pet.length < 3 || pet.length > 100) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Nome do Pet deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    outros = outros.trim()  //tirar os espaços em branco

    if (document.getElementById('frmoutros').style.display == 'block')

        if (outros.length < 3 || outros.length > 100) {
            divMensagem.classList.remove('msgSucesso');
            divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
            divMensagem.innerHTML = 'O Tipo do Pet deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
            divMensagem.style.display = 'block';
            setTimeout(mensagem, 5000);
            todosValidados = false;
            return false
        }


    dataNascAnimal = dataNascAnimal.trim();
    let data = new Date(dataNascAnimal);

    let agora = Date.now();
    function run(data, agora) {
        return Math.abs(new Date(data).getTime() - new Date(agora).getTime())
    }

    let dias = parseInt(run(data, agora) / (1000 * 60 * 60 * 24))
    let anos = parseInt(dias / 365);
    let resto = dias % 365
    let meses = parseInt(resto / 30);
    dias = resto % 30

    let idade = anos + ' anos, ' + meses + ' meses e ' + dias + ' dias';
    document.getElementById('frmIdadeAnimal').value = idade

    

    id = id.trim()  //tirar os espaços em branco
    if (id.length <= 0) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O ID não deve conter valor unitário negativo ou zero!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }


    usuario = usuario.trim()  //tirar os espaços em branco
    if (usuario.length < 3 || usuario.length > 100) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Nome Completo deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    endereco = endereco.trim()
    if (endereco.length < 3 || endereco.length > 100) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Endereço deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    cidade = cidade.trim()
    if (cidade.length < 3 || cidade.length > 50) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'A Cidade deve conter de 3 até 50 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    uf = uf.trim()
    let padraoUF = /[A-Z]/
    let ufValido = padraoUF.test(uf)
    if (ufValido == false) {
        uf = uf.toUpperCase()
        frmcadastro.frmestado.value = uf
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Por favor, informe a sigla com dois Caracteres Maiúculos!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }
    if (uf.length != 2) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Por favor, informe a sigla com dois Caracteres!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

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

    telefone = telefone.trim()
    let padraoTelefone = /^(\d{2})?(\d{4,5})(\d{4})/
    let telefoneValido = padraoTelefone.test(telefone);
    if (telefoneValido == false) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Formato do telefone não é Válido!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    dataNasc = dataNasc.trim();
    if (dataNasc.length < 10) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Por favor, informe uma Data Válida!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    cpf = cpf.trim()
    let remover = /\D/g;
    let cpfIsValid = true;

    cpf = cpf.replace(remover, '');

    if (cpf.length == 11) {
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(9, 10))) {
            cpfIsValid = false;
        }

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            cpfIsValid = false;
        }

        if (cpfIsValid) {
            let novoCpf = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2)
            console.log(novoCpf);
        } else {
            divMensagem.classList.remove('msgSucesso');
            divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
            divMensagem.innerHTML = 'Por favor, informe um CPF Válido!' // altera o conteudo interno do elemento
            divMensagem.style.display = 'block';
            setTimeout(mensagem, 5000);
            todosValidados = false;
            return false
        }
    } else {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Por favor, informe um CPF com 11 digitos!' // altera o conteudo interno do elemento
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

    confirma = confirma.trim()
    let padraoConfirma = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
    let confirmaValido = padraoConfirma.test(confirma);
    if (confirmaValido == false) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Suas senhas não são iguais!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = false;
        return false
    }

    if(todosValidados == true){
        divMensagem.classList.remove('msgErroo'); 
        divMensagem.classList.add('msgSucesso'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Cadastro realizado com sucesso!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000);
        todosValidados = true;
        return true
    }
}

function selecionarTipo() {
    let tipoAnimal = document.getElementById('frmTipo').value;


    if (tipoAnimal == 'outros') {
        document.getElementById('frmoutros').style.display = 'block'
    } else {
        document.getElementById('frmoutros').style.display = 'none'
    }
}

var divElement = document.getElementById('mensagem');
function mensagem (){
    divElement.style.display = 'none';
}

