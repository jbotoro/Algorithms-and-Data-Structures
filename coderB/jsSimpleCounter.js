// JavaScript Simple Counter

// We provided some simple JavaScript code. Your goal is to modify the application
//  so that the counter correctly displays and it increments by one whenever the 
//  button is pressed. You are free to add classes and styles, but make sure you 
//  leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

// Given Code:

import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <span>0</span></p>
  <button id="mainButton">Increase</button>
</div>`;

// My Code

import $ from "jquery";

let count = 0

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <span id="counter">${count}</span></p>
  <button id="mainButton">Increase</button>
</div>`;

$('#mainButton').click(() => {
  count++
  $('#counter').html(count)
});