document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let index = 0;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    function nextCard() {
        index = (index === cards.length - 1) ? 0 : index + 1;
        showCard(index);
    }

    function prevCard() {
        index = (index === 0) ? cards.length - 1 : index - 1;
        showCard(index);
    }

    document.querySelector('.next-btn').addEventListener('click', nextCard);
    document.querySelector('.prev-btn').addEventListener('click', prevCard);
});
