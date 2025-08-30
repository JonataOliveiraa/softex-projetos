//  Requisitos:
//  • Cada contato deve ter: nome, telefone e email.
//  • Usar uma matriz para armazenar os contatos (cada linha = um 
// contato).
//  • Funcionalidades obrigatórias (menu interativo com prompt):
//  • Cadastrar contato (validar duplicados).
//  • Listar todos os contatos no console.
//  • Buscar contatos pelo nome (parcial ou completo).
//  • Atualizar contato existente.
//  • Remover contato da lista.

const contacts = []
//[name, number, email]

function main() {
    let option;

    while(option !== 0) {
        option = Number(prompt(`WELCOME TO THE CONTACT AGENDA MANAGER! \n[1] - REGISTER NEW USER \n[2] - UPDATE A USER \n[3] - USER LIST \n[4] - SEARCH USER \n[5] - REMOVE A USER \n[0] - EXIT`))
        switch (option) {
            case 1: {
                let name;
                let exist;

                do {
                    exist = userAlreadyExist(name)
                    name = prompt('TYPE THE NAME:')

                    if(exist) alert(`THE USER ${name} ALREADY EXISTS`);

                } while(exist)

                const number = prompt('TYPE THE NUMBER PHONE (LIKE +44 453 323):')
                const email = prompt('TYPE THE EMAIL (LIKE user@hotmail.com):')

                registerUser(name, number, email)
                break;
            }

            case 2: {
                const name = prompt('TYPE THE NAME:')
                const number = prompt('TYPE THE NUMBER PHONE (LIKE +44 453 323):')
                const email = prompt('TYPE THE EMAIL (LIKE user@hotmail.com):')

                updateUser(name, number, email)
                break;
            }
            case 3:{
                getUserList()
                break;
            }

            case 4:{
                const name = prompt('TYPE THE NAME:')
                searchUser(name)
                break;
            }

            case 5:{
                const name = prompt('TYPE THE NAME:')
                removeUser(name)
                break;
            }

            case 0:{
                alert('EXITING...')
                return;
            }
        
            default:
                alert('INVALID ARGUMENT.')
                break;
        }
    }
    main()
}

//register new user
function registerUser(name, number, email) {
    //verifying if there is a user using the same nam
    for(let i = 0 ; i < contacts.length ; i++) {
        if(contacts[i][0] === name) alert(`THE USER ${name} ALREADY EXISTS`);
        return; 
    }

    contacts.push([name, number, email])
    alert(`USER ADDED! \nNAME: ${name} \nNUMBER ${number} \nEMAIL: ${email}`)
}


//update a existent user
function updateUser(name, number, email) {
    let userIndex = -1;

    for(let i = 0 ; i < contacts.length ; i++) {
        if(contacts[i][0] === name) {
            userIndex = i
            break;
        }
    }

    if(userIndex < 0) {
        alert(`USER ${name} NOT FOUND!`)
        return;
    }

    if(name) contacts[userIndex][0] = name
    if(number) contacts[userIndex][1] = number
    if(email) contacts[userIndex][2] = email

    alert(`USER UPDATED! \nNAME: ${name} \nNUMBER ${number} \nEMAIL: ${email}`)
}


//get user list
function getUserList() {
    let msg = ``
    for(let i = 0 ; i < contacts.length ; i++) {
        msg += ` \n${i + 1}. NAME: ${contacts[i][0]}, NUMBER: ${contacts[i][1]}, EMAIL: ${contacts[i][2]}`
    }

    if(!msg) {
        alert(`USER LIST IS CLEAN! CREATE SOME USERS.`)
        return;
    }
    alert(`USER LIST (TOTAL ${contacts.length}):` + msg)
}


//search a user using the name
function searchUser(name) {
    for(let i = 0 ; i < contacts.length ; i++) {
        if(contacts[i][0] === name) {
            alert(`USER FOUNDED! \nNAME: ${contacts[i][0]} \nNUMBER: ${contacts[i][1]} \nEMAIL: ${contacts[i][2]}`); 
            return;
        }
    }
    alert(`USER ${name} NOT FOUND!`)
}

//remove a user
function removeUser(name) {
    for(let i = 0 ; i < contacts.length ; i++) {
        if(contacts[i][0] === name) contacts.splice(i, 1)
        alert(`USER ${name} REMOVED!`)
        return;
    }
    alert(`USER ${name} NOT FOUND!`)
}

//check if user already exist
function userAlreadyExist(name) {
    for(let i = 0 ; i < contacts.length ; i++) {
        if(contacts[i][0] === name) return true
    }
    return false
}

main()