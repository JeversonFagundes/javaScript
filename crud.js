
document.addEventListener("DOMContentLoaded", () => {
    listarTodos();
});

function listarTodos() {

    fetch("listar.php",

        {
            method: "GET",
            headers: {

                'Content-Type': "application/json; charset=UTF-8"
            }
        }
    )

        .then(response => response.json())
        .then(usuarios => inserirUsuarios(usuarios))
        .catch(error => console.log(error));

}

function inserirUsuarios(usuarios) {

    for (const usuario of usuarios) {

        inserirUsuario(usuario);
    }
}

function inserirUsuario(usuario) {

    let tbody = document.getElementById('usuarios')

    let tr = document.createElement('tr');

    let tdId = document.createElement('td');

    tdId.innerHTML = usuario.id_usuario;

    let tdNome = document.createElement('td');

    tdNome.innerHTML = usuario.nome;

    let tdEmail = document.createElement('td');

    tdEmail.innerHTML = usuario.email;

    let tdAlterar = document.createElement('td');
    let btnAlterar = document.createElement('button');
    btnAlterar.innerHTML = "Alterar";
    btnAlterar.addEventListener("click", buscaUsuario, false);
    btnAlterar.id_usuario = usuario.id_usuario;
    tdAlterar.appendChild(btnAlterar);

    let tdExcluir = document.createElement('td');
    let btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = "Excluir";
    //btnExcluir.addEventListener("click", excluir, false);
    //btnExcluir.id_usuario = usuario.id_usuario;
    tdExcluir.appendChild(btnExcluir);

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAlterar);
    tr.appendChild(tdExcluir);

    tbody.appendChild(tr);

}

function buscaUsuario(event) {

    let id_usuario = event.currentTarget.id_usuario;

    console.log(id_usuario);

    fetch('buscaUsuario.php?id_usuario=' + id_usuario,

        {
            method: "GET",
            headers: {

                'Content-Type': "application/json; charset=UTF-8"
            }
        }

    )

        .then(response => response.json())
        .then(usuario => preencheForm(usuario))
        .catch(error => console.log(error));
}

function preencheForm(usuario) {

    let id_usuario = document.getElementsByName('id_usuario')[0];

    InputIDUsuario;

    let tdNome = document.createElement('td');

    tdNome.innerHTML = usuario.nome;

    let tdEmail = document.createElement('td');

    tdEmail.innerHTML = usuario.email;
}

function salvarUsuario(event) {

    event.preventDefault();

    let id_usuario = document.getElementById("id_usuario").value;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    fetch('inserir.php',

        {
            method: 'POST',
            body: JSON.stringify({

                id_usuario: id_usuario,
                email: email,
                nome: nome,
                senha: senha
            }),
            headers: {

                'Content-Type': "application/json; charset=UTF-8"
            }
        }
    )
        .then(response => response.json())
        .then(usuario => inserirUsuario(usuario))
        .catch(error => console.log(error));
}