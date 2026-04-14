gsap.registerPlugin(ScrollTrigger);

//
// MASTER SCENE ENGINE
//
const scenes = gsap.utils.toArray(".scene");

scenes.forEach((scene, i) => {

  gsap.fromTo(scene,
    {
      opacity: 0,
      scale: 0.98
    },
    {
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scene,
        start: "top 80%",
        end: "top 20%",
        scrub: true
      }
    }
  );

});

//
// ENVELOPE ZOOM EFFECT
//
gsap.to(".envelope", {
  scale: 1.3,
  opacity: 0,
  scrollTrigger: {
    trigger: "#s1",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

//
// LETTER REVEAL
//
gsap.from(".letter", {
  y: 80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#s2",
    start: "top 70%",
    scrub: true
  }
});

//
// EXPERIENCE TEXT
//
gsap.from(".experience", {
  y: 60,
  opacity: 0,
  scrollTrigger: {
    trigger: "#s3",
    start: "top 70%",
    scrub: true
  }
});
