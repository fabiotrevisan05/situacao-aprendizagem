function adicionarRegistro() {
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;

    const tabela = document.getElementById('tabela');

    tabela.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${nascimento}</td>
                <td>${cpf}</td>
            </tr>
        `;
}