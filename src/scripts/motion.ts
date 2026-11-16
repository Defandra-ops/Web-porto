import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | undefined;
const tickLenis = (time: number) => lenis?.raf(time * 1000);

function setupMotion() {
  gsap.ticker.remove(tickLenis);
  lenis?.destroy();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf(".marquee-track, .brutal-reveal, .section-heading");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(tickLenis);
  gsap.ticker.lagSmoothing(0);

  gsap.utils.toArray<HTMLElement>(".brutal-reveal").forEach((element) => {
    gsap.fromTo(
      element,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      },
    );
  });

  gsap.to(".marquee-track", {
    xPercent: -18,
    ease: "none",
    scrollTrigger: {
      trigger: ".marquee-wrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
    },
  });
}

document.addEventListener("astro:page-load", setupMotion);
document.addEventListener("astro:before-swap", () => {
  gsap.ticker.remove(tickLenis);
  lenis?.destroy();
  lenis = undefined;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
