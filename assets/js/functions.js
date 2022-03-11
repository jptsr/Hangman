// LEVEL BTN
let levelBtn = () => {
    p.removeAttribute('class', 'hide');
    div_btn1.setAttribute('class', 'hide');
    img_count_div.removeAttribute('class', 'hide');
    img_count_div.setAttribute('class', 'count_img');
    word_div.removeAttribute('class', 'hide');
    word_div.setAttribute('class', 'word');
    ulKeyboard.removeAttribute('class', 'hide');
    keyboard_div.removeAttribute('class', 'hide');
    div_btn2.removeAttribute('class', 'hide');
    div_btn2.setAttribute('class', 'div_btn divBtn_second');
    btn.removeAttribute('class', 'hide');
    btn_menu.removeAttribute('class', 'hide');
};

// FUNCTION RESTET
let reset = () => {
    count = 0;
    countImg = -1;
    countCanvas = 0;
    countLetter = 0;
    already_used = ['5'];

    p.textContent = `${count} / 7`;
    img.setAttribute('src', './assets/image/Untitled_Artwork0.png');

    document.addEventListener('keyup', keyboardPress, true);

    deleteWord();
    deleteKeyboard();
};


// SPLIT RANDOM WORD IN ARRAY OF LETTERS
// MAP ARRAY IN OBJECT WITH LETTER & VISIBLE PROPERTIES
let mappingLetter = (word) => {
    const split_word = word.split('');
    console.log(`letter array: ${split_word}`);

    let lettersToMap = split_word.map((letter) => {
        return {
            letter,
            visible: false
        } 
    });
    return lettersToMap;
};


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


// CREATE KEYBOARD
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


// SELECTING LETTER IS MATCHING WORD'S LETTER ?
let matchingLetter = (letter) => {
    // console.log('matchingLetter function is ok');
    // console.log(letter);

    let matched = false;
    mapLetter.forEach(element => {
        if(element.letter === letter){
            // console.log("it's a match");
            // console.log(element);

            element.visible = true;
            matched = true;
            countLetter++;
            // console.log(`count letter: ${countLetter}`);
        }
    });

    let matchLetter = false;
    keyboardMapping.forEach(e => {
        if(e.keyLetter === letter){
            // console.log('letters match');
            e.selected = true;
            matchLetter = true;
        }
    });

    if(matchLetter){
        // console.log(`match letter: ${matchLetter}`);
        let li = document.getElementsByClassName('keypad');
        // console.log(li);
        for(let item of li){
            if(item.innerHTML === letter){
                // console.log(item.innerHTML);
                item.remove();
            }
        }
    }

    if(matched){
        deleteWord();
        displayrandomWord(mapLetter);

        if(countLetter === actual_word.length){
            // console.log("IT'S A WIN");
            p.textContent = "IT'S A WIN";

            deleteKeyboard();
            deleteWord();
            document.removeEventListener('keyup', keyboardPress, true);

            let li = document.createElement('li');
            li.setAttribute('class', 'lettersList');
            let strong = document.createElement('strong');
            ulWord.appendChild(li);
            li.appendChild(strong);
            strong.textContent = actual_word;
        }
    }else{
        // console.log('nul');
        count++;
        countImg++;
        countCanvas++;
        // console.log(count);
        p.textContent = `${count} / 7`;
        img.setAttribute('src', url[countImg]);

        // canvas
        // chooseFunction();

        if(count >= 7){
            // console.log('GAME OVER');
            p.textContent = 'GAME OVER';
            deleteKeyboard();
            deleteWord();
            document.removeEventListener('keyup', keyboardPress, true);

            let li = document.createElement('li');
            li.setAttribute('class', 'lettersList');
            ulWord.appendChild(li);
            li.textContent = `The word was: ${actual_word}.`;
        }
    }
};


// SELECTING LETTERS W/KEYBOARD
let keyboardPress = (e) => {
    // console.log('keydown');
    let key = e.key;
    let ascii = key.charCodeAt();
    // console.log(ascii);

    if(ascii <= 122 && ascii >= 97){
        // console.log(`letter keydown: ${key} with code ${ascii}`);

        let selectedLetter = String.fromCharCode(ascii);
        // console.log(selectedLetter);
        let s_letter = selectedLetter.toUpperCase();
        console.log('typed letter : ' + s_letter);
        

        let picked = false;
        already_used.forEach(el => {
            if(el === s_letter){
                console.log('letter already used');
                picked = true;
                count++;
                countImg++;
                p.textContent = `${count} / 7`;
                img.setAttribute('src', url[countImg]);
                
                // canvas
                // chooseFunction();

                if(count >= 7){
                    // console.log('GAME OVER');
                    p.textContent = 'GAME OVER';
                    deleteKeyboard();
                    deleteWord();
                    document.removeEventListener('keyup', keyboardPress, true);
        
                    let li = document.createElement('li');
                    li.setAttribute('class', 'lettersList');
                    ulWord.appendChild(li);
                    li.textContent = `The word was: ${actual_word}.`;
                }
            }
        });

        if(picked === false){
            console.log('letter is yet to use');
            already_used.push(s_letter);
            console.log(already_used);
            matchingLetter(s_letter);
        }
    };
};


// START THE GAME
let startTheGame = () => {
    document.addEventListener('keyup', keyboardPress, true);

    // SPLIT RANDOM WORD IN ARRAY OF LETTERS
    // MAP ARRAY IN OBJECT WITH LETTER & VISIBLE PROPERTIES
    mapLetter = mappingLetter(actual_word);
    console.log(mapLetter); // notation: console.log(`map letter: ${mapLetter}`) renvoie [object object]


    // DISPLAY WORD'S LETTERS AS A LIST
    wordIsDisplayed = displayrandomWord(mapLetter);


    // CREATE KEYBOARD
    keyboard_created = createKeyboard();


    // MAP KEYBOARD
    keyboardMapping = mapKeyboard(keyboard_created);


    // DISPLAY KEYBOARD
    finalKeyboard = displayKeyboard(keyboardMapping);
};


// CHOOSE A RANDOM WORD
let randomWord = () => {
    // console.log('random word function is ok');

    if(arrEasy){
        console.log('easy');

        rd_word = easy_words[Math.floor(Math.random() * easy_words.length)];
        actual_word = rd_word.toUpperCase();
        console.log(`actual word: ${actual_word}`);
        console.log(actual_word.length);

        startTheGame();
    };

    if(arrInfo){
        console.log('informatic');

        rd_word = p_word[Math.floor(Math.random() * p_word.length)];
        actual_word = rd_word.toUpperCase();
        console.log(`actual word: ${actual_word}`);
        console.log(actual_word.length);

        startTheGame();
    };

    if(arrBecode){
        console.log('becode');

        rd_word = becode[Math.floor(Math.random() * becode.length)];
        actual_word = rd_word.toUpperCase();
        console.log(`actual word: ${actual_word}`);
        console.log(actual_word.length);

        startTheGame();
    };

    if(arrHard){
        console.log('hard');

        rd_word = words[Math.floor(Math.random() * words.length)];
        actual_word = rd_word.toUpperCase();
        console.log(`actual word: ${actual_word}`);
        console.log(actual_word.length);

        startTheGame();
    };
};