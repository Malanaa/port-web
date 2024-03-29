const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});

window.addEventListener('scroll', function() {
    var image = document.getElementById('syedimg');
    var scrollPosition = window.scrollY;

    // Adjust scale based on scroll position
    var scale = 1 + scrollPosition * -0.0001;

    // Apply the scale transformation
    image.style.transform = 'scale(' + scale + ')';
});
