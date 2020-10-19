clickSnd = document.getElementById("start-button");
let playerClickSnd = new Audio("assets/sounds/sound1.wav");
$(clickSnd).click(function() {
    playerClickSnd.play();
});

