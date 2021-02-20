var inputQuantidadeMes = document.querySelector("#ganho-mes");
var inputHorasDia = document.querySelector("#horas-dia");
var calculo = document.querySelector("#resposta");

function calcularValorHora() {
    var quantidade = inputQuantidadeMes.value;
    var horas = inputHorasDia.value;

    var horasMes = horas * 22;
    var total = quantidade / horasMes;

    calculo.textContent = "R$" + total.toFixed(2);
}