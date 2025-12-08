// Array inicial
let tarefas = ["Estudar", "Fazer exercícios", "Ler um livro"];

// mostrar na tela
function atualizarLista() {
  document.getElementById("lista").textContent = tarefas.join(" | ");
}

atualizarLista(); // aparece ao carregar

// --- Botões ---

// 1. Adicionar no final
document.getElementById("addFim").addEventListener("click", () => {
  tarefas.push("Arrumar o quarto");
  atualizarLista();
});

// 2. Adicionar no início
document.getElementById("addInicio").addEventListener("click", () => {
  tarefas.unshift("Tomar café da manhã");
  atualizarLista();
});

// 3. Remover último
document.getElementById("removeFim").addEventListener("click", () => {
  tarefas.pop();
  atualizarLista();
});

// 4. Remover primeiro
document.getElementById("removeInicio").addEventListener("click", () => {
  tarefas.shift();
  atualizarLista();
});

// 5. Substituir tarefa específica
document.getElementById("substituir").addEventListener("click", () => {
  const indice = tarefas.indexOf("Fazer exercícios");

  if (indice !== -1) {
    tarefas[indice] = "Fazer caminhada";
  }

  atualizarLista();
});

// 6. Ordenar alfabeticamente
document.getElementById("ordenar").addEventListener("click", () => {
  tarefas.sort();
  atualizarLista();
});

// 7. Inverter lista
document.getElementById("inverter").addEventListener("click", () => {
  tarefas.reverse();
  atualizarLista();
});

// 8. Criar nova lista com as 2 primeiras (não altera original)
document.getElementById("duasPrimeiras").addEventListener("click", () => {
  const novaLista = tarefas.slice(0, 2); // copia
  alert("Duas primeiras tarefas:\n" + novaLista.join(", "));
});
