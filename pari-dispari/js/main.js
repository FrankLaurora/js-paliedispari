var btnPlay = document.getElementById("send_challenge");

//genero una funzione che restituisca un numero tra due valori, compresi i due valori.
function randomNumber(x, y) {
    var randomScore = Math.floor((Math.random() * (y - x + 1)) + x);

    return randomScore;
}

//genero una funzione che stabilisca se un numero è pari o dispari e restituisca l'appropriato valore booleano
function isEven(x) {
    if(x % 2 == 0){
        return true;
    }
    
    return false;
}

btnPlay.addEventListener("click", 
    function() {
        //raccolgo l'input dell'utente e lo converto in numero
        var userNumber = parseInt(document.getElementById("user_number").value);
        //raccolgo la scelta dell'utente tra pari e dispari
        var userChoice = document.getElementById("even_odd").value;

        var cpuScore = randomNumber(1, 5);

        var sumToCheck = cpuScore + userNumber;

        if(userChoice == "even" && isEven(sumToCheck)) {
            alert("Hai vinto! Il risultato è " + sumToCheck);
        } else if(userChoice == "odd" && !isEven(sumToCheck)) {
            alert("Hai vinto! Il risultato è " + sumToCheck);
        } else {
            alert("Hai perso. Il risultato è " + sumToCheck)
        }
    }
)