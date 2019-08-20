// DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Update time
function show_time() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12 hour format
    // hour = hour % 12 || 12;

    // Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(show_time, 1000); // update every second = 1000ms
}

// Add zero to clock to fix small error
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Set background and greeting
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../assets/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning,';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../assets/afternoon.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon,';
        document.body.style.color = '#fff';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../assets/night.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening,';
        document.body.style.color = '#fff';
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

function setName(e) {
    if (e.type === 'keypress') {
        // Make sure <enter> is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure <enter> is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Add event listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
show_time();
setBgGreet();
getName();