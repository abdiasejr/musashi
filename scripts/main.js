const myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let mySpans = document.querySelectorAll('span');

function changeName() {
  let myName = myHeading.textContent;
  

  if(myName === "Miyamoto Musashi") {
    myHeading.textContent = "Takezo Shinmen";
    for(let span of mySpans) {
      span.textContent = "Takezo Shinmen";
    }
  } else {
    myHeading.textContent = "Miyamoto Musashi";
    for(let span of mySpans) {
      span.textContent = "Miyamoto Musashi";
    }
  }

}

function changeImage() {
  const mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/musashi.jpg') {
    myImage.setAttribute('src', 'images/takezo-shinmen.jpg');
    myImage.setAttribute('alt', "Takezo cover of Blood");
  } else {
    myImage.setAttribute('src', 'images/musashi.jpg');
    myImage.setAttribute('alt', 'Musashi Praying');
  }
}



myImage.onclick = () => {
  changeImage();
  changeName();
}
myButton.onclick = () => {
  changeName();
  changeImage();
}
