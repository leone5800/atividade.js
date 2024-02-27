
const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");


adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});


function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
            <span>${tarefaTexto}</span> <button class="excluir">Excluir</button>
        `;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";

        
        novaTarefa.addEventListener("click", function () {
            if (novaTarefa.classList.contains("completo")) {
                novaTarefa.classList.remove("completo");
            } else {
                novaTarefa.classList.add("completo");
            }
        });
    }
}

listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
});