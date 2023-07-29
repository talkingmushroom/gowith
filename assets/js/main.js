const moBtn = document.getElementById('moBtn');
const header = document.querySelector('header');
moBtn.addEventListener('click', () => {
  header.classList.toggle('on');
});
