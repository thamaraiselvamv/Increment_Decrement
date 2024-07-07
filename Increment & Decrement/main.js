const counter = document.querySelector('.counter');
const countSpan = counter.querySelector('.count');
let count = 0;

counter.addEventListener('click', (e) => {
  if (e.target.classList.contains('increment')) {
    count++;
    countSpan.textContent = count;
  } else if (e.target.classList.contains('decrement')) {
    count--;
    countSpan.textContent = count;
  }
});