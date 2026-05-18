
function langg() {
 document.addEventListener("DOMContentLoaded", function() {
document.addEventListener('DOMContentLoaded', () => {
  const n = document.getElementById("language").value;
});
document.getElementById("language").addEventListener('change', function() {
   lang = this.value;

console.log(lang);
return lang;

 })
});
}

langg();

const lg = langg();




function showTime() {
const time = document.querySelector('.time');
const date = new Date();
const currentTime = date.toLocaleTimeString();
time.textContent = currentTime;
setTimeout(showTime, 1000);
showDate();
// showGreeting();
}

showTime();









const date = new Date();
const hours = date.getHours();


/*
function showGreeting() {
const greeting = document.querySelector('.greeting');
function getTimeOfDay() {
const date = new Date();
const hours = date.getHours();

if (hours > 6 && hours < 12) {
return "morning";
} else if (hours > 12 && hours < 17) {
return "afternoon";
} else if (hours > 17 && hours < 21) {
return "evening";
} else  {
return "night";}
};

const timeOfDay = getTimeOfDay();

const greetingText = `Good ${timeOfDay}`;

greeting.textContent = greetingText;

}
*/
// showGreeting();


const name = document.querySelector('.name');



console.log(name);

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value);
  localStorage.setItem('timeDisplay', timeCheckboxInput.checked);
  localStorage.setItem('dateDisplay', dateCheckboxInput.checked);
  localStorage.setItem('greetingDisplay', greetingCheckboxInput.checked);
  localStorage.setItem('quoteDisplay', quoteCheckboxInput.checked);
  localStorage.setItem('weatherDisplay', weatherCheckboxInput.checked);
  localStorage.setItem('playerDisplay', playerCheckboxInput.checked);
  localStorage.setItem('language', language.value);
}

window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
  if (localStorage.getItem('language')) {
    language.value = localStorage.getItem('language');
  }
  if (localStorage.getItem('timeDisplay')) {
    timeCheckboxInput.checked = (localStorage.getItem('timeDisplay') === 'true');
  }
  if (localStorage.getItem('dateDisplay')) {
    dateCheckboxInput.checked = (localStorage.getItem('dateDisplay') === 'true');
  }
  if (localStorage.getItem('greetingDisplay')) {
    greetingCheckboxInput.checked = (localStorage.getItem('greetingDisplay') === 'true');
  }
  if (localStorage.getItem('quoteDisplay')) {
    quoteCheckboxInput.checked = (localStorage.getItem('quoteDisplay') === 'true');
  }
  if (localStorage.getItem('weatherDisplay')) {
    weatherCheckboxInput.checked = (localStorage.getItem('weatherDisplay') === 'true');
  }
  if (localStorage.getItem('playerDisplay')) {
    playerCheckboxInput.checked = (localStorage.getItem('playerDisplay') === 'true');
  }
  
hideAndShowElements();

}

window.addEventListener('load', getLocalStorage);





function showDate() {
const shDate = document.querySelector('.date');
const date = new Date();
const options = {weekday: 'long', month: 'long',  day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Moscow'};
function datelg () {
if (language.value === 'ru') {
return 'ru-RU';
} else {
return 'en-US';}
}

 
const currentDate = date.toLocaleDateString(datelg(), options);
shDate.textContent = currentDate;


}





showDate();



function getTimeOfDay() {
const date = new Date();
const hours = date.getHours();

if (hours > 6 && hours < 12) {
return "morning";
} else if (hours > 12 && hours < 17) {
return "afternoon";
} else if (hours > 17 && hours < 21) {
return "evening";
} else  {
return "night";}
};

const timeOfDay = getTimeOfDay();
console.log(timeOfDay);

let bgNum = Math.ceil(20*Math.random());
console.log(bgNum);

const body = document.querySelector('body');

function setBg () {
 const img = new Image();

img.src = "https://raw.githubusercontent.com/lkhgvjgfxdrdhxtfc/stage1-tasks/assets/images/"+timeOfDay+"/"+bgNum+".jpg";


  img.onload = () => {
    body.style.backgroundImage = `url('${img.src}')`;
  }
}

setBg ();




function getSlideNext() {
  if (bgNum === 20) {
    bgNum = 1;
  } else {
    bgNum++;
  }
  setBg();
}

function getSlidePrev() {
  if (bgNum === 1) {
    bgNum = 20;
  } else {
    bgNum--;
  }
  setBg();
}



const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext);



const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev);










const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');


