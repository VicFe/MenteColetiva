// ================================
// 1. OBJETOS
// ================================

// Criar objeto simples
const usuario = { nome: "Ana", idade: 20 }; // objeto básico

console.log(usuario.nome); // acessar chave (forma comum)
console.log(usuario["nome"]); // acessar chave como string

// Adicionar chave depois
usuario.sobrenome = "Silva"; // adiciona nova chave

// Modificar valor
usuario.nome = "Carlos"; // altera valor existente

// Objeto dentro de objeto
const estudante = {
  nome: "João",
  curso: {
    nome: "Full Stack",
    instituicao: "Geração Tech"
  }
};

console.log(estudante.curso.instituicao); // acessar objeto aninhado


// ================================
// 2. MATRIZES (ARRAYS)
// ================================

// Criar matriz simples
const numeros = [10, 20, 30];

console.log(numeros[0]); // acessar item pelo índice

// Matrizes de objetos
const usuarios = [
  { nome: "Sara", idade: 25 },
  { nome: "Carlos", idade: 30 }
];

console.log(usuarios[1].nome); // acessar chave dentro do objeto da matriz

console.log(usuarios.length); // quantidade de itens no array


// ================================
// 3. MÉTODOS IMPORTANTES DE ARRAYS
// ================================

// forEach → percorre cada item
usuarios.forEach((pessoa) => {
  console.log(pessoa.nome); // imprime todos os nomes
});

// map → cria nova matriz transformada
const nomes = usuarios.map((pessoa) => pessoa.nome); // pega só os nomes

console.log(nomes);


// ================================
// 4. STRINGS
// ================================

const texto = "Victor";

console.log(texto.toLowerCase()); // tudo minúsculo
console.log(texto.toUpperCase()); // tudo maiúsculo


// ================================
// 5. FUNÇÕES
// ================================

// Função simples com retorno
function soma(a, b) {
  return a + b; // devolve o resultado
}

console.log(soma(5, 7));

// Função dentro de objeto (método)
const pessoa = {
  nome: "Daniel",
  podeVotar(idade) {
    return idade >= 16; // retorna true ou false
  }
};

console.log(pessoa.podeVotar(18)); // true


// ================================
// 6. CALLBACKS (funções dentro de funções)
// ================================

// Usado no map e forEach
usuarios.forEach((item) => {
  console.log("Usuário:", item.nome); // callback executando
});


// ================================
// 7. console.log
// ================================

console.log("Teste de console.log"); // mostrar algo no console