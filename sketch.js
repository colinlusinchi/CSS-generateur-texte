let cvs;
let getTitre;

function setup() {
cvs = createCanvas(700, 1000);
cvs.parent("cvs-container");
background(0);
}

function draw() {
  getTitre = document.getElementById("formtitle").value;
  textSize(20);
  fill(255);
  text(getTitre, 10, 20);


  // put drawing code here
}

function saveAffiche () {
saveCanvas(canvas,"Affiche","pdf");



}
