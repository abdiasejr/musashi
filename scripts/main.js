const myImage = document.querySelector('img');
const myIlustration = document.querySelector('li').nextElementSibling.querySelector('a');
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
  const myHref = myIlustration;

  if (mySrc === 'images/musashi.jpg') {
    myImage.setAttribute('src', 'images/takezo-shinmen.jpg');
    myImage.setAttribute('alt', "Takezo cover of Blood");
    myHref.setAttribute('href', "https://i.pinimg.com/564x/0a/da/c2/0adac27497265b407a44e96551363443.jpg");
  } else {
    myImage.setAttribute('src', 'images/musashi.jpg');
    myImage.setAttribute('alt', 'Musashi Praying');
    myHref.setAttribute('href', "https://pm1.aminoapps.com/8119/cb8bd7a34e536c41e5b18510c3741fac67384be6r1-620-672v2_uhq.jpg");
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
