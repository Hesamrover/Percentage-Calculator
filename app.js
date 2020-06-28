document.querySelector("#card").addEventListener("submit", function (e) {
  document.getElementById("hide").style.display = "none";

  document.getElementById("loading").style.display = "block";

  number.value = parseInput(number.value);

  function parseInput(x) {
    return Number(x.replace(/,/g, ""));
  }

  setTimeout(getResult, 1000);
  setTimeout(mycomma, 1000);

  e.preventDefault();
});

const precentage = document.getElementById("precentage");
precentage.value = "%";

// const numberz = document.querySelector(".number-separator");
// numberz.value = numberWithCommas(numberz.value);

// function numberWithCommas(x) {

//   var parts = x.toString().split(".");
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   return parts.join(".");
// }

function getResult(e) {
  const number = document.querySelector(".number-separator");
  const precentage = document.getElementById("precentage");
  const totalYear = document.getElementById("totalYear");
  const totalMonth = document.getElementById("totalMonth");
  const totalDay = document.getElementById("totalDay");

  // function parseInput(x) {
  //   return Number(x.replace(/,/g, ""));
  // }

  function removePercent(x) {
    return Number(x.replace(/%/g, ""));
  }

  // number.value = numberWithCommas(number.value);

  const precentagevalue = removePercent(precentage.value);

  const totalYearValue = (number.value / 100) * precentagevalue;

  const totalMonthValue = ((number.value / 100) * precentagevalue) / 12;

  const totalDayValue = ((number.value / 100) * precentagevalue) / 365;

  totalYear.value = numberWithCommas(totalYearValue.toFixed(0));
  totalMonth.value = numberWithCommas(totalMonthValue.toFixed(0));
  totalDay.value = numberWithCommas(totalDayValue.toFixed(0));
  document.getElementById("loading").style.display = "none";
  document.getElementById("hide").style.display = "block";

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
}

// const numberz = document.querySelector(".number-separator");
// numberz.value = comma(numberz.value);
// document.querySelector(".btn").addEventListener("click", comma);

// function comma() {
//   console.log("sag");

//   const number = document.querySelector(".number-separator");
//   number.value = numberWithCommas(number.value);
//   // number.value = numberWithCommas(number.value);

//   function numberWithCommas(x) {
//     var parts = x.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return parts.join(".");
//   }
// }

// document.getElementById("card").addEventListener("mouseout", backComma);

// function backComma() {
//   console.log("yes");
//   const number = document.getElementById("number");
//   number.value = numberWithCommas(number.value);

//   function numberWithCommas(x) {
//     var parts = x.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return parts.join(".");
//   }
// }

function mycomma() {
  number.value = numberWithCommas(number.value);

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
}

// Clear Button
document.getElementById("clear").addEventListener("click", clearButton);

function clearButton() {
  window.location.reload();
}

//////
$(document).ready(function () {
  // Currency Separator
  var commaCounter = 10;

  function numberSeparator(Number) {
    Number += "";

    for (var i = 0; i < commaCounter; i++) {
      Number = Number.replace(",", "");
    }

    x = Number.split(".");
    y = x[0];
    z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(y)) {
      y = y.replace(rgx, "$1" + "," + "$2");
    }
    commaCounter++;
    return y + z;
  }

  // Set Currency Separator to input fields
  $(document).on("keypress , paste", ".number-separator", function (e) {
    if (/^-?\d*[,.]?(\d{0,3},)*(\d{3},)?\d{0,3}$/.test(e.key)) {
      $(".number-separator").on("input", function () {
        e.target.value = numberSeparator(e.target.value);
      });
    } else {
      e.preventDefault();
      return false;
    }
  });
});
