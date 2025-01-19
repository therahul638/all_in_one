// bgcolor color changer
const buttons = document.querySelectorAll(".button");
const colors = document.querySelector(".colors");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      colors.style.background =
        "linear-gradient(135deg, orange, rgb(107, 0, 128))";
    } else if (e.target.id === "pink") {
      colors.style.background = "linear-gradient(135deg, blue, pink)";
    } else if (e.target.id === "blue") {
      colors.style.background = "linear-gradient(135deg, purple, white)";
    } else if (e.target.id === "orange") {
      colors.style.background =
        "linear-gradient(135deg, rgb(255, 72, 0), rgb(0, 92, 128))";
    }
  });
});

// Bmi calculator
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const info = document.querySelector(".info");

  if (height === "" || height === 0 || isNaN(height)) {
    result.innerHTML = `Please enter your height ${height}`;
  } else if (weight === "" || weight === 0 || isNaN(weight)) {
    result.innerHTML = `Please enter your weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
    if (bmi < 18.6) {
      info.innerHTML = `Your weight is to low ${bmi}`;
    } else if (bmi > 18.6 || bmi < 24.9) {
      info.innerHTML = `Your weight is Normal ${bmi}`;
    }
    if (bmi > 24.9) {
      info.innerHTML = `Your weight is to height ${bmi}`;
    }
  }
});

// Digital watch

const clock = document.querySelector("#clock");
setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Random color generater

const randomclrs = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10)];
  }
  return color;
};
let inter;
const started = function () {
  if (!inter) {
    inter = setInterval(cbc, 1000);
  }
  function cbc() {
    document.body.style.backgroundColor = randomclrs();
  }
};
const stopped = function () {
  clearInterval(inter);
  inter = null;
};
document.querySelector("#start").addEventListener("click", started);
document.querySelector("#stop").addEventListener("click", stopped);

// Calculator

const calinput = document.querySelector("#inputbox");
const calbtn = document.querySelectorAll("button");
let string = "";
let arr = Array.from(calbtn);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      string = eval(string);
      calinput.value = string;
    } else if (e.target.textContent === "AC") {
      string = "";
      calinput.value = string;
    } else if (e.target.textContent === "DEL") {
      string = string.substring(0, string.length - 1);
      calinput.value = string;
    } else {
      string += e.target.textContent;
      calinput.value = string;
    }
  });
});

// AnalogClock

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let displayTime = function () {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let hR = 30 * hh + mm / 2;
  let mR = 6 * mm;
  let sR = 6 * ss;
  hour.style.transform = `rotate(${hR}deg)`;
  min.style.transform = `rotate(${mR}deg)`;
  sec.style.transform = `rotate(${sR}deg)`;
};
setInterval(displayTime, 1000);

// Password generater
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
let passbox = document.getElementById("passbox");
let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generatebutton = document.getElementById("generatebutton");

generatebutton.addEventListener("click", () => {
  passbox.value = generatePassword();
});
let lowerValue = "abcdefghijklmnopqrstuvwxyz";
let upperValue = " ABCDEFGHIJKLMNOPQRSTUVGXYZ";
let numberValue = "0123456789";
let symbolValue = '!`~.,:;"?/||';
function generatePassword() {
  let genPassword = "";
  let allChar = "";
  allChar += upper.checked ? upperValue : "";
  allChar += lower.checked ? lowerValue : "";
  allChar += number.checked ? numberValue : "";
  allChar += symbol.checked ? symbolValue : "";
  if (allChar == 0 || allChar == "") {
    return genPassword;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
    i++;
  }
  return genPassword;
}
