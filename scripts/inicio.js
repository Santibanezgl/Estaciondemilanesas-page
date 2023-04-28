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


const beat = document.querySelector('.fa-instagram');

beat.addEventListener('mouseover', () => {
  beat.classList.add('fa-beat');
});

beat.addEventListener('mouseout', () => {
  beat.classList.remove('fa-beat');
});


const beat2 = document.querySelector('.fa-facebook');

beat2.addEventListener('mouseover', () => {
  beat2.classList.add('fa-beat');
});

beat2.addEventListener('mouseout', () => {
  beat2.classList.remove('fa-beat');
});


if (window.matchMedia("(min-width: 1280px) and (max-width: 1439px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1500) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}