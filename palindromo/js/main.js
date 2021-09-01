var btnCheck = document.getElementById("word_check");

function isPalindrome(userWord) {
    //trasformo la parola in un array
    var userArray = userWord.split("");
    //salvo una copia dell'array e la inverto
    var reverseArray = userArray.slice();
    //inverto l'ordine degli elementi nell'array
    reverseArray.reverse();
    //controllo che l'array inserito e quello invertito, riconvertiti a stringa, siano uguali e restituisco l'appropriato valore booleano
    if(userArray.join("") == reverseArray.join("")) {
        return true;
    } else {
        return false;
    }
};

btnCheck.addEventListener("click",
    function() {
        //raccolgo la parola inserita dall'utente e la converto in minuscolo
        var userWord = (document.getElementById("user_word").value).toLowerCase();
        //controllo che l'input dell'utente non contenga numeri
        for(var i = 0; i <= 9; i++) {
            if(userWord.includes(i)) {
                return alert("Inserisci solo lettere!")
            }
        }
        //eseguo il controllo e genero un alert
        if(isPalindrome(userWord)) {
            alert(userWord + " è un palindromo.")
        } else {
            alert(userWord + " non è un palindromo.")
        }
    }
);

//soluzione col ciclo for
//var reverseWord = "";
// for(var i = userWord.length - 1, i >= 0; i--) {
//     reverseWord += userWord[i];
// }