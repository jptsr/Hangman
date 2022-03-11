const ulWord = document.getElementById('ul_word');
const ulKeyboard = document.getElementById('ul_keyboard');
const keyboard = document.getElementById('letters');
const p = document.getElementById('counter');
const img = document.getElementsByTagName('img')[0];

const btn = document.getElementById('new_word');

const div_btn1 = document.getElementsByClassName('divBtn_first')[0];
const btn_easy = document.getElementById('easy');
const btn_info = document.getElementById('informatic');
const btn_becode = document.getElementById('becode');
const btn_hard = document.getElementById('hard');
const btn_menu = document.getElementById('menu');

const img_count_div = document.getElementsByClassName('count_img')[0];
const word_div = document.getElementsByClassName('word')[0];
const keyboard_div = document.getElementById('letters');
const div_btn2 = document.getElementsByClassName('divBtn_second')[0];

let rd_word, actual_word;
let keyboard_letters = [];
let already_used = ['5'];
let count = 0, countImg = -1, countCanvas = 0, countLetter = 0;
let arrEasy = false, arrInfo = false, arrBecode = false, arrHard = false;

let mapLetter, wordIsDisplayed, keyboard_created, keyboardMapping, finalKeyboard;

p.textContent = `${count} / 7`;


// LEVEL BTN
btn_easy.addEventListener('click', () => {

    arrEasy = true;
    arrInfo = false;
    arrBecode = false;
    arrHard = false;

    levelBtn();
    randomWord();
});

btn_info.addEventListener('click', () => {

    arrEasy = false;
    arrInfo = true;
    arrBecode = false;
    arrHard = false;
    
    levelBtn();
    randomWord();
});

btn_becode.addEventListener('click', () => {

    arrEasy = false;
    arrInfo = false;
    arrBecode = true;
    arrHard = false;

    levelBtn();
    randomWord();
});

btn_hard.addEventListener('click', () => {
    arrEasy = false;
    arrInfo = false;
    arrBecode = false;
    arrHard = true;

    levelBtn();
    randomWord();
});


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
    console.clear();
    reset();
    randomWord();
});


btn_menu.addEventListener('click', () => {document.location.reload()});