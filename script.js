const listaProfessores = document.getElementById('listaProfessores');
const modalProfessor = document.getElementById('modalProfessor');
const formularioProfessor = document.getElementById('formularioProfessor');
const adicionarProfessorBotao = document.getElementById('adicionarProfessor');
const salvarProfessorBotao = document.getElementById('salvarProfessor');
const fecharModalBotao = document.getElementById('fecharModal');
const idProfessorField = document.getElementById('idProfessor');


let professores = [];



function abrirModalProfessor() {
    modalProfessor.style.display = 'block';
}


function fecharModalProfessor() {
    modalProfessor.style.display = 'none';
    formularioProfessor.reset();
    idProfessorField.value = '';
}


function renderizarListaProfessores() {
    listaProfessores.innerHTML = '';

    professores.forEach((professor, index) => {
        const linha = listaProfessores.insertRow();
        linha.innerHTML = `
            <td>${professor.nome}</td>
            <td>${professor.email}</td>
            <td>${professor.salario}</td>
            <td>${professor.dataAdmissao}</td>
            <td>
                <button onclick="editarProfessor(${index})">Editar</button>
                <button onclick="excluirProfessor(${index})">Excluir</button>
            </td>
        `;
    });
}


function adicionarProfessor() {
    abrirModalProfessor();
}


function editarProfessor(index) {
    abrirModalProfessor();
    const professor = professores[index];
    idProfessorField.value = index;
    document.getElementById('nome').value = professor.nome;
    document.getElementById('email').value = professor.email;
    document.getElementById('salario').value = professor.salario;
    document.getElementById('dataAdmissao').value = professor.dataAdmissao;
}


function salvarProfessor(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const salario = document.getElementById('salario').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const idProfessor = idProfessorField.value;

    if (idProfessor !== '') {
       
        professores[idProfessor] = { nome, email, salario, dataAdmissao };
    } else {
       
        professores.push({ nome, email, salario, dataAdmissao });
    }

    renderizarListaProfessores();
    fecharModalProfessor();
}


function excluirProfessor(index) {
    professores.splice(index, 1);
    renderizarListaProfessores();
}


adicionarProfessorBotao.addEventListener('click', adicionarProfessor);
salvarProfessorBotao.addEventListener('click', salvarProfessor);
fecharModalBotao.addEventListener('click', fecharModalProfessor);


renderizarListaProfessores();
