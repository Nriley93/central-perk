/* 
   Central Perk
   Filename: script.js

   Author:   Nickolas Riley & Erin Ryan
   Date:     7/19/2020
 */

/* create variables */
var list = document.querySelector(".choices-list");
var bagel = document.querySelector(".choices-list li:first-of-type");
var croissant = document.querySelector(".choices-list li:nth-of-type(2)");
var hazelnut = document.querySelector(".choices-list li:nth-of-type(3)");
var sandwich = document.querySelector(".choices-list li:nth-of-type(4)");
var salad = document.querySelector(".choices-list li:last-of-type");
var figureImage = document.querySelector("article figure img");
var figureCaption = document.querySelector("article figure figcaption");


/* change image to Bagel*/
function showBagel() {
  figureImage.src = "Assets/Images/cinnamonbagel.png";
  figureImage.alt = "a cinnamon bagel";
  figureCaption.textContent = "Cinnamon Cruch Bagel";
}
/* change image to Chocolate Croissant */
function showCroissant() {
  figureImage.src = "Assets/Images/croissant.png";
  figureImage.alt = "a chocolate almond croissant";
  figureCaption.textContent = "Chocolate Almond Croissant";
}
/* change image to Hazelnut Coffee */
function showHazelnut() {
  figureImage.src = "Assets/Images/hazelnut.png";
  figureImage.alt = "Hazelnut Coffee";
  figureCaption.textContent = "Hazelnut Coffee";
}
/* change image to sandwich */
function showSandwich() {
  figureImage.src = "Assets/Images/steakcheddar.png";
  figureImage.alt = "a steak & cheddar sandwich";
  figureCaption.textContent = "Steak & White Cheddar Sandwich";
}
/* change image to sandwich */
function showSalad() {
  figureImage.src = "Assets/Images/salad.png";
  figureImage.alt = "a greek salad";
  figureCaption.textContent = "Greek Salad";
}

/* create event listners for list item clicks */
bagel.addEventListener("click", showBagel, false);
croissant.addEventListener("click", showCroissant, false);
hazelnut.addEventListener("click", showHazelnut, false);
sandwich.addEventListener("click", showSandwich, false)
salad.addEventListener("click", showSalad, false)