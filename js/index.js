const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

card1.addEventListener('click', () => {
    card1.classList.toggle('card-flip');
});
card2.addEventListener('click', () => {
    card2.classList.toggle('card-flip');
});
card3.addEventListener('click', () => {
    card3.classList.toggle('card-flip');
});