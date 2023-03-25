import { KUTYALISTA, KUTYAKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendezesNevSzerint } from "./rendezesSzures.js";

window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
rendezesNevSzerint(KUTYALISTA)

  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");

  //osszeallit(KUTYALISTA);
  //osszeallit2(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  const kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");

  const NevInputElem = document.querySelector("#kneve");
  kutya.nev = NevInputElem.value;

  const KorInputElem = document.querySelector("#kkor");
  kutya.kor = KorInputElem.value;

  const FajtaInputElem = document.querySelector("#kfajta");
  kutya.fajta = FajtaInputElem.value;

  let kutya2={
    nev:NevInputElem.value,
    kor:KorInputElem.value,
    fajta:FajtaInputElem.value
  }
  
  const NemInputElem = document.querySelector("#szuka");
  if (NemInputElem.checked) {
    kutya.nem = "szuka";
  } else {
    kutya.nem = "kan";
  }

  console.log(kutya2);

  /*   console.log("Vauka");

  let index = 0;
  const ADAT = document.querySelectorAll("input");
  for (const kulcs in KUTYALISTA[index]) {
    if (ADAT[index].id == "szuka" && (szuka.checked = true)) {
      console.log("szuka");
      Kutya[kulcs] = "szuka";
      index++;
    } else if (ADAT[index].id == "kan" && (kan.checked = true)) {
      console.log("kan");
      Kutya[kulcs] = "kan";
    } else {
      Kutya[kulcs] = `${ADAT[index].value}`;
    }
    index++;
  } */
  KUTYALISTA.push(kutya);
  console.log(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}
