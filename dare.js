/*paragraph about the interogation*/
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var joeElements = document.querySelectorAll('.joe');
  joeElements.forEach(function (joeElement) {
    if (isElementInViewport(joeElement)) {
      joeElement.classList.add('fade-in');
    } else {
      joeElement.classList.remove('fade-in');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();

/*Initial Police Interrogation*/
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var fadeElements = document.querySelectorAll('.fade-in-text');
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeElements[i].classList.add('fade-in');
      } else {
        fadeElements[i].classList.remove('fade-in');
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll();

  window.addEventListener("load", () => {
    const videoTitle = document.getElementById("videoTitle");
    videoTitle.style.opacity = 1;
  });
  
  /*First Custom Button*/
  function addRippleEffect(event) {
    const button = event.target;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const posX = event.clientX - button.getBoundingClientRect().left - radius;
    const posY = event.clientY - button.getBoundingClientRect().top - radius;
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${posX}px`;
    ripple.style.top = `${posY}px`;
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".custom-button");
    buttons.forEach((button) => {
      button.addEventListener("click", addRippleEffect);
    });
  });

  /*second button*/
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".newsbutton");
  
    function handleScroll() {
      const buttonRect = button.getBoundingClientRect();
      if (buttonRect.top < window.innerHeight && button.classList.contains("hide")) {
        button.classList.remove("hide");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
  });