function playRound(userChoice) {
    var choices = ['rock', 'paper', 'scissors', 'lizards', 'spock'];
    var computerChoice = choices[Math.floor(Math.random() * 5)];

    var result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`;
    
    // Get the image element
    var resultImage = document.getElementById('result-image');

    // Call the displayResult function to handle the image and background color
    displayResult(result, resultImage);
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && (computer === 'scissors' || computer === 'lizards')) ||
        (user === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (user === 'scissors' && (computer === 'paper' || computer === 'lizards')) ||
        (user === 'lizards' && (computer === 'paper' || computer === 'spock')) ||
        (user === 'spock' && (computer === 'rock' || computer === 'scissors'))
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(result, resultImage) {
    // Update the background color and image source based on the result
    if (result.includes('tie')) {
        resultImage.src = 'tie.jpg';
        document.body.style.backgroundColor = 'yellow';
    } else if (result.includes('win')) {
        resultImage.src = 'win.jpeg';
        document.body.style.backgroundColor = 'green';
    } else {
        resultImage.src = 'lose.jpg';
        document.body.style.backgroundColor = 'red';
    }
}
