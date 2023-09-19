//short script to set the middle column to full width in the situation that a side-nav libguides template with three columns has an empty third column.

let thirdColumnBoxes = document.querySelector('#s-lg-col-2 > .s-lg-col-boxes');
let secondColumnBoxes = document.querySelector('#s-lg-col-1');

if (thirdColumnBoxes.childNodes.length<2){

secondColumnBoxes.className="col-md-12";

}