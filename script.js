$(document).ready(function () {

    alert("Click on your favorite letter...")
    const fonts = [
        `"Geologica", sans-serif`,
        `"UnifrakturMaguntia", cursive`,
        `"Festive", cursive`,
        `"Sue Ellen Francisco", cursive`,
        `"Oxanium", sans-serif`,
        `"Kablammo", system-ui`,
        `"Newsreader", serif`,
        `"Libertinus Keyboard", system-ui`,
        `"Rubik Glitch", system-ui`,
        `"Bungee Shade", sans-serif`,
        `"Caesar Dressing", system-ui`,
        `"Press Start 2P", system-ui`,
        `"Fruktur", system-ui;`,
        `"Nabla", system-ui;`,
        `"Plaster", system-ui`,
        `"Nosifer", sans-serif`,
        `"Rubik Puddles", system-ui`,
        `"Danfo", serif;`,
        `"Princess Sofia", cursive;`,
        `"Monoton", sans-serif`
    ];

    $('span').click(function() {

        $('.chosen').removeClass('chosen')
        $(this).addClass('chosen')

        // loop through all spans except the one clicked
        $('span').not(this).each(function () {
            let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            $(this).css("font-family", randomFont);
        });
    });
});


