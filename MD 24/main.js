function Aluno(nome) {     //Classe de uma abstração criada
    this.nome = nome;         //já é uma função construtora
    this.estudar = function() {
        console.log(this.nome + ': vamos estudar');
    }
}

function Escola(nome, idade) {                    //PRIMEIRA CLASSE HERDEIRA
    this.idade = idade;

    Aluno.call(this, nome);
}


function Aula(nome, professor) {                     //SEGUNDA CLASSE HERDEIRA
    this.professor = professor;

    Aluno.call(this, nome);
}

const aluno1 = new Aluno("Fred", 8); 
const aluno2 = new Aluno("Davi", 9);
const aluno3 = new Aluno("José", 7);
const materia1 = new Aula("matematica", "historia", "geografia");

console.log(materia1);
materia1.estudar();