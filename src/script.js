function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Congratulations!!!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Invalid number!! Type a number between 0 and 10";
  } else {
    resultado.innerHTML = "wrong, the secret number was " + numeroSecreto;
  }
}
