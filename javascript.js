let quotesIndex = 0;
let imageIndex = 0;
var inc = 1000;
var incquotes = 2000;
let datetime = document.querySelector(".date-time");
let dayele = document.querySelector(".day");
let dateele = document.querySelector(".date");
let monthele = document.querySelector(".month");
let yearele = document.querySelector(".year");
let quotesDiv = document.querySelector(".quotes");
let wrapDiv = document.querySelector(".wrap");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const quotes = [
  `there's only one thing more precious than <br/>
our time and that's is only your smile`,
  `your name suites you <br/>
bacause i feel your fragrance`,
  `this life long love-clock <br/>
always remind your promises`,
  `always handle with love and care <br/>
because you founded a priceless diamond`,
];
const image = [
  `cute-fragrance-5.jpg`,
  `cute-fragrance.jpg`,
  `cute-fragrance-1.jpg`,
  `cute-fragrance-2.jpg`,
  `cute-fragrance-3.jpg`,
];
const fulldays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
let day = days[date.getDay()];
let month =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
let year = date.getFullYear();
let dte = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
quotesDiv.innerHTML = quotes[0];
wrapDiv.style.backgroundImage = `url('./${image[0]}')`;
clock();
function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = hours < 10 ? `0${hours}` : hours;
  const m = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".hours").innerHTML = h;
  document.querySelector(".mins").innerHTML = m;
  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector(".second").style.transform = `rotate(${second}deg)`;
}
const handleQuotes = () => {
  quotesIndex = quotes.length <= quotesIndex + 1 ? 0 : ++quotesIndex;
  imageIndex = image.length <= imageIndex + 1 ? 0 : ++imageIndex;
  quotesDiv.innerHTML = quotes[quotesIndex];
  wrapDiv.style.backgroundImage = `url('./${image[imageIndex]}')`;
};

setInterval(handleQuotes, incquotes);
setInterval(clock, inc);

let dateelement = document.createElement("h3");

//    console.log(date);

dateelement.classList.add("date");
dateelement.innerHTML = `
           <h3>${day}&nbsp;&nbsp;${dte}/${month}/${year}</h3>
       `;
datetime.append(dateelement);

dayele.innerText = fulldays[date.getDay()];
dateele.innerText = dte;
monthele.innerText = months[date.getMonth()];
yearele.innerText = year;
