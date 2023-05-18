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
  
  
  
  
  
  
  