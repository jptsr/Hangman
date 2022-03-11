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

            btn_menu.removeAttribute('class', 'hide');
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
            btn_menu.removeAttribute('class', 'hide');
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

                    btn_menu.removeAttribute('class', 'hide');
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