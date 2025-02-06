const days = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['JAN' , 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const $ = (id) => document.getElementById(id);
const zeroPad = (num) => num.toString().padStart(2, '0');

function updateClock() {
    const now = new Date();
    let hours = zeroPad(now.getHours());
    const minutes = zeroPad(now.getMinutes());
    const seconds = zeroPad(now.getSeconds()); 
    const day = days[now.getDay()];
    const prevDay = days[now.getDay() - 1];
    const month = months[now.getMonth()];
    const date = zeroPad(now.getDate());
    const year = now.getFullYear();


    // console.log(`${hours}:${minutes}:${seconds} ${day} ${month} ${date} ${year}`);

    // console.log(now);

    if (hours >= 12) {
        $('ampm').innerHTML = 'PM';
        hours = zeroPad(hours - 12);
    } else {
        $('ampm').innerHTML = 'AM';
    }

    $('hour').innerHTML = hours;
    $('min').innerHTML = minutes;
    $('sec').innerHTML = seconds;
    $('day').innerHTML = date;
    $('month').innerHTML = month;
    $('year').innerHTML = year;

    $(`${prevDay}`).classList.remove('active');
    $(`${day}`).classList.add('active');

    // $('hour').style.transform = `rotate(${hours * 30}deg)`;
}

setInterval(updateClock, 1000);