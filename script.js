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

    showCard(index);
});




document.addEventListener('DOMContentLoaded', function() {
    const artikelButton = document.querySelector('.artikel-button');
    const konsultasiButton = document.querySelector('.konsultasi-button');
    const addFileSection = document.querySelector('#addFile');
    const konsultasiSection = document.querySelector('#konsultasi');

    // Fungsi untuk menampilkan bagian tertentu dan menyembunyikan yang lain
    function toggleSections(showSection, hideSection) {
        showSection.style.display = 'block';
        hideSection.style.display = 'none';
    }

    artikelButton.addEventListener('click', function() {
        toggleSections(addFileSection, konsultasiSection);
    });

    konsultasiButton.addEventListener('click', function() {
        toggleSections(konsultasiSection, addFileSection);
    });
});

