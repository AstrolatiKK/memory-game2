const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  console.log('i was clicked!');
  console.log(this);
  this.classList.toggle('flip');
}

cards.forEach((card) => {
  card.addEventListener('click',flipCard);
});
