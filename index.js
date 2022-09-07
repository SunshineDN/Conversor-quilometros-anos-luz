function Converter() {
    let kmUsuario = Number(document.getElementById("km").value);
    let resultHTML = document.querySelector(".result");
    if (kmUsuario == "" || kmUsuario <= 0) {
        alert("Valor menor ou igual a 0 (zero) é inválido.")
        resultHTML.innerHTML = `O resultado irá aparecer aqui!`
    } else {
        let fixo = 94608 * (10 ** 8)
        let resultado = kmUsuario / fixo;
        resultHTML.innerHTML = `A distância ${kmUsuario}KM em Anos-Luz é:<br>${resultado}`
    }
}