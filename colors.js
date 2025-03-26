document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");

    function generateColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function applyColor() {
        var selectedColor = generateColor(); // Generate a new color
        squares.forEach(square => {
            square.style.backgroundColor = selectedColor;
        });
    }

    applyColor(); // Apply color when page loads

    // Automatically change colors every 5 seconds (5000ms)
    setInterval(applyColor, 5000);
});
