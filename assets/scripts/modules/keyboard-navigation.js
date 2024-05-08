/* Keyboard Events
---------------------------------------------------------------------------- */

const addKeyboardEvents = () => {
  const sections = document.querySelectorAll("main > section");
  const lis = document.querySelectorAll("main > section > ul > li");
  let currentSection = 0;
  let currentLi = 0;

  const jump = (direction) => {
    if (direction === "up" && currentSection > 0) {
      currentSection--;
    }

    if (direction === "down" && currentSection < sections.length - 1) {
      currentSection++;
    }

    if (direction === "right" && currentLi > 0) {
      currentLi--;
    }

    if (direction === "left" && currentLi < lis.length - 1) {
      currentLi++;
    }

    lis[currentLi].scrollIntoView({ behavior: "smooth" });
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  };

  document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        console.log("Up Arrow key pressed");
        jump("up");
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        console.log("Down Arrow key pressed");
        jump("down");
    }
    
    if (sections[currentSection].id === "atmosphere") {
        console.log("Image strip section is in view");
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            event.stopPropagation();
            console.log("Left Arrow key pressed");
            jump("left");
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            event.stopPropagation();
            console.log("Right Arrow key pressed");
            jump("right");
        }
    }
  });
};

/* Exports
############################################################################ */

export { addKeyboardEvents };
