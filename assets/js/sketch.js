const ulWord = document.getElementById('ul_word');
const ulKeyboard = document.getElementById('ul_keyboard');
const keyboard = document.getElementById('letters');
const p = document.getElementById('counter');
const img = document.getElementsByTagName('img')[0];
const btn = document.getElementById('new_word');

// console.log(p);
// console.log(img);

let count = 0, countImg = -1, countLetter = 0;
p.textContent = `${count} / 7`;


// CHOOSE A RANDOM WORD
let actual_word = words[Math.floor(Math.random() * words.length)];
console.log(`actual word: ${actual_word}`);
console.log(actual_word.length);


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


// DISPLAY WORD'S LETTERS AS A LIST
let displayrandomWord = (mapL) => {
    // console.log('displayrandomWord function is ok');

    mapL.forEach(element => {
        // console.log(element);

        if(element.visible === true){
            // console.log(element.visible);

            let li = document.createElement('li');
            li.setAttribute('class', 'lettersList');
            ulWord.appendChild(li);
            li.textContent = element.letter;
        }else{
            let li = document.createElement('li');
            li.setAttribute('class', 'lettersList');
            ulWord.appendChild(li);
            li.textContent = '_';
        }
    });
};

let wordIsDisplayed = displayrandomWord(mapLetter);


// CREATE KEYBOARD
let keyboard_letters = [];
let createKeyboard = () => {
    // console.log('createKeyboard function is ok');
    
    let i = 0;
    for(let key = 65; key <= 90; key++){
        keyboard_letters[i] = String.fromCharCode(key);
        // console.log(keyboard_letters[i]);
        i++;       
    }

    console.log(`keyboard letters: ${keyboard_letters}`);
    return keyboard_letters;
}

let keyboard_created = createKeyboard();


// MAP KEYBOARD
let mapKeyboard = (keyboard) => {
    // console.log('mapKeyboard function is ok');

    let final_keyboard = keyboard.map((key) => {
        return {
            keyLetter: key,
            selected: false
        }
    });
    console.log(final_keyboard);
    return final_keyboard;
};

let keyboardMapping = mapKeyboard(keyboard_created);


// DISPLAY KEYBOARD
let displayKeyboard = (keyboard1) => {
    // console.log('displayKeyboard function is ok');

    keyboard1.forEach(element => {
        let li = document.createElement('li');
        li.setAttribute('id', 'keyboard');
        li.setAttribute('class', 'keypad');
        ulKeyboard.appendChild(li);
        li.textContent = element.keyLetter;
    });

    return keyboard1;
};

let finalKeyboard = displayKeyboard(keyboardMapping);


// SELECTING LETTER IS MATCHING WORD'S LETTER ?
let deleteWord = () => {
    while(ulWord.firstChild){
        ulWord.removeChild(ulWord.firstChild);
    };
};

let deleteKeyboard = () => {
    while(ulKeyboard.firstChild){
        ulKeyboard.removeChild(ulKeyboard.firstChild);
    }
};

let matchingLetter = (letter) => {
    // console.log('matchingLetter function is ok');
    // console.log(letter);

    let matched = false;
    mapLetter.forEach(element => {
        if(element.letter === letter){
            console.log("it's a match");
            // console.log(element);
            element.visible = true;
            matched = true;
            countLetter++;
            console.log(`count letter: ${countLetter}`);
        }
    });

    let matchLetter = false;
    keyboardMapping.forEach(e => {
        if(e.keyLetter === letter){
            console.log('letters match');
            e.selected = true;
            matchLetter = true;
        }
    });

    if(matchLetter){
        console.log(`match letter: ${matchLetter}`);
        let li = document.getElementsByClassName('keypad');
        // console.log(li);
        for(let item of li){
            if(item.innerHTML === letter){
                console.log(item.innerHTML);
                item.remove();
            }
        }
    }

    if(matched){
        deleteWord();
        displayrandomWord(mapLetter);

        if(countLetter === actual_word.length){
            console.log("IT'S A WIN");
            deleteKeyboard();
        }
    }else{
        // console.log('nul');
        count++;
        countImg++;
        // console.log(count);
        p.textContent = `${count} / 7`;
        img.setAttribute('src', url[countImg]);

        if(count >= 7){
            // console.log('GAME OVER');
            p.textContent = 'GAME OVER';
            deleteKeyboard();
            deleteWord();
        }
    }
};


// SELECTING LETTERS W/HTML
keyboard.addEventListener('click', ({target}) => {
    // let selectedLetter = target.matches('li');
    if(target.matches('li')){
        // console.log(`touché: ${target.innerHTML}`);
        let selectedLetter = target.innerHTML;
        matchingLetter(selectedLetter);
    };
});


// SELECTING LETTERS W/KEYBOARD
document.addEventListener('keypress', (e) => {
    // console.log('keydown');
    // console.log(e.keyCode);
    // console.log(e.key);

    if(e.keyCode <= 122 && e.keyCode >= 97){
        console.log(`letter keydown: ${e.key}`);

        // let selectedLetter = String.fromCharCode(e.keyCode);
        let selectedLetter = e.key;
        let s_letter = selectedLetter.toUpperCase();
        console.log(s_letter);
        matchingLetter(s_letter);
    };
});


// CLICK => CHANGE WORD
btn.addEventListener('click', () => {
    document.location.reload();
});