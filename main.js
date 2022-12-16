function getClientes(){
    fetch('http://localhost:9000/api/clientes')
    .then(response => response.json())
    .then(data => console.log(data));
}

//  getClientes();

function getClientesporId(id){
    fetch(`http://localhost:9000/api/clientes/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

// getClientesporId("639cebd4452d962b6a582061");
