
let notas = []


const forms = document.getElementById("formulario");

forms.addEventListener("submit", (e) => {
    e.preventDefault()

    addActivity()
    calculateAverage()

})

function addActivity() {

    const nome_atividade = document.getElementById("nome-atividade").value
    const nota_atividade = document.getElementById("nota-atividade").value
    const body = document.getElementById("body")

    const tr = document.createElement("tr")


    notas.push(parseFloat(nota_atividade))

    body.appendChild(tr)



    body.innerHTML +=
        `
    <td>
       ${nome_atividade}
    </td>
    
    <td>
     ${nota_atividade}
    </td>
    
    <td>
      ${nota_atividade >= 7 ? "<img src='./images/aprovado.png' alt=''/>" : "<img src='./images/reprovado.png' alt=''/>"}
    </td>`

}

function calculateAverage() {


    let sumAverage = 0
    for (let i = 0; i < notas.length; i++) {
        sumAverage += notas[i]
    }
    let total = sumAverage / notas.length

    console.log(total)

    const foot = document.getElementById("foot")
    const tr = document.createElement("tr")


    foot.appendChild(tr)


    foot.innerHTML =
        ` <td>Média Final</td>
    <td>${total.toFixed(1)}</td>
    <td >${total >= 7 ?  "aprovado" :'Reprovado'}</td>
          `

}




