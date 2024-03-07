const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.IntersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

//console.log(document.querySelector(".reveal"));
observer.observe(document.querySelector(".reveal"));
