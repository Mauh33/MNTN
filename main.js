document.querySelectorAll(".progress-bloc a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".progress-bloc a").forEach(element => {
      element.classList.remove("active");
    });

    this.classList.add("active");

    let index = Array.from(this.parentNode.children).indexOf(this);

    let progressBloc = document.querySelector(".progress-bloc");
    progressBloc.classList.remove("active", "one", "two", "three", "four");

    if (index === 0) {
      progressBloc.classList.add("active", "one");
    } else if (index === 1) {
      progressBloc.classList.add("active", "two");
    } else if (index === 2) {
      progressBloc.classList.add("active", "three");
    } else if (index === 3) {
      progressBloc.classList.add("active", "four");
    }

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
