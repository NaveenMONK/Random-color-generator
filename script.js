const color = document.querySelector(".color");
const btn = document.querySelector(".generator");


const hex = () => {
  const hexa = Math.random().toString(16).substr(2, 6);
  color.innerHTML = `#${hexa}`;
  document.body.style.backgroundColor = `#${hexa}`;
};


btn.addEventListener("click", hex);

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    hex();
  }
})

hex();