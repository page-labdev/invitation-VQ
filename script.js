gsap.registerPlugin(ScrollTrigger);

//
// SCENE 1 — ENVELOPE INTRO
//
gsap.fromTo("#scene1 .envelope",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }
);

//
// SCENE 1 → SCENE 2 TRANSITION
//
gsap.to("#scene1 .envelope", {
  scale: 1.4,
  opacity: 0,
  scrollTrigger: {
    trigger: "#scene1",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

//
// LETTER REVEAL
//
gsap.to("#scene2 .letter", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#scene2",
    start: "top 70%",
    end: "top 40%",
    scrub: true
  }
});

//
// EXPERIENCE SECTION
//
gsap.to("#scene3 .experience", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#scene3",
    start: "top 70%",
    end: "top 40%",
    scrub: true
  }
});

//
// FINAL CTA
//
gsap.to("#scene4 .cta", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#scene4",
    start: "top 80%",
    end: "top 50%",
    scrub: true
  }
});
