getElements();


function playSound(selector) {
  let audio;

  //play sound depending on the class name
  //of the selector
  if (selector.className == "w drum") {
      audio = new Audio('sounds/tom-1.mp3');
  }
  if (selector.className == "a drum") {
    audio = new Audio('sounds/tom-2.mp3');
  }

  if (selector.className == "s drum") {
    audio = new Audio('sounds/tom-3.mp3');
  }

  if (selector.className == "d drum") {
    audio = new Audio('sounds/tom-4.mp3');
  }

  if (selector.className == "j drum") {
    audio = new Audio('sounds/crash.mp3');
  }

  if (selector.className == "k drum") {
    audio = new Audio('sounds/kick-bass.mp3');
  }

  if (selector.className == "l drum") {
    audio = new Audio('sounds/snare.mp3');
  }

  audio.play();
}

function highlightElement(selector) {
  //@credit https://stackoverflow.com/a/5092872 for the random colour generation 
  let randomColour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  document.getElementById(selector).style.color = randomColour;
}

// get elements
function getElements() {
  let elements = document.querySelectorAll("button");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
      playSound(elements[i]);
      highlightElement(elements[i].id);
    });
  }
}
