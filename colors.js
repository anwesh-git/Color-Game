document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");

    function generateColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function applyColors() {
        squares.forEach(square => {
            square.style.backgroundColor = generateColor(); // Assign different random color to each square
        });
    }

    applyColors(); // Apply colors when the page loads

    // Automatically change colors every 5 seconds (5000ms)
    setInterval(applyColors, 5000);
});
