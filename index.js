getElements();

function highlightElement(selector) {
  //@credit https://stackoverflow.com/a/5092872 for the random colour generation
  let randomColour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  document.getElementById(selector).style.borderColor  = randomColour;
}

// get elements
function getElements() {
  let elements = document.querySelectorAll(".meow");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
      highlightElement(elements[i].id);
    });
  }
}
