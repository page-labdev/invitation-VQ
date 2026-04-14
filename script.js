gsap.registerPlugin(ScrollTrigger);

/* =========================
   MASTER SCROLL TIMELINE
========================= */

const master = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

/* =========================
   SCENE 1 - ENVELOPE INTRO
========================= */

master.fromTo(".envelope",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, ease: "power3.out", duration: 1 }
);

master.to(".envelope", {
  scale: 1.4,
  opacity: 0,
  ease: "power4.inOut"
});

/* =========================
   SCENE 2 - LETTER REVEAL
========================= */

master.to(".letter-text", {
  opacity: 1,
  y: 0,
  ease: "expo.out"
});

/* =========================
   SCENE 3 - EXPERIENCE
========================= */

master.to(".experience", {
  opacity: 1,
  y: 0,
  ease: "power3.out"
});

/* =========================
   SCENE 4 - CTA
========================= */

master.to(".cta", {
  opacity: 1,
  y: 0,
  ease: "power4.out"
});
