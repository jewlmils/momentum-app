// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    // Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';
    // 12hr Format
    hour = hour % 12 || 12;
    // Output the time
    time.innerHTML = `${hour}:${addZero(min)} ${amPM}`;
}

setInterval(showTime, 1000);

// Add Zeros 
function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// Set Background and Greeting
function setBgGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour >= 5) {
        // Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = "Good Morning";
    } else if (hour > 16) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        // Evening
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }
}

// Set Name
function setName(ev) {
    if (ev.type === 'keypress') {
        // Make sure Enter is pressed
        if (ev.which == 13 || ev.keyCode == 13) {
            localStorage.setItem('name', ev.target.innerText);
            name.blur(); // to unfocus the typing area and not going to new line
        }
    } else {
        localStorage.setItem('name', ev.target.innerText);
    }
}

// Set focus
function setFocus(ev) {
    if (ev.type === 'keypress') {
        // Make sure Enter is pressed
        if (ev.which == 13 || ev.keyCode == 13) {
            localStorage.setItem('focus', ev.target.innerText);
            focus.blur(); // to unfocus the typing area and not going to new line
        }
    } else {
        localStorage.setItem('focus', ev.target.innerText);
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreeting();
getName();
getFocus();