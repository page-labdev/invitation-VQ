gsap.registerPlugin(ScrollTrigger);

/* =========================
   MASTER TIMELINE ENGINE
========================= */

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

/* =========================
   SCENE 1 → ENVELOPE INTRO
========================= */

tl.fromTo("#s1 .envelope",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
);

/* envelope fade + transition */
tl.to("#s1 .envelope", {
  scale: 1.4,
  opacity: 0,
  ease: "power4.inOut"
});

/* =========================
   SCENE 2 → LETTER REVEAL
========================= */

tl.to("#s2 .letter", {
  opacity: 1,
  y: 0,
  ease: "expo.out"
});

/* paper depth motion */
tl.from("#s2 .paper", {
  scale: 1.2,
  opacity: 0
}, "<");

/* =========================
   SCENE 3 → EXPERIENCE
========================= */

tl.to("#s3 .experience", {
  opacity: 1,
  y: 0,
  ease: "power3.out"
});

/* =========================
   SCENE 4 → IMMERSION */
========================= */

tl.to("#s4 .immersive", {
  opacity: 1,
  y: 0,
  ease: "power2.out"
});

/* =========================
   SCENE 5 → CTA FINAL */
========================= */

tl.to("#s5 .cta", {
  opacity: 1,
  y: 0,
  ease: "power4.out"
});
