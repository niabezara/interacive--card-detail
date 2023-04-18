// card holder name
const nameinput = document.getElementById("name");
const title = document.getElementById("title");
// card numbers
const cardnumber = document.getElementById("cardnumber"); //input
const number = document.getElementById("number"); //front in the card
// month and year
const month = document.getElementById("month");
const yearfront = document.getElementById("yearfront");
const monthfront = document.getElementById("monthfront");
// cvc
const cvc = document.getElementById("cvc");
const cvcspan = document.getElementById("cvcspan");

// error sections
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
// button
const button = document.getElementById("button");

// name check ************************************************
let numbers = /^[0-9]+$/;
nameinput.addEventListener("input", () => {
  if (nameinput.value.length == 0 || numbers.test(nameinput.value)) {
    error.classList.add("visible");
    nameinput.style.borderColor = "red";
    title.textContent = "JANE APPLESSED";
  } else {
    error.classList.remove("visible");
    title.innerHTML = nameinput.value;
  }
});

// number check *******************************************
let txtholder = "0000 0000 0000 0000";
let regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, ""); //spaces after each for numbers
cardnumber.addEventListener("input", (event) => {
  event.preventDefault();
  number.textContent = txtholder; // default numbers on the card
  cardnumber.value = formatNumber(cardnumber.value.replaceAll(" ", ""));
  number.innerHTML = cardnumber.value;
  let isValid = cardnumber.value.length;
  // console.log(isValid, !regEx.test(cardnumber.value));
  console.log(cardnumber.value.length);
  if (cardnumber.value.length == 0 || !isNaN(cardnumber.value)) {
    number.textContent = txtholder;
    cardnumber.style.borderColor = "red";
    error1.classList.add("visible");
  } else if (isNaN(cardnumber.value) && isValid === 19) {
    console.log(regEx.test(cardnumber.value));
    cardnumber.style.borderColor = "#dfdee0";
    error1.classList.remove("visible");
  }
});

// month check **********************************************

month.addEventListener("input", (event) => {
  event.preventDefault();
  let monthvalue = month.value;
  let monthNumber = Number(monthvalue);
  monthfront.textContent = "00/";
  monthfront.innerHTML = monthNumber + "/";

  if (
    !isNaN(monthNumber) &&
    monthvalue.length === 1 &&
    monthNumber >= 1 &&
    monthNumber <= 9
  ) {
    let paddedNumber = monthNumber.toString().padStart(2, "0");
    monthfront.innerHTML = paddedNumber + "/";
    console.log(paddedNumber);
    error2.classList.remove("visible");
  } else if (
    !isNaN(monthNumber) &&
    monthvalue.length === 2 &&
    monthNumber > 10 &&
    monthNumber > 12
  ) {
    error2.classList.add("visible");
    month.style.borderColor = "red";
  }
});

// year check **********************************************

year.addEventListener("input", (event) => {
  event.preventDefault();
  yearfront.textContent = "00";
  let yearvalue = year.value;
  let yearNumber = Number(yearvalue);
  yearfront.innerHTML = yearvalue;
  if (
    !isNaN(yearNumber) &&
    yearvalue.length === 2 &&
    yearNumber >= 17 &&
    yearNumber <= 27
  ) {
    error2.classList.remove("visible");
    year.style.borderColor = "#dfdee0";

    console.log(true);
  } else {
    error2.classList.add("visible");
    console.log("error2");
    year.style.borderColor = "red";
  }
});

// cvc check ***************************************************

cvc.addEventListener("input", (event) => {
  event.preventDefault();
  cvcspan.innerHTML = cvc.value;
  let numberRegex = /^\d+$/;
  if (cvc.value.match(numberRegex)) {
  } else {
    error3.classList.add("visible");
    cvc.style.borderColor = "red";
  }
});

// button section click*******************************************

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (nameinput.value.length === 0) {
    nameinput.style.borderColor = "red";
  } else if (cardnumber.value.length === 0) {
    cardnumber.style.borderColor = "red";
  } else if (month.value.length === 0) {
    month.style.borderColor = "red";
  } else if (year.value.length === 0) {
    year.style.borderColor = "red";
  } else if (cvc.value.length === 0) {
    cvc.style.borderColor = "red";
  } else {
    document.querySelector("main").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
    nameinput.style.borderColor =
      "linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%)";
    cardnumber.style.borderColor =
      "linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%)";
    month.style.borderColor =
      "linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%)";
    year.style.borderColor =
      "linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%)";
  }
});
