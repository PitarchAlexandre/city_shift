/**
 * @author  Alexandre Pitarch
 * @version 1.2
 * @since   2024-04-11
 */

'use strict';

// Declaration of variables
const checkDayNight = document.querySelector('#checkDayNight');
const windows = document.getElementsByClassName('window');
const person = document.querySelector('#person');
const building = document.getElementsByClassName('building');
const sky = document.querySelector('#sky');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const crescent = document.querySelector('#crescent');
const ground = document.querySelector('#ground');

// All of these functions are triggered when the toggle is clicked
checkDayNight.addEventListener('click', (e) => {
    skyNight();
    groundNight();
    turnLightOnOff();
    changeBuildingColor();
    movePerson();
    sunsetFun();
});

function turnLightOnOff() {
    for (let i = 0; i < windows.length; i++) {
        if (checkDayNight.checked === true) {
            windows[i].style.transition = '2s';
            turnLightYellowBlue();
            setTimeout(() => turnLightOff(windows[9]), 2600);
            setTimeout(() => turnLightOff(windows[3]), 3500);
            setTimeout(() => turnLightOff(windows[13]), 5800);
            setTimeout(() => turnLightOff(windows[21]), 6500);
            setTimeout(() => turnLightOff(windows[19]), 8000);
            setTimeout(() => turnLightOff(windows[24]), 9200);
        } else {
            turnLightYellowBlue();
            turnLightOff(windows[9]);
            turnLightOff(windows[5]);
            turnLightOff(windows[13]);
            turnLightOff(windows[21]);
            turnLightOff(windows[19]);
            turnLightOff(windows[24]);
            // windows[i].style.backgroundColor = '#ADD8E6';
        }
    }
};

// Changes the building color at dusk
function changeBuildingColor() {
    for (let i = 0; i < building.length; i++) {
        building[i].style.transition = '1.5s';
        if (checkDayNight.checked === true) {
            building[i].style.backgroundColor = '#3A454B';
        } else {
            building[i].style.backgroundColor = '#ebebec';
        }
    }
};

// Moves the person
function movePerson() {
    person.style.transition = '1.5s';
    if (checkDayNight.checked === true) {
        person.style.transform = 'translateX(10px)';
    } else {
        person.style.transform = 'translateX(0px)';
    }
};

// Changes the sky color when the button is clicked
// --> DAY / NIGHT for the sky
function skyNight() {
    sky.style.transition = '1.5s';
    if (checkDayNight.checked === true) {
        sky.style.backgroundColor = '#3a506b';
    } else {
        sky.style.backgroundColor = '#ABDCFB';
    }
};

// Moves the sun and transforms it into the moon
function sunsetFun() {
    sun.style.transition = '2.5s';
    moon.style.transition = '2.5s';
    crescent.style.transition = '2.5s';
    if (checkDayNight.checked === true) {
        sun.style.transform = 'translateX(300px) translateY(50px)';
        moon.style.backgroundColor = '#ebecf1';
        crescent.style.backgroundColor = '#3a506b';
        crescent.style.border = '#3a506b';
    } else {
        sun.style.transform = 'translateX(0px)';
        moon.style.backgroundColor = '';
        crescent.style.backgroundColor = '';
    }
};

// Makes the light yellow at nightfall
function turnLightYellowBlue() {
    if (checkDayNight.checked === true) {
        for (let i = 0; i < windows.length; i++) {
            windows[i].style.backgroundColor = 'yellow';
        }
    } else {
        for (let i = 0; i < windows.length; i++) {
            if (i !== 9) {
                windows[i].style.backgroundColor = '#ADD8E6';
            }
        }
    }
};

// Turns off the light of windows at sunset
function turnLightOff(windowElement) {
    if (checkDayNight.checked === true) {
        windowElement.style.transition = '0s';
        windowElement.style.backgroundColor = '#3A454B';
    } else {
        windowElement.style.backgroundColor = 'yellow';
        setTimeout(() => windowElement.style.backgroundColor = '#ADD8E6', 550);
    }
};

// Darkens the ground
function groundNight() {
    ground.style.transition = '1.5s';
    if (checkDayNight.checked === true) {
        ground.style.opacity = '0.55';
    } else {
        ground.style.opacity = '1';
    }
};
