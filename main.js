let now = new Date();
let h = now.getHours() % 12;
let m = now.getMinutes();
let s = now.getSeconds();
let day = now.getDay();
let minutesCursor = document.querySelector('.minutes');
let secondsCursor = document.querySelector('.seconds');
let hoursCursor = document.querySelector('.hours');
let dateBox = document.querySelector('.date');
let dateCursor = document.querySelector('.date-cursor');
let allDays = document.querySelectorAll('.week-days');
console.log(m);
let secondNumber = s * 6;
let minuteNumber = m * 6;
let hourNumber = 30 * h;



let time = setInterval(currentTime,1000);
currentDay();


function currentTime() {   
    secondsCursor.style.transform = `rotate(${secondNumber}deg) translate(-50%, -50%)`;
    minutesCursor.style.transform = `rotate(${minuteNumber}deg) translate(-50%, -50%)`;
    hoursCursor.style.transform = `rotate(${hourNumber}deg) translate(-50%, -50%)`;
    secondNumber = secondNumber + 6;
    if (secondNumber === 360){
        minuteNumber =  minuteNumber + 6;
        secondNumber = 0
    }
    if (minuteNumber === 360){
        minuteNumber = 6;
        hourNumber = hourNumber + 30;
    } 
}



function currentDay() {
    if (day == 1) {
        allDays[0].style.color = "red";
        dateCursor.style.transform = `rotate(-35deg) translate(-50%, -50%)`;
    }else if (day == 2) {
        allDays[1].style.color = "red";
        dateCursor.style.transform = `rotate(-11deg) translate(-50%, -50%)`;
    }else if (day == 3) {
        allDays[2].style.color = "red";
        dateCursor.style.transform = `rotate(24deg) translate(-50%, -50%)`;
    }else if (day == 4) {
        allDays[3].style.color = "red";
        dateCursor.style.transform = `rotate(60deg) translate(-50%, -50%)`;
    }else if (day == 5) {
        allDays[4].style.color = "red";
        dateCursor.style.transform = `rotate(92deg) translate(-50%, -50%)`;
    }else if (day == 6) {
        allDays[5].style.color = "red";
        dateCursor.style.transform = `rotate(121deg) translate(-50%, -50%)`;
    }else if (day == 7) {
        allDays[6].style.color = "red";
        dateCursor.style.transform = `rotate(146deg) translate(-50%, -50%)`;
    }
}
