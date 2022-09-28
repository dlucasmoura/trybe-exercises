/* 1) */
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
 
  console.log("Bem-vinda, " + info.personagem);

console.log("-----------------");

/* 2) */

info.recorrente = "Sim";
console.log(info);

console.log("-----------------");

/* 3) */

for (let key in info) {        
    console.log(key);
}
console.log("-----------------");

/* 4) */

for (let key in info) {        
    console.log(info[key]);
}
console.log("-----------------");

/* 5) */

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };


for (const key in info) {
    if (key !== "recorrente") {
        console.log(info[key] + " e " + info2[key]);
    } else {
        console.log("ambos são recorrentes");
    }
}


console.log("-----------------");

/* 6) */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  /* 7) */

 console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + "se chama " + leitor.livrosFavoritos[0].titulo);
 console.log("-----------------");

 /* 8) */

 leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
 autor: 'JK Rowling',
 editora: 'Rocco',} )
 
 console.log(leitor);

 /* 9) */

console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos");

 console.log("-----------------");

 /* 10) */

 console.log("-----------------");
