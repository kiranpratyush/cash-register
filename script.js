"use strict";
// selecting the button using the QuerySelector
const billInput = document.querySelector("input[id='bill']");
const btnNext = document.querySelector(".next");
const secondDiv = document.querySelector(".second");
const cashInput = document.querySelector("input[id='cash']");
const btnCheck = document.querySelector(".check");
const warnings = document.querySelector(".warnings");
const result = document.querySelector(".result");
const notes = document.querySelectorAll(".notes");

let cash_given = [2000, 500, 100, 20, 10, 5, 1];
// function for giving minimum number of cashes
function change(change, cash_given, cash) { // changing the cash using the greedy approach .
  for (let i = 0; i < cash_given.length; i++) {
    while (change >= cash_given[i]) {
      change = change - cash_given[i];
      cash[i] += 1;
    }
  }
  return cash;
}

function bill(billAmount) {
  if (Number(billAmount) <= 0) {
    warnings.textContent = "Enter Positive value of Bill Amount"; // If the negative value of bill is entered then give the warning . 
    if (warnings.classList.contains("display")) {
      warnings.classList.remove("display");
    }
    if (!secondDiv.classList.contains("display")) {
      secondDiv.classList.add("display");
    }
    if (!result.classList.contains("display")) {
      result.classList.add("display");
    }
  } else {
    if (secondDiv.classList.contains("display")) {
      secondDiv.classList.remove("display");
    }
    if (!warnings.classList.contains("display")) {
      warnings.classList.add("display");
    }
  }
}
function returnValue(cash, billAmount) {
  let changeValue;
  if (Number(cash) >= Number(billAmount)) {
    changeValue = Number(cash) - Number(billAmount);
    console.log("billAmount", billAmount);
    console.log("changeValue", changeValue);
    let cashchange = [0, 0, 0, 0, 0, 0, 0];
    cashchange = change(changeValue, cash_given, cashchange);

    for (let i = 0; i < notes.length; i++) {
      // notes[i].textContent = cashchange[i];
      if (cashchange[i] != 0) {
        notes[i].textContent = cashchange[i]; // where it is necessary then the numbers is added under the respective section
      }
      else {
        notes[i].textContent = ""; // if the notes field is Zero then nothing is printed
      }
      if (Number(notes[i].textContent) != 0) {
        notes[i].style.color = "black";
      }
    }
    if (result.classList.contains("display")) {
      result.classList.remove("display");
    }
    if (!warnings.classList.contains("display")) {
      warnings.classList.add("display");
    }
  } else {
    warnings.textContent =
      "Enter cash value greater than or Equal to Bill Amount";
    if (warnings.classList.contains("display")) {
      warnings.classList.remove("display");
    }
    if (!result.classList.contains("display")) {
      result.classList.add("display");
    }
  }
}

let billAmount;
let cash;
console.log(cash);
billInput.addEventListener("change", function (e) {
  billAmount = e.target.value;

});
cashInput.addEventListener("change", function (e) {
  cash = e.target.value;
  console.log(cash)
});
btnNext.addEventListener("click", function () {
  billAmount = billInput.value;
  bill(billAmount);
});
btnCheck.addEventListener("click", function () {
  cash = cashInput.value;
  console.log(cashInput.value);
  console.log(billAmount);
  returnValue(cash, billAmount);
});
