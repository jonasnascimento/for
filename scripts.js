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

  let i = 0;
  let contactFound = false;

  while (i < contacts.length) {
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      p.innerHTML = `Contato encontrado nome: ${contacts[i].name} tel: ${contacts[i].number}`;
      contactFound = true;
      break;
    }
    i++;
  }

  if (!contactFound) {
    p.innerHTML = "Contato não encontrado";
  }
}

















