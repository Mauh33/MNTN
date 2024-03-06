let progressBloc = document.querySelector(".progress-bloc");

function calculateScrollPercentage() {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let fullHeight = document.body.clientHeight;

  const percentageScrolled = (scrollTop / (fullHeight - windowHeight)) * 100;

  return percentageScrolled;
}

window.addEventListener("scroll", function () {
  let scrollPercentage = calculateScrollPercentage();
  console.log(
    "pourcentage de scroll par rapport à la hauteur de la page",
    scrollPercentage
  );
  return scrollPercentage;
});

document.querySelectorAll(".progress-bloc a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".progress-bloc a").forEach(element => {
      element.classList.remove("active");
    });

    this.classList.add("active");

    let index = Array.from(this.parentNode.children).indexOf(this);

    progressBloc.classList.remove("active", "one", "two", "three", "four");

    if (index === 0 || scrollPercentage <= 24) {
      progressBloc.classList.add("active", "one");
    } else if (index === 1 || scrollPercentage <= 49) {
      progressBloc.classList.add("active", "two");
    } else if (index === 2 || scrollPercentage <= 74) {
      progressBloc.classList.add("active", "three");
    } else if (index === 3 || scrollPercentage <= 99) {
      progressBloc.classList.add("active", "four");
    }

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

function animateProgressbar() {}
