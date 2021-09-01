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
        //verifico che il numero inserito sia effettivamente compreso tra 1 e 5
        if (userNumber < 1 || userNumber > 5) {
            alert("Attenzione! Devi inserire un numero da 1 a 5!")
        } else {
            //raccolgo la scelta dell'utente tra pari e dispari
            var userChoice = document.getElementById("even_odd").value;
            //genero il numero per il computer
            var cpuScore = randomNumber(1, 5);
            //sommo i due numeri
            var sumToCheck = cpuScore + userNumber;
            //verifico le condizioni di vittoria o di sconfitta e stampo un alert
            if(userChoice == "even" && isEven(sumToCheck)) {
                alert("Hai vinto! Il risultato è " + sumToCheck);
            } else if(userChoice == "odd" && !isEven(sumToCheck)) {
                alert("Hai vinto! Il risultato è " + sumToCheck);
            } else {
                alert("Hai perso. Il risultato è " + sumToCheck)
            }
        }
    }
)