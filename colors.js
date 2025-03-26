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
            square.style.backgroundColor = generateColor(); // Assign a unique color to each box
        });
    }

    applyColors(); // Apply unique colors when the page loads

    setInterval(applyColors, 1000); // Change colors every 1 seconds
});
