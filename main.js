const progressBloc = document.querySelector(".progress-bloc");
const progressionAnchors = document.querySelectorAll(".progress-bloc a");

function calculateScrollPercentage() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;
  const visibleHeight = fullHeight - windowHeight;
  const percentageScrolled = 100 * (scrollTop / visibleHeight);
  return percentageScrolled;
}

function animateProgression(scrollPercentage) {
  progressBloc.classList.remove("active", "one", "two", "three", "four");

  if (scrollPercentage <= 25) {
    progressBloc.classList.add("active", "one");
  } else if (scrollPercentage <= 50) {
    progressBloc.classList.add("active", "two");
  } else if (scrollPercentage <= 75) {
    progressBloc.classList.add("active", "three");
  } else {
    progressBloc.classList.add("active", "four");
  }
}

window.addEventListener("scroll", function () {
  const scrollPercentage = calculateScrollPercentage();
  animateProgression(scrollPercentage);
});

progressionAnchors.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    progressionAnchors.forEach(element => {
      element.classList.remove("active");
    });

    this.classList.add("active");

    let index = Array.from(this.parentNode.children).indexOf(this);
    console.log("index", index);

    animateProgression(index * 25);

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
