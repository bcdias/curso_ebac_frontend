const alunos = [
    {
        nome: "Mariana",
        nota: 10
    },
    {
        nome: "Bruno",
        nota: 4
    },
    {
        nome: "Monique",
        nota: 5
    },
    {
        nome: "Elizabeth",
        nota: 9
    },
    {
        nome: "Isabel",
        nota: 9
    },
    {
        nome: "Marcos",
        nota: 8
    },
    {
        nome: "Fernando",
        nota: 8
    },
]


function pegaAlunosNotaSeiOuMais(array) {
    const alunos = array.filter(item => {
        return item.nota >= 6
    })

    return alunos
}

console.log(pegaAlunosNotaSeiOuMais(alunos))