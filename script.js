const timeLabel = document.getElementById("timeLabel");
const meridiemLabel = document.getElementById("meridiemLabel");
const dateLabel = document.getElementById("dateLabel");

let numBtnPress = 0;
const colourHexArr = ["ED83AA", "8D5596", "447BBC", "AA6F4A", "B7ACA9", "212427"];

document.getElementById("colourBtn").onclick = () => {
    numBtnPress += 1;
    if (numBtnPress > 5) {
        numBtnPress = 0;
    }
    const body = document.body;
    const icon = document.getElementById("icon");
    body.style.backgroundColor = "#" + String(colourHexArr[numBtnPress]);
    icon.style.color = "#" + String(colourHexArr[numBtnPress]);
}

setInterval(update, 1000);

function update() {

    let theDate = new Date();
    timeLabel.textContent = formatTime(theDate);
    meridiemLabel.textContent = formatMeridiem(theDate);
    dateLabel.textContent = formatDate(theDate);

    function formatTime(date) {
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        hrs = (hrs % 12) || 12;

        hrs = formatZeroes(hrs);
        min = formatZeroes(min);
        sec = formatZeroes(sec);

        return `${hrs} : ${min} : ${sec}`;
    }

    function formatZeroes(time) {
        time = String(time);
        return time.length < 2 ? "0" + time : time;
    }

    function formatMeridiem(date) {
        return date.getHours() >= 12 ? "PM" : "AM";
    }

    function formatDate(date) {
        const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dayInWeek = dayArr[date.getDay()].toUpperCase();
        let month = monthArr[date.getMonth()].toUpperCase();
        let day = date.getDate();
        let year = date.getFullYear();
        return `${dayInWeek}, ${month} ${day}, ${year}`
    }
}

