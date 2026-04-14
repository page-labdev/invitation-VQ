const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scenes.forEach(s => s.classList.remove("active"));
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.6
});

scenes.forEach(scene => observer.observe(scene));
