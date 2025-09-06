//Este projeto foi feito com base no que foi solicitado pela Softex Pernambuco: Calculadora de Despesas Pessoais.

//Proposta feita:
// Criar uma aplicação que permita cadastrar várias despesas e gerar um resumo dos
// gastos.

//Requisitos:
// - Permitir cadastrar uma despesa com categoria e valor.
// - Não permitir valores negativos.
// - Armazenar todas as despesas em uma matriz.
// - Exibir no console: lista de despesas, valor total, valor médio e maior despesa.
// - Disponibilizar um menu interativo com opções para cadastrar, ver resumo, limpar
// despesas e sair.

let expenses = []

function addExpense(name, value) {
    for(let i = 0 ; i< expenses.length ; i++) {
        if(expenses[i][0] === name) {
            expenses[i][1] += value
            return expenses[i]
        }
    }

    expenses.push([name, Number(value)])
}

function clearExpense() {
    expenses = []
}

function calcExpenses() {
    let msg = `==> ==> CURRENT EXPENSES:`
    let avarage = 0
    let biggerExpense = []

    for(let i = 0 ; i < expenses.length ; i++) {
        const expense = expenses[i]
        const name = expense[0]
        const value = expense[1]

        msg += `\nEXPENSE NAME: ${name}, VALUE: R$ ${value}`
        avarage += value

        if(value > biggerExpense[1] || !biggerExpense[1]) {
            biggerExpense = expense
        }
    }
    msg += `\n--- AVARAGE: ${avarage / expenses.length}`
    msg += `\n--- BIGGEST EXPENSE: ${biggerExpense[0]}`

    return msg
}

function menu() {
    const option = Number(prompt('WELCOME TO THE EXPENSE CALCULATOR. \nTYPE THE NUMBER TO CHOOSE ONE OF OPTIONS:\n[1] - ADD EXPENSE \n[2] - SHOW EXPENSES DETAILS \n[3] - CLEAR EXPENSES \n[0] - EXIT'))
    switch (option) {
        case 1:
            const name = prompt('TYPE THE EXPENSE NAME:')
            let value = Number(prompt('TYPE THE EXPENSE VALEU (IN R$, >= 0):'))

            while(value < 0 || isNaN(value)) {
                value = Number(prompt('INVALID VALUE! TYPE THE EXPENSE VALUE AGAIN (IN R$, >= 0):'))
            }
            const expense = addExpense(name, value)

            if(!expense) {
                alert(`${name}: R$ ${value} CREATED.`)
            } else {
                alert(`${name} WITH VALUE R$ ${expense[1] - value} WAS CHANGED ADDING + R$ ${value}. TOTAL: R$ ${expense[1]}.`)
            }
            break;

        case 2:
            if(expenses.length <= 0) {
                alert('YOU DONT HAVE EXPENSES.')
            } else {
                alert(calcExpenses())
            }
            break;
        case 3:
            clearExpense()
            alert('CLEANED.')
            break;

        case 0:
            alert('EXITING...')
            return;
            break;

        default:
            alert('INVALID INPUT.')
            break;
    }
    menu()
}

menu()