async function getWeather() {
function hhhhh() {  
if (language.value === 'ru') {
   let url = `https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=90aadc412d351fde6cce338a92f65e56e&units=metric`;
  } else {
let url = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=en&appid=90aadc412d351fde6cce338a92f65e56e&units=metric`;
};
}
  if (city.value === '' && language.value === 'ru') {
    url = `https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=90aadc412d351fde6cce338a92f65e56&units=metric`;
  }


   else if (city.value === '') {
    url = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=en&appid=90aadc412d351fde6cce338a92f65e56&units=metric`;
  }
	

	else if (city.value !== '') {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=90aadc412d351fde6cce338a92f65e56&units=metric`;
  }

  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  if (res.status === 200 && language.value === 'ru') {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность: ${data.main.humidity}%`;
    weatherError.textContent = '';
}


else if (res.status === 200) {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `wind speed: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `humidity: ${data.main.humidity}%`;
    weatherError.textContent = '';
  } else {
    weatherError.textContent = 'Eror: city not found';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';    
  }

}

city.addEventListener('change', getWeather);



function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);



const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {
  const quotes = 'assets/quotes/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  
  let randomQuoteNum = Math.ceil(Math.random() * (data.length));
  console.log(randomQuoteNum);
  quote.textContent = `"${data[randomQuoteNum].text}"`;
  author.textContent = data[randomQuoteNum].author;
}

getQuotes();

changeQuote.addEventListener('click', getQuotes);





let buttonSetting = document.querySelector('.settings-btn');
let settingsContainer = document.querySelector('.settings-container');


buttonSetting.addEventListener ('click', function(evt) {
evt.preventDefault();
settingsContainer.classList.toggle('visible');

})



const timeCheckboxInput = document.querySelector('#time-checkbox-input');
const dateCheckboxInput = document.querySelector('#date-checkbox-input');
const greetingCheckboxInput = document.querySelector('#greeting-checkbox-input');
const quoteCheckboxInput = document.querySelector('#quote-checkbox-input');
const weatherCheckboxInput = document.querySelector('#weather-checkbox-input');
const playerCheckboxInput = document.querySelector('#player-checkbox-input');
const todoCheckboxInput = document.querySelector('#todo-checkbox-input');

function hideAndShowElements() {
  timeCheckboxInput.checked ? document.querySelector('.time').classList.remove("hidden") : document.querySelector('.time').classList.add("hidden");
  dateCheckboxInput.checked ? document.querySelector('.date').classList.remove("hidden") : document.querySelector('.date').classList.add("hidden");
  greetingCheckboxInput.checked ? document.querySelector('.greeting-container').classList.remove("hidden") : document.querySelector('.greeting-container').classList.add("hidden");
  quoteCheckboxInput.checked ? document.querySelector('.quote-container').classList.remove("hidden") : document.querySelector('.quote-container').classList.add("hidden");
  weatherCheckboxInput.checked ? document.querySelector('.weather').classList.remove("hidden") : document.querySelector('.weather').classList.add("hidden");
  playerCheckboxInput.checked ? document.querySelector('.player').classList.remove("hidden") : document.querySelector('.player').classList.add("hidden");
  todoCheckboxInput.checked ? document.querySelector('.todolist').classList.remove("hidden") : document.querySelector('.todolist').classList.add("hidden");
}

settingsContainer.addEventListener('click', hideAndShowElements);



// TODO LIST

// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items variable an empty array
var items = JSON.parse(localStorage.getItem('todo-list')) || [];

// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  var inputBox = document.querySelector('#todo-input');
  var item = inputBox.value
  
  // If input box is empty, return and alert the user
  // You can also do some more validation if here if you want
  if (item === "")
    return alert("You need to put in a number");

  // If input is valid, add item to items array
  items.push({
    value: item,
    time: (new Date()).toLocaleDateString("en-US")
  })
  
  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem('todo-list', JSON.stringify(items));
  
  // call function to list all items
  listItems();
  
  // clear input box
  inputBox.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem('todo-list', JSON.stringify(items))
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();
}


// function that generates list of items and populates the html
function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li class="+ (items[i].done ? "done" : "") +">";
    list += items[i].value + " ";
    list += "<small title='click me to mark as done' class='label' onclick='markAsDone("+ i +")'>"+ items[i].time +"</small> ";
    list += "<span class='label alert delete' onclick='deleteItem("+ i +")'><b>delete</b></span></li>";
    
  }
  document.querySelector("#list-items").innerHTML = list;
}

// function to run when page loads
(function() {
  listItems();
})();





function changeLanguage() {

   if (localStorage.getItem('language')) {
    language.value = localStorage.getItem('language');
   }


 if (language.value === 'ru') {
document.getElementById('lg').innerHTML = "Язык";
document.getElementById('dateSet').innerHTML = "Дата";
document.getElementById('timeSet').innerHTML = "Время";
document.getElementById('grSet').innerHTML = "Приветствие";
document.getElementById('quoSet').innerHTML = "Цитата дня";
document.getElementById('weaSet').innerHTML = "Погода";
document.getElementById('auSet').innerHTML = "Аудио плеер";
document.getElementById('toDoLg').innerHTML = "Список дел";
document.getElementById('toDoLg1').innerHTML = "Список дел";
document.getElementById('addToDo').innerHTML = "Добавить в список дел";
document.getElementsByName('Placehold')[0].placeholder='[Введите ваше имя]';

if (hours > 6 && hours < 12) {
document.getElementById('greeting').innerHTML = "Доброе утро";
} else if (hours > 12 && hours < 17) {
document.getElementById('greeting').innerHTML = "Добрый день";
} else if (hours > 17 && hours < 21) {
document.getElementById('greeting').innerHTML = "Добрый вечер";
} else {
document.getElementById('greeting').innerHTML = "Доброй ночи";
};

} else if (language.value === 'en') {
document.getElementById('lg').innerHTML = "Language";
document.getElementById('dateSet').innerHTML = "Date";
document.getElementById('timeSet').innerHTML = "Time";
document.getElementById('grSet').innerHTML = "Greeting";
document.getElementById('quoSet').innerHTML = "Quote of the day";
document.getElementById('weaSet').innerHTML = "Weather forecast";
document.getElementById('auSet').innerHTML = "Audio player";
document.getElementById('toDoLg').innerHTML = "ToDo List";
document.getElementById('toDoLg1').innerHTML = "ToDo List";
document.getElementById('addToDo').innerHTML = "Add ToDo List";
document.getElementsByName('Placehold')[0].placeholder='[Enter your name]';

if (hours > 6 && hours < 12) {
document.getElementById('greeting').innerHTML = "Good morning";
} else if (hours > 12 && hours < 17) {
document.getElementById('greeting').innerHTML = "Good afternoon";
} else if (hours > 17 && hours < 21) {
document.getElementById('greeting').innerHTML = "Good evening";
} else {
document.getElementById('greeting').innerHTML = "Good night";
};

} 

}







window.addEventListener('load', changeLanguage);




 document.getElementById("language").addEventListener("change", function(){
   if (this.value === 'ru') {
document.getElementById('lg').innerHTML = "Язык";
document.getElementById('dateSet').innerHTML = "Дата";
document.getElementById('timeSet').innerHTML = "Время";
document.getElementById('grSet').innerHTML = "Приветствие";
document.getElementById('quoSet').innerHTML = "Цитата дня";
document.getElementById('weaSet').innerHTML = "Погода";
document.getElementById('auSet').innerHTML = "Аудио плеер";
document.getElementById('toDoLg').innerHTML = "Список дел";
document.getElementById('toDoLg1').innerHTML = "Список дел";
document.getElementById('addToDo').innerHTML = "Добавить в список дел";
document.getElementsByName('Placehold')[0].placeholder='[Введите ваше имя]';

if (hours > 6 && hours < 12) {
document.getElementById('greeting').innerHTML = "Доброе утро";
} else if (hours > 12 && hours < 17) {
document.getElementById('greeting').innerHTML = "Добрый день";
} else if (hours > 17 && hours < 21) {
document.getElementById('greeting').innerHTML = "Добрый вечер";
} else {
document.getElementById('greeting').innerHTML = "Доброй ночи";
};


} else if (this.value === 'en') {
document.getElementById('lg').innerHTML = "Language";
document.getElementById('dateSet').innerHTML = "Date";
document.getElementById('timeSet').innerHTML = "Time";
document.getElementById('grSet').innerHTML = "Greeting";
document.getElementById('quoSet').innerHTML = "Quote of the day";
document.getElementById('weaSet').innerHTML = "Weather forecast";
document.getElementById('auSet').innerHTML = "Audio player";
document.getElementById('toDoLg').innerHTML = "ToDo List";
document.getElementById('toDoLg1').innerHTML = "ToDo List";
document.getElementById('addToDo').innerHTML = "Add ToDo List";
document.getElementsByName('Placehold')[0].placeholder='[Enter your name]';

if (hours > 6 && hours < 12) {
document.getElementById('greeting').innerHTML = "Good morning";
} else if (hours > 12 && hours < 17) {
document.getElementById('greeting').innerHTML = "Good afternoon";
} else if (hours > 17 && hours < 21) {
document.getElementById('greeting').innerHTML = "Good evening";
} else {
document.getElementById('greeting').innerHTML = "Good night";
};


} 
    });




// Auio player


import playList from '/playList.js';
console.log(playList);





let isPlay = false;

const audio = document.querySelector('audio');

let playNum=0;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
isPlay = true;
}

function pauseAudio() {
  audio.pause();
isPlay = false;
}




const ppBtn = document.querySelector('.play');

function ppAudio() {
if (!isPlay) {
playAudio();
} else {
pauseAudio();
}
}


ppBtn.addEventListener('click', ppAudio);


function toggleBtn() {
if (isPlay) {
ppBtn.classList.add('pause');
} else {
ppBtn.classList.remove('pause');
}
}

ppBtn.addEventListener('click', toggleBtn);


function playNext() {
  if (playNum===3) {
    playNum = 0;
  } else {
  playNum++;
  }
  playAudio();
}


function playPrev() {
  if (playNum===0) {
    playNum = 3;
  } else {
  playNum--;
  }
  playAudio();
}

const plNext = document.querySelector('.play-next');
plNext.addEventListener('click', playNext);

const plPrev = document.querySelector('.play-prev');
plPrev.addEventListener('click', playPrev);

/*
for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
li.classList.add('play-item');
li.textContent = playList[playNum].title;
playListContainer.append(li);
}
*/

createPlaylist();

function createPlaylist() {
  const playListcontainer = document.querySelector('.play-list');
  playList.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListcontainer.append(li);
  })
}



