function funNome() {

    var nome = document.querySelector('#nome').value 
    var altura = document.querySelector('#altura').value
    var peso = document.querySelector('#peso').value
    var calculo = peso / (altura * altura);
    var classificacao = 'Normal'

    if (calculo >= 18.5 && calculo <= 24.9) {
        alert(`Sua classificacao é ${classificacao}`);    
    }

    /*alert(`Meu nome é ${nome}. Minha altura é ${altura}m e meu peso é ${peso}kg.`);*/
    alert(`${nome} seu IMC é de: ${calculo.toFixed(2)}`);
}

