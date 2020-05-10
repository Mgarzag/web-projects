let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jack-russell.jpg') {
      myImage.setAttribute ('src','images/boston-terrier.jpg');
    } else {
      myImage.setAttribute ('src','images/jack-russell.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Terriers are great, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Terriers are great, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}