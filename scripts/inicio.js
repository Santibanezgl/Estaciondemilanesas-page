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

/* MENSAJE AMIGOS SEGUN PANTALLA */

/* MENSAJE AMIGOS SEGUN PANTALLA */
if (window.matchMedia("(min-width: 280px) and (max-width: 767px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1850) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}

if (window.matchMedia("(min-width: 768px) and (max-width: 949px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 2300) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}

if (window.matchMedia("(min-width: 950px) and (max-width: 1023px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 2150) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}


if (window.matchMedia("(min-width: 1024px) and (max-width: 1279px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 2750) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}

if (window.matchMedia("(min-width: 1280px) and (max-width: 1359px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1800) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}

if (window.matchMedia("(min-width: 1360px) and (max-width: 1439px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1850) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}

if (window.matchMedia("(min-width: 1440px) and (max-width: 1600px)").matches) {
  const messageAmigos = document.querySelector('.mensajeamigos');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1930) {
    messageAmigos.classList.add('show');
  } else {
    messageAmigos.classList.remove('show');
  }
});
}



function actualizarFooter() {
  const footerpc = document.querySelector('.footerpc');
  const footercelu = document.querySelector('.footercelu');
  const  cajaboton = document.querySelector('.cajaboton');

  if (window.matchMedia("(min-width: 280px) and (max-width: 1023px)").matches) {
    footerpc.classList.add('ocultar');
    footerpc.classList.remove('mostrar');
    footercelu.classList.add('mostrar');
    footercelu.classList.remove('ocultar');
   cajaboton.classList.add('mostrar');
   cajaboton.classList.remove('ocultar');
  } else {
    footerpc.classList.add('mostrar');
    footerpc.classList.remove('ocultar');
    footercelu.classList.add('ocultar');
    footercelu.classList.remove('mostrar');
    cajaboton.classList.add('ocultar');
    cajaboton.classList.remove('mostrar');
  }
}

actualizarFooter();

window.addEventListener('resize', actualizarFooter); 