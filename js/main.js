document.getElementById("meuFormulario").addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;
    
    var dados = {
        name: nome,
        price: preco
    }
    console.log(dados)
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5001/criar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        document.getElementById('resposta').innerHTML = 'Sucesso ao precessar a requisição';
        console.log(response.text());
    })
    .catch(error => {
        document.getElementById('resposta').innerHTML = 'Erro ao precessar a requisição';
        console.log("Error:", error);
    });

});