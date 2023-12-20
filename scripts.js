const button = document.querySelector("button")
const p = document.querySelector("p")
const input = document.querySelector("input")


const contacts = [
    { name: "Jonas", number: "(11) 97344-9550" },
    { name: "Miguel", number: "(12) 97344-9550" },
    { name: "Theo", number: "(13) 97344-9550" },
    { name: "Leonardo", number: "(14) 97344-9550" },
]





button.addEventListener("click", search)
function search() {





    for (let letter of contacts) {

        if (input.value.toLowerCase() === letter.name.toLowerCase()) {
            p.innerHTML = `Contato encontrado nome: ${letter.name}  tel: ${letter.number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado"
        }

    }


    }














