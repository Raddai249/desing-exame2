function saluer() {
  alert("Bienvenue sur le site d'examen !");
}

function getValeur(nom) {
  const radios = document.getElementsByName(nom);
  for (let r of radios) {
    if (r.checked) return parseInt(r.value);
  }
  return 0;
}

function noter() {
  const nom = document.getElementById("nomEtudiant").value || "Étudiant";

  let total = 0;
  total += getValeur("q1");
  total += getValeur("q2");
  total += getValeur("q3");

  const note = Math.round((total / 3) * 20);

  document.getElementById("score").innerText =
    nom + " — Score: " + total + "/3 | Note: " + note + "/20";
}
