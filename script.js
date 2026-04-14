// ===== BELLEAME ANIMATION ENGINE =====

// 1. SECTION TIMELINE CONTROLLER
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-active');
    }
  });
}, {
  threshold: 0.35
});

sections.forEach(sec => observer.observe(sec));


// 2. LETTER SPLIT SYSTEM (IMPORTANT for luxury feel)
function splitText(){
  document.querySelectorAll('.reveal-text').forEach(el=>{
    const text = el.innerText;
    el.innerHTML = '';

    [...text].forEach((char, i)=>{
      const span = document.createElement('span');
      span.innerText = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = (i * 0.04) + 's';
      el.appendChild(span);
    });
  });
}

// run once on load
splitText();


// 3. ENVELOPE → UNLOCK TIMELINE
const envelope = document.querySelector('.envelope');

function openEnvelope(){
  envelope.classList.add('open');

  // delay entrance like cinematic reveal
  setTimeout(()=>{
    document.body.classList.add('unlocked');
  }, 1200);
}


// 4. OPTIONAL: SCROLL FREEZE UNTIL OPEN
document.body.style.overflow = 'hidden';

envelope.addEventListener('click', ()=>{
  openEnvelope();
  setTimeout(()=>{
    document.body.style.overflow = 'auto';
  }, 1200);
});
