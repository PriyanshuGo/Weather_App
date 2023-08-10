const temprature = document.querySelector(".weather1");
const city = document.querySelector(".weather2 p");
const date = document.querySelector(".weather2 span");
const emoji = document.querySelector(".weather3 img");
const weather = document.querySelector(".weather3 span");
const search = document.querySelector(".put");
const form = document.querySelector("form");
form.addEventListener("submit", see);
let target = "delhi";

const fetchData = async () => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=cc0b7ad6bea04d71b7970020232707&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "data");
    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    updateDom(temp_c, name, localtime, icon, text);
  } catch (error) {
    alert("Location Not Found!!");
  }
};

function updateDom(temp, jagah, time, emo, someText) {
    temprature.innerText = temp;
    city.innerText = jagah;
    date.innerText = time;
    emoji.src = emo;
    weather.innerText = someText;
}
fetchData(target);


function see(e) {
    e.preventDefault();
    target = search.value;
    fetchData(target);
}