export function Reveal() {
  const ratio = 0.1;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  const handleIntersect = (entries: any[], observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.IntersectionRatio > ratio) {
        console.log("entry.IntersectionRatio : ", entry.IntersectionRatio);
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll(".reveal")!.forEach((e) => {
    observer.observe(e);
  });
}
