clickSnd = document.getElementById("start-button");
let playerClickSnd = new Audio("assets/sounds/ding.wav");
$(clickSnd).click(function() {
    playerClickSnd.play();
});

