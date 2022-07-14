'use strict'

const elements = {
  form: document.getElementById('form'),
  msgCotizacion: document.getElementById('msgCotizacion'),
  msgDescuento: document.getElementById('msgDescuento'),
  msgElement: document.getElementById('elementMsg'),
  cotizacionDiv: document.getElementById('cotizacion'),
  login: document.getElementById('login')
}
const { form, msgCotizacion, msgDescuento, msgElement, cotizacionDiv, login } = elements;
const p = document.createElement('p');


const aparecerCot = (value, ...elements) => {
  let i = value * 2500;
  p.innerHTML = `$ ${i} Mensuales`;
  p.style.fontWeight = "bold";
  p.style.fontSize = "1.3rem"
  elements[0].insertBefore(p, msgElement);
  elements[0].classList.add('visible')
  elements[1].classList.add('visible');
  cotizacionDiv.classList.remove('invisible');
  cotizacionDiv.classList.add('visible');
}
form.addEventListener('submit', e => {
  e.preventDefault();
  let vObjective = e.target.houses.value
  !vObjective ? '' : aparecerCot(vObjective, msgCotizacion, msgDescuento)
  form.reset()
})