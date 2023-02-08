async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepjson = await consultaCep.json();

        if (consultaCepjson.erro){
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepjson.localidade;
        logradouro.value = consultaCepjson.logradouro;
        estado.value = consultaCepjson.uf;
        
        console.log(consultaCepjson);
        return consultaCepjson;
    }catch (erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
}}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

