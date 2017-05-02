"use strict";

const colors = [];
colors[-1] = 'green';
colors[1] = 'black';
let colorFlag = 1;

const heading = document.getElementById('myHeading');
const button = document.querySelector('#myButton');
const myTextInput = document.querySelector('#myTextInput');
// const purpleList = document.getElementsByTagName('li');
const purpleList = document.querySelectorAll('li');
const evens = document.querySelectorAll('li:nth-child(even)');
const title = document.querySelector('[title=MyTitle]');


button.addEventListener('click', () => {
    // colorFlag = -colorFlag;
    // heading.style.color = colors[colorFlag];

    // When receiving an invalid color the color
    // of the heading remains unchanged
    heading.style.color = myTextInput.value;
});

for (const item of purpleList) {
    item.style.color = 'purple';
}

for (const even of evens) {
    even.style.backgroundColor = 'lightgray';
}


// const navLinks = document.querySelector('nav').querySelectorAll('li');
// const navLinks = document.querySelector('nav').querySelectorAll('');
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    console.log('setting color');
    link.style.backgroundColor = 'pink';
}
/*
 const links = nav.querySelectorAll('li');
 textContent
 innerHTML
 className
 node.style
 document.createElement
 node.appendChild
 node.removeChild
 querySelector('li:last-child')
 EventTarget.addEventListener
 event bubbling
 addEventListener('click', (event) => {})
 event.target
 event.target.tagName -> NAME IN CAPS!
 element.parentNode node|element?
 element.removeChild()
*/
