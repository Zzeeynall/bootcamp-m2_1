let startDoc = document.getElementById("start"),
  monthIncreaseDoc = document.getElementById("monthIncrease"),
  percentDoc = document.getElementById("percent"),
  daysDoc = document.getElementById("days"),
  btn = document.getElementById("btn");

//errors
let first = document.getElementById("first"),
  second = document.getElementById("second"),
  third = document.getElementById("third"),
  fourth = document.getElementById("fourth");

function checkInput(start, monthIncrease, percent, days) {
  if (start.value <= 0 || monthIncrease.value <= 0 || percent.value <= 0 || percent.value > 100 || days.value <= 0 || Math.trunc(days.value) != days.value) {
    if (start.value <= 0) {
      first.className = "show";
      console.log("Начальная сумма вклада содержит ошибку ввода");
    } else {
      first.className = "block";
    }
    if (monthIncrease.value <= 0) {
      second.className = "show";
      console.log("Сумма пополнения содержит ошибку ввода");
    } else {
      second.className = "block";
    }
    if (percent.value <= 0 || percent.value > 100) {
      third.className = "show";
      console.log("Процент содержит ошибку ввода");
    } else {
      third.className = "block";
    }
    if (days.value <= 0 || Math.trunc(days.value) != days.value) {
      fourth.className = "show";
      console.log("Срок содержит ошибку ввода");
    } else {
      fourth.className = "block";
    }
    return NaN;
  } else {
    first.className = "block";
    second.className = "block";
    third.className = "block";
    fourth.className = "block";
  }
  return true;
}

function calc(startDoc, monthIncreaseDoc, percentDoc, daysDoc) {
  let start = +startDoc.value;
  let monthIncrease = +monthIncreaseDoc.value;
  let percent = +percentDoc.value / 12;
  let days = Math.floor(+daysDoc.value / 30);
  let total = start;
  for (let i = 0; i < days; i++) {
    total += (total * percent) / 100;
    total += monthIncrease;
  }
  console.log(Math.round(total));
  alert(Math.round(total));
  return Math.round(total);
}

function calculate() {
  if (checkInput(startDoc, monthIncreaseDoc, percentDoc, daysDoc)) {
    calc(startDoc, monthIncreaseDoc, percentDoc, daysDoc);
  }
}

btn.addEventListener("click", calculate);