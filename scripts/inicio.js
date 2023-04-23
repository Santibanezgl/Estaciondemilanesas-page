 const message = document.querySelector('.mensajemila');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    message.classList.add('show');
  } else {
    message.classList.remove('show');
  }
});


const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1420) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});