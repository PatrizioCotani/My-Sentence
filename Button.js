document.addEventListener('DOMContentLoaded', function() {
    var aboutButton = document.getElementById('about-button');

    aboutButton.addEventListener('click', function() {
        var message = "Hi, my name is Patrizio Cotani, I am 25 and one day I'll play in Serie A";
        alert(message);
    });
});