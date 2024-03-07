export function Reveal() {
  const ratio = 0.1;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  const handleIntersect = (entries: any[], observer: any) => {
    entries.forEach(
      (entry: {
        IntersectionRatio: number;
        target: { classList: { add: (arg0: string) => void } };
      }) => {
        if (entry.IntersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      }
    );
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  
  observer.observe(document.querySelector(".reveal")!);
}
