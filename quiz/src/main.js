const quizQuestions = [
    ['QUAL É O OPERADOR LÓGICO - MAIOR QUE - ?', 'B', '!', '>', '<=', '&&']
]
/**
 * [
 * [QUESTION, RESPONSE, A, B, C]
 * ]
 */


let pontuations = 0

let playerResponses = []
/**
 * [
 * [QUESTION INDEX, RESPONSE]
 * ]
 */

function main() {
    const option = Number(prompt('QUIZ GAME. \n[1] - START \n[0] - EXIT'))
    switch (option) {
        case 1:
            for(let i = 0 ; i < quizQuestions.length ; i++) {
                const response = prompt(`${quizQuestions[i][0]} \n1. A) ${quizQuestions[i][2]} \n1. B) ${quizQuestions[i][3]} \n1. C) ${quizQuestions[i][4]}`).toUpperCase()
                playerResponses.push([i, response])

                if(response === quizQuestions[i][1]) pontuations += 1
                }
            
            alert(`FINISHED! \nPONTUATIONS: ${pontuations} POINTS.`)
            console.log(`ANSWER KEY: \n `)
            break;
    
        default:
            break;
    }
    main()
}

main()