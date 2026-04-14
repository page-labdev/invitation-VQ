const envelope = document.getElementById('envelope');

envelope.onclick = () => {
  envelope.classList.add('open');

  setTimeout(()=>{
    document.querySelector('.content').classList.add('show');
  },800);
};
