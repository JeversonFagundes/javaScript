function salvarUsuario(event) {

    event.preventDefault();

    let id = document.getElementById("id").value;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    fetch('inserir.php',

        {
            method: 'POST',
            body: JSON.stringify({

                id: id,
                email: email,
                nome: nome,
                senha: senha
            }),
            headers: {

                'Content-Type': "application/json; charset=UTF-8"
            }
        }
    );
}