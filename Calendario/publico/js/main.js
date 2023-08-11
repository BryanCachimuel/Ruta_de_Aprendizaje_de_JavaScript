let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

let prevMonthDOM = document.getElementById("prev-month");
let nextMonthDOM = document.getElementById("next-month");

prevMonthDOM.addEventListener("click", () => lasMonth());
nextMonthDOM.addEventListener("click", () => nextMonth());

const writeMonth = (month) => {
  for (let i = startDay(); i > 0; i--) {
    dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-days">
      ${getTotalDays(monthNumber - 1) - (i - 1)}
  </div>`;
  }

  for (let i = 1; i <= getTotalDays(month); i++) {
    if (i === currentDay) {
      dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
    } else {
      dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
    }
  }
};
