/*
################################
||                            ||
||      Nicolas knittel       ||
|| nicolas.knittel@proton.me  ||
||         ADRAR 2025         ||
||      github.com/siixo      ||
||                            ||
################################
*/

// Import et animations Anime.js

import { animate, text, stagger } from "animejs";

import "./style.css";

const { chars } = text.split("#bouncy-text", { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: "-2.75rem", ease: "outExpo", duration: 600 },
    { to: 0, ease: "outBounce", duration: 800, delay: 100 },
  ],
  // Property specific parameters
  rotate: {
    from: "-1turn",
    delay: 0,
  },
  delay: stagger(50),
  ease: "inOutCirc",
  loopDelay: 1000,
  loop: true,
});

animate(".card", {
  opacity: [0, 1],
  translateX: (el, i) => (i % 2 === 0 ? [-50, 0] : [50, 0]),
  delay: stagger(150, { start: 200 }),
  duration: 800,
  easing: "easeOutCirc",
});

/*
################################
||                            ||
||        EXERCICE 1+2        ||
||                            ||
################################
*/

let element = document.getElementById("element");
let bouton = document.getElementById("bouton1");
const textarea = document.getElementById("Textarea");
const button = document.getElementById("myButton");
let counter = 0;

//Initialisation du texte + récupération localStorage
element.innerText = "Cliquer ici!";
element.classList.add("text-white");

bouton.addEventListener("click", (event) => {
  event.preventDefault();
  switch (counter) {
    case 0:
      element.innerText = "Reclique!";
      counter++;
      break;
    case 1:
      element.innerText = "Cliquer ici!";
      counter = 0;
      break;
  }
});

textarea.addEventListener("input", (e) => {
  if (textarea.value.length > 5) {
    button.disabled = true; // lock the button
    button.innerText = "Trop long"; // change button text);
  } else {
    button.disabled = false; // unlock the button
  }
  setLocalStorage();
});

function setLocalStorage() {
  localStorage.setItem(textarea.id, textarea.value);
  localStorage.setItem("players", JSON.stringify(tab));
}
function getLocalStorage() {
  const value = localStorage.getItem(textarea.id);
  const players = localStorage.getItem("players");

  if (value) {
    textarea.value = value;
  }
  if (players) {
    tab = JSON.parse(players); // restore saved scores
  }
}

/*
################################
||                            ||
||        EXERCICE 3          ||
||                            ||
################################
*/

/*
################################
||                            ||
||        EXERCICE IMC        ||
||                            ||
################################
*/

//IMC = Poids (kg) ÷ [Taille (m)]²
class Imc {
  constructor(name, weight, size) {
    this.name = name;
    this.weight = weight;
    this.size = size;
  }
}

function calculIMC(weight, size) {
  return (weight / (size * size)).toFixed(2);
}

function displayIMC(person) {
  let display = document.getElementById("displayIMC");
  let p = document.createElement("p");
  p.textContent = `${person.name} a un IMC de ${calculIMC(
    person.weight,
    person.size
  )}`;
  display.appendChild(p);
}

let list = [
  new Imc("Sébastien Chabal", 135, 1.7),
  new Imc("Escaladeuse", 45, 1.68),
  new Imc("JOJO ", 300, 2),
  new Imc("Gontrand ", 90, 1.75),
  new Imc("Colonel Clock ", 200, 1.75),
  new Imc("Josiane de la Vega", 99, 1.55),
];

list.forEach((person) => {
  displayIMC(person);
});

/*
################################
||                            ||
||        EXERCICE PME        ||
||                            ||
################################
*/

class Employee {
  constructor(
    name,
    firstName,
    age,
    salary,
    numberOfMonths = 12,
    charges = 0.9
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.salary = salary;
    this.numberOfMonths = numberOfMonths;
    this.charges = charges;
  }
}

class PME {
  constructor(name, team, revenue, fixedCosts, purchaseCosts) {
    this.name = name;
    this.team = team;
    this.revenue = revenue;
    this.fixedCosts = fixedCosts;
    this.purchaseCosts = purchaseCosts;
  }
  get totalSalaries() {
    let total = 0;
    this.team.forEach((employee) => {
      total += employee.salary * employee.numberOfMonths * employee.charges;
    });
    return total;
  }
  get totalCosts() {
    return this.fixedCosts + this.purchaseCosts + this.totalSalaries;
  }
}

function displayPME(pme) {
  let display = document.getElementById("displayPME");

  let name = document.createElement("p");
  let revenue = document.createElement("p");
  let totalSalaries = document.createElement("p");
  let totalCosts = document.createElement("p");

  name.textContent = `${pme.name}`;
  revenue.textContent = `Revenu : ${pme.revenue} €`;
  totalSalaries.textContent = `Total Salaires (avec charges) : ${pme.totalSalaries.toFixed(
    2
  )} €`;
  totalCosts.textContent = `Total Coûts : ${pme.totalCosts.toFixed(2)} €`;

  display.appendChild(name);
  display.appendChild(revenue);
  display.appendChild(totalSalaries);
  display.appendChild(totalCosts);
}

// // Scénario
const pme = new PME(
  //Le nom entreprise
  "Ma Petite Entreprise",
  //L'equipe de salariés (un tableau)
  [
    new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),
  ],
  //le revenu , frais fixe, frais d'achat
  300000,
  20000,
  50000
);

pme.totalCosts;
displayPME(pme);

/*
################################
||                            ||
||        EXERCICE PME        ||
||                            ||
################################
*/
