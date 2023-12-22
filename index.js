if (performance.getEntriesByType("navigation")[0].type === "reload") {

    // Player 1's Dice
    let randomNumber1 = Math.floor((Math.random() * 6) + 1);
    let randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);


    // Player 2's Dice
    let randomNumber2 = Math.floor((Math.random() * 6) + 1);
    let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);


    // Match Result
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!"
    }

}