function validarAgendamento() {

    let todosValidados = true;
    let pet = agendamento.frmpet.value;
    let usuario = agendamento.frmusuario.value;
    let data = agendamento.frmdata.value;
    let horario = agendamento.frmhora.value;
    let divMensagem = document.getElementById('mensagem')
    divMensagem.innerHTML = '' // altera o conteudo interno do elemento
    divMensagem.style.display = 'none';


    pet = pet.trim()  //tirar os espaços em branco
    if (pet.length < 3 || pet.length > 100) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Nome do Pet deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000)
        todosValidados = false;
        return false
    }

    usuario = usuario.trim()  //tirar os espaços em branco
    if (usuario.length < 3 || usuario.length > 100) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Nome do Responsário deve conter de 3 até 100 caracteres' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000)
        todosValidados = false;
        return false
    }

    data = data.trim()  //tirar os espaços em branco
    let diaSemana = new Date(data).getDay();

    if (diaSemana == 5 || diaSemana == 6) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'A data deve ser entre Segunda-Feira e Sexta' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000)
        todosValidados = false;
        return false
    }

    horario = horario.trim()  //tirar os espaços em branco
    let removerHora = /\D/g;
    horario = horario.replace(removerHora, '');

    let padraoHora = /^(\d{2})(\d{2})$/;
    let hora = ''
    let minuto = ''

    if (horario.length == 4) {
        let vetorDados = padraoHora.exec(horario);
        hora = vetorDados[1];
        minuto = vetorDados[2];
    }

    if (hora < 08 || hora >= 18) {
        divMensagem.classList.remove('msgSucesso');
        divMensagem.classList.add('msgErro'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'O Horário para agendamento corresponde das 8h às 18h' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000)
        todosValidados = false;
        return false
    }


    if (todosValidados == true) {
        data = data.substring(0,10).split('-').reverse().join('/');

        let linhas = document.getElementById('linhas');
        let auxiLinha = '';

        auxiLinha = auxiLinha + '<td>' + pet + '</td>' +
            '<td>' + usuario + '</td>' +
            '<td>' + data + '</td>' +
            '<td>' + hora+':'+ minuto + '</td>' +
            '</tr>';

        linhas.innerHTML = linhas.innerHTML + auxiLinha;

            
    }

    if(todosValidados == true){
        divMensagem.classList.remove('msgErroo'); 
        divMensagem.classList.add('msgSucesso'); // add uma classe ao elemento html
        divMensagem.innerHTML = 'Agendamento realizado com sucesso!' // altera o conteudo interno do elemento
        divMensagem.style.display = 'block';
        setTimeout(mensagem, 5000)
        todosValidados = true;
        return true
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////

var divElement = document.getElementById('mensagem');
function mensagem (){
    divElement.style.display = 'none';
}