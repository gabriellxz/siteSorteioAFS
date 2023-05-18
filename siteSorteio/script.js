let header = document.querySelector('header');
let inputComida = document.querySelector('.inputComida');
let ranking = document.querySelector('.ranking');

document.querySelector('#escuro').addEventListener('click', () => {
    header.style.backgroundColor = 'black'
    inputComida.style.backgroundColor = 'rgba(0, 0, 0, 0.596)'
    ranking.style.backgroundColor = 'rgba(0, 0, 0, 0.596)'
    document.querySelector('.turmasKg').style.backgroundColor = 'rgba(0, 0, 0, 0.596)'
})

document.querySelector('#claro').addEventListener('click', () => {
    header.style.backgroundColor = 'green'
    inputComida.style.backgroundColor = 'rgba(0, 128, 0, 0.521)'
    ranking.style.backgroundColor = 'rgba(0, 128, 0, 0.521)'
    document.querySelector('.turmasKg').style.backgroundColor = 'rgba(0, 128, 0, 0.521)'
})

//Função de sorteio
document.querySelector('#sortear').addEventListener('click', () => {
    const participantes = [
        '1º Informática', 
        '2º Informática', 
        '3 ºInformática', 
        '1º Desenvolvimento de sistemas', 
        '2º Desenvolvimento de sistemas', 
        '1º Enfermagem', 
        '2º Enfermagem', 
        '3º Enfermagem', 
        '1º Administração', 
        '2º Administração', 
        '3º Administração', 
        '3º Comércio'
    ];


    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * participantes.length);
    }


    function sortearParticipante(participantesSorteados) {

        let numeroAleatorio = gerarNumeroAleatorio();


        if (participantesSorteados.includes(participantes[numeroAleatorio])) {

            return sortearParticipante(participantesSorteados);
        } else {

            participantesSorteados.push(participantes[numeroAleatorio]);
            return participantes[numeroAleatorio];
        }
    }


    let participantesSorteados = [];

    /*console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));
    console.log(sortearParticipante(participantesSorteados));*/


    document.querySelector('.msg').innerHTML = 'Sorteio sendo feito, aguarde...'
    document.querySelector('#sortear').setAttribute('style', 'display: none')

    setTimeout(() => {

        document.querySelector('#box-ranking').setAttribute('style', 'display: block')
        document.querySelector('.inputComida').setAttribute('style', 'display: none')
        

        for (let i = 1; i <= 12; i++) {
            document.querySelector('#list-ranking').innerHTML += `
        
            <li>${sortearParticipante(participantesSorteados)}</li>
        
        `
        }

    }, 3000)

})