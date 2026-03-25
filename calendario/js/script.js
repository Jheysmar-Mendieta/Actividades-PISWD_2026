const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let date = new Date();
let selectedDay = null;

function renderCalendar() {
    const daysContainer = document.getElementById("days");

    daysContainer.classList.add("fade");
    setTimeout(() => {
        daysContainer.classList.remove("fade");
    }, 300);

    daysContainer.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    document.getElementById("month").innerText = monthNames[month];
    document.getElementById("year").innerText = year;

    let firstDay = new Date(year, month, 1).getDay();
    if (firstDay === 0) firstDay = 7;

    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < firstDay; i++) {
        daysContainer.innerHTML += "<div></div>";
    }

    for (let i = 1; i <= lastDay; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.innerText = i;

        const today = new Date();

        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayDiv.classList.add("today");
        }

        if (
            (month === 0 && i === 1) ||
            (month === 4 && i === 1) ||
            (month === 4 && i === 25) ||
            (month === 6 && i === 9) ||
            (month === 11 && i === 25)
        ) {
            dayDiv.classList.add("holiday");
        }

        dayDiv.onclick = () => {
            selectedDay = i;
            renderCalendar();
        };

        if (i === selectedDay) {
            dayDiv.classList.add("selected");
        }

        daysContainer.appendChild(dayDiv);
    }
}

document.getElementById("prev-month").onclick = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

document.getElementById("next-month").onclick = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

renderCalendar();