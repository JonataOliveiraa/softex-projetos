//Este é um jogo de adivinhaçãi solicitado na lista de projetos da Softex: Pernambuco
//Consiste em adivinhar o número gerado aleatoriamente. Quanto menos tentativas, melhor resultado.
let attempts = []

function generateNumber() {
    return Math.floor(Math.random() * 100)
}

function menu() {
    const option = Number(prompt(`WELCOME TO GUESS THE NUMBER GAME. \nTRY GUESS THE NUMBER, THE LESS YOU TRY BETTER IT WILL BE! \nSELECT A OPTION: \n[1] - START \n[0] - EXIT`))
    
    switch (option) {
        case 1:
            const number = generateNumber()
            let attempt = Number(prompt(`NUMBER GENERATED! TRY TO GUESS. ITS BETWEEN 0 - 100`))

            while(attempt !== number) {
                if(attempt > number) {
                    if(attempt - number <= 10) {
                        attempt = Number(prompt('THE NUMBER IS A LITTLE BIT MORE SMALLER! TRY TO GUESS.'))
                        attempts.push(attempt)
                        continue
                    }
                    attempt = Number(prompt('THE NUMBER IS MORE SMALLER! TRY TO GUESS.'))
                } else {
                    if(number - attempt <= 10) {
                        attempt = Number(prompt('THE NUMBER IS A LITLTE BIT MORE BIGGER! TRY TO GUESS.'))
                        attempts.push(attempt)
                        continue
                    }
                    attempt = Number(prompt('THE NUMBER IS MORE BIGGER! TRY TO GUESS.'))
                }
                attempts.push(attempt)
            }
            alert(`CONGRATULATIONS! YOU GUESSED THE NUMBER ${number}! YOU TRIED x${attempts.length}. YOU'RE ${attempts.length <= 8 ? 'PRO PLAYER' : 'NOOB'}`)
            attempts = []
            break;
        
        case 0:
            alert('EXITING...')
            return
            break;
        default:
            alert('INVALID INPUT.')
            break;
    }
    menu()
}

menu()