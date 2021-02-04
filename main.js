const keyToAlphabet = {
    '0': [' '],
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

const keypadToWords = (keyStrokes) => {
    let words = [];

    for(let key of keyStrokes){
        if(words.length == 0){
            words = [...keyToAlphabet[key]];
        }
        else{
            let temp = []
            
            for(let letter of keyToAlphabet[key]){
                for(let word of words){
                    temp.push(word + letter);
                }
            }
            words = [...temp];
        }
    }
    
    const fs = require('fs'),
          path = require('path'),    
          filePath = path.join(__dirname, 'english_words.txt');

    const dictionary = fs.readFileSync(filePath).toString().split(/\r?\n/);

    return words.filter(word => dictionary.includes(word));
}

console.log(keypadToWords('642'));
console.log(keypadToWords('6463'));
console.log(keypadToWords('43556'));