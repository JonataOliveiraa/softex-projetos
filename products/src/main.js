const stock = []

function main() {
    const option = Number(prompt(`WELCOME TO THE STOCK MANAGER! \n[1] - ADD PRODUCT IN STOCK \n[2] - UPDATE A PRODUCT \n[3] - REMOVE A PRODUCT \n[4] - GET PRODUCT LIST FROM STOCK \n[5] - GET STOCK TOTAL VALUE \n[0] - EXIT`))

    switch (option) {
        case 1:{
                let product = prompt(`TYPE THE PRODUCT NAME`)
                let exists;

                do {
                    exists = false

                    for (let i = 0; i < stock.length; i++) {
                        if(stock[i][0] === product) {
                            exists = true
                            alert(`${product} ALREADY EXISTS!`)
                            product = prompt(`TYPE THE PRODUCT NAME`)
                            continue;
                        }
                    }
                } while(exists)

                const value = prompt(`TYPE THE VALUE IN $`)
                const quantity = prompt(`TYPE THE PRODUCT QUANTIY`)

                addProductInStock(product, value, quantity)
                break;
            }

        case 2:{
            const product = prompt(`TYPE THE PRODUCT NAME`)
            const value = prompt(`TYPE THE VALUE IN $`) 
            const quantity = prompt(`TYPE THE PRODUCT QUANTITY`)
            updateProductInStock(product, value, quantity)
            break;
        }

        case 3:{
            const product = prompt(`TYPE THE PRODUCT NAME`)
            removeProductInStock(product)
            break;
        }

        case 4:{
            getProductList()
            break;
        }

        case 5:{
            stockTotalValue()
            break;
        }

        case 0:{
            alert('EXITING...')
            return;
        }
        
        default:
            break;
    }
    main()
}

function addProductInStock(name, value, quantity) {
    for (let i = 0; i < stock.length; i++) {
        if(stock[i] === name) {
            alert(`${name} ALREADY EXISTS!`)
            return;
        }
    }

    stock.push([name, value, quantity])
}

function getProductList() {
    let msg = ''
    for (let i = 0; i < stock.length; i++) {
        msg += ` \nPRODUCT: ${stock[i][0]}, VALUE: $ ${stock[i][1]}, QUANTITY: ${stock[i][2]} UNI. ${stock[i][2] <= 5 ? 'LOW STOCK!' : ''}`
    }
    if(!msg) {
        alert('NO PRODUCTS FOUND! CREATE SOME PRODUCTS')
        return;
    }
    alert(`PRODUCTS LIST OF STOCK:` + msg)
}

function updateProductInStock(name, value, quantity) {
    let productIndex = -1

    for (let i = 0; i < stock.length; i++) {
        if(stock[i][0] === name) {
            productIndex = i
            break;
        }
    }

    if(productIndex <= -1) {
        alert('PRODUCT NOT FOUND')
        return;
    }

    if(name) stock[productIndex][0] = name
    if(value) stock[productIndex][1] = value
    if(quantity) stock[productIndex][2] = quantity

    alert(`PRODUCT ${name} UPDATED! \nPRODUCT: ${stock[productIndex][0]}, VALUE: $ ${stock[productIndex][1]}, QUANTITY: ${stock[productIndex][2]} UNI.`)
}

function removeProductInStock(name) {
    for (let i = 0; i < stock.length; i++) {
        if(stock[i][0] === name) {
            stock.splice(i, 1)
            alert(`${name} REMOVED FROM STOCK!`)
            return;
        }
    }
    alert(`${name} NOT FOUND!`)
}

function stockTotalValue() {
    let msg = ``
    let total = 0

    for (let i = 0; i < stock.length; i++) {
        const ptotal = stock[i][1] * stock[i][2]
        msg += ` \n PRODUCT: ${stock[i][0]} \nVALUE FROM STOCK: $ ${ptotal}`
        total += ptotal
    }

    alert(`STOCK VALUE:` + msg + ` \n- TOTAL IN GENERAL: $ ${total}`)
}

main()