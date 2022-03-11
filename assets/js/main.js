const ulWord = document.getElementById('ul_word');
const ulKeyboard = document.getElementById('ul_keyboard');
const keyboard = document.getElementById('letters');
const p = document.getElementById('counter');
const img = document.getElementsByTagName('img')[0];
const btn = document.getElementById('new_word');
const btn_menu = document.getElementById('menu');

// console.log(p);
// console.log(img);

let keyboard_letters = [];
let already_used = ['5'];
let count = 0, countImg = -1, countCanvas = 0, countLetter = 0;

p.textContent = `${count} / 7`;


// CHOOSE A RANDOM WORD
let rd_word = words[Math.floor(Math.random() * words.length)];
let actual_word = rd_word.toUpperCase();
console.log(`actual word: ${actual_word}`);
console.log(actual_word.length);


// SPLIT RANDOM WORD IN ARRAY OF LETTERS
// MAP ARRAY IN OBJECT WITH LETTER & VISIBLE PROPERTIES
let mapLetter = mappingLetter(actual_word);
console.log(mapLetter); // notation: console.log(`map letter: ${mapLetter}`) renvoie [object object]


// DISPLAY WORD'S LETTERS AS A LIST
let wordIsDisplayed = displayrandomWord(mapLetter);


// CREATE KEYBOARD
let keyboard_created = createKeyboard();


// MAP KEYBOARD
let keyboardMapping = mapKeyboard(keyboard_created);


// DISPLAY KEYBOARD
let finalKeyboard = displayKeyboard(keyboardMapping);


// SELECTING LETTER IS MATCHING WORD'S LETTER ?
// functions.js


// SELECTING LETTERS W/HTML
keyboard.addEventListener('click', ({target}) => {
    // let selectedLetter = target.matches('li');
    if(target.matches('li')){
        // console.log(`touché: ${target.innerHTML}`);
        let selectedLetter = target.innerHTML;

        let picked = false;
        already_used.forEach(el => {
            if(el === selectedLetter){
                console.log('letter already used');
                picked = true;
                count++;
                countImg++;
                p.textContent = `${count} / 7`;
                img.setAttribute('src', url[countImg]);

                // canvas
                // chooseFunction();
            }
        });

        if(picked === false){
            console.log('letter is yet to use');
            already_used.push(selectedLetter);
            console.log(already_used);
            matchingLetter(selectedLetter);
        }
    };
});


// SELECTING LETTERS W/KEYBOARD
document.addEventListener('keyup', keyboardPress, true);


// CLICK => CHANGE WORD
btn.addEventListener('click', () => {
    document.location.reload();
});

// window.location.replace("Home/Home.html"));