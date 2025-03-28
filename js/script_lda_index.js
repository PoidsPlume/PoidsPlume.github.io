document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu li');
    const contentDiv = document.getElementById('content');

    function loadContent(year) {
        fetch(`LDA/LDA_${year}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            menuItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            menuItems.forEach(item => {
                if (!item.classList.contains('active')) {
                    item.classList.add('inactive');
                }
            });
            loadContent(year);
        });
    });

    // Charger le contenu par défaut pour 2019
    loadContent(2019);
});
