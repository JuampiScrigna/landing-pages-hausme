'use strict'

const elementos = {
  conHausme: document.getElementById('withHausme'),
  sinHausme: document.getElementById('withoutHausme'),
}


const { conHausme, sinHausme } = elementos;

const change = (element1,element2,...elements) => {
  element1.style.backgroundColor = elements[0]
  element2.style.backgroundColor = elements[1]
  element1.style.color = elements[2]
  element2.style.color = elements[3]
}

sinHausme.addEventListener('click', () => {
  change(sinHausme,conHausme,'#3b0c88','#fff','#fff'," #676767")
})

conHausme.addEventListener('click', () => {
  change(conHausme,sinHausme,'#3b0c88','#fff','#fff'," #676767")
})
