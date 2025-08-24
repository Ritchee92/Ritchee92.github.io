document.getElementById('theme').addEventListener('change', function () {
    const selectedTheme = this.value;
    const root = document.documentElement;

    if (selectedTheme === 'space') {
        root.style.backgroundImage = "radial-gradient(#000421, #110527, #340732)";
        root.style.fontFamily = 'Space Mono', 'initial';
    } else if (selectedTheme === 'mountain') {
        root.style.backgroundImage = "linear-gradient(#FF8c42 0%, #4CAF50 50%, #87CEEB 100%)";
        root.style.fontFamily ='Edu NSW ACT Cursive', 'initial';
    } else if (selectedTheme === "") {
        root.style.backgroundImage = 'linear-gradient(rgb(32, 49, 202), rgb(20, 181, 235), rgb(114, 201, 228))';
        root.style.backgroundRepeat = 'no-repeat';
        root.style.backgroundSize = 'cover';
        root.style.color = 'rgb(255, 255, 255)';
        root.style.fontFamily = 'initial';
    }
});
