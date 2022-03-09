/**
 * create an array of words in wordArray.js
 * take a random word in array
 * allow letters' selection
 * verify if selected letter belongs to the word
 * count the number of failure (lives)
 * check if game over
 * check if word has been found
 * -------------------------------------------------------------------- GO FURTHER
 * keep in memory all guessed letter
 * only let the player guess a letter once
 * add an image for each step
 * check keayboard recognition
 */



const ulWord = document.getElementById('ul_word');
const btn = document.getElementById('new_word');


// CHOOSE A RANDOM WORD
let actual_word = words[Math.floor(Math.random() * words.length)];
console.log(`actual word: ${actual_word}`);


// CLICK => CHANGE WORD
btn.addEventListener('click', (actual_word) => {
    // actual_word = words[Math.floor(Math.random() * words.length)];
    // console.log(`actual word: ${actual_word}`);
    // return actual_word;

    document. location. reload();
});


// SPLIT RANDOM WORD IN ARRAY OF LETTERS
// MAP ARRAY IN OBJECT WITH LETTER & VISIBLE PROPERTIES
let mappingLetter = (word) => {
    const split_word = word.split('');
    console.log(`letter array: ${split_word}`);

    let lettersToMap = split_word.map((letter) => {
        return /*isMapped =*/{
            letter,
            visible: false
        } 
    });
    return lettersToMap;
};

let mapLetter = mappingLetter(actual_word);
console.log(mapLetter); // notation: console.log(`map letter: ${mapLetter}`) renvoie [object object]


// DISPLAY ALL LETTER AS A LIST
let displayrandomWord = (mapL) => {
    // console.log('displayrandomWord function is ok');

    mapL.forEach(element => {
        // console.log(element);

        if(element.visible === true){
            // console.log(element.visible);

            let li = document.createElement('li');
            li.setAttribute('class', 'Letterslist');
            ulWord.appendChild(li);
            li.textContent = element.letter;
        }else{
            let li = document.createElement('li');
            li.setAttribute('class', 'Letterslist');
            ulWord.appendChild(li);
            li.textContent = '_';
        }
    });
};

let wordIsDisplayed = displayrandomWord(mapLetter);


// CREATE KEYBOARD

// créer clavier virtuel
//  - liste de chaque lettre
//  - display liste
//  - permettre le click + action

