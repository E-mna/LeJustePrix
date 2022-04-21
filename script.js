let pseudo = prompt("taper ton pseudo");
let resultat = document.querySelector(".resultat");
let btn = document.querySelector("#btn");
let prix = document.querySelector(".prix");
let tentative = 7;
let compteur = 0;
let cadeau = [
  "une autruche",
  " un vélo",
  "un panier en osier",
  " une corde",
  "un chameau",
  "une trotinette",
];
let randomCadeau = cadeau[Math.round(Math.random() * (cadeau.length - 1))];
// géneré un prix aléatoire entre 0 et 100
let random = Math.round(Math.random() * 100);
console.log("random");

//je créer une action sur le click du bouton
btn.addEventListener("click", () => {
  //je compare mon prix
  if (prix.value == random) {
    //action si gagner

    resultat.style.backgroundColor = "green";
    resultat.innerHTML = "BRAVO Tu gagne  un cadeau " + randomCadeau;

    location.reload();
  } else {
    compteur++; //gestion compteur
    //perdu ou continuer?
    if (compteur <= tentative) {
      if (prix.value < random) {
        //plus grand
        resultat.innerHTML = "Plus grand";
      } else {
        //plus petit
        resultat.innerHTML = "Plus petit";
      }
    } else {
      resultat.innerHTML = "GAME OVER";
      resultat.style.backgroundColor = "red";

      let rejouer = prompt("Ey toi rejoue  (un mini 'ok' pour rejouer) ");
      if (rejouer == "ok") {
        location.reload();
      }
    }
  }
});
