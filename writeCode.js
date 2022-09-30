// 1. Sum Zero

let array = [1, 4, 11, 2, 37, -4]

let value = false

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        if (i !== j) {
            if (array[i] + array[j] === 0){
                value = true
            }
        }
    }
}

console.log(value)

// Runtime =  o(n)
// Space Complexity = o(1)

// 2. Unique Characters

function uniqueCharacter(word) {
    for (let  i = 0; i < word.length; i++){
        for (let j = 0; j < word.length; j++){
            if (word[i] === word[j]) 
            return false
        }
    }
    return true
}

console.log(uniqueCharacter("Monday"))
console.log(uniqueCharacter("Moonday"))

// Runtime = o(n^2)
// Space Complexity = o(n)

// 3. Pangram Sentence

function pangram(string) {
    let strArr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(' ')

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet) < 0) {
            return false
        }

}
    return true
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("I like cats, but not mice"))

// Runtime =  o(n)
// Space Complexity = o(n)

// 4. Longest Word

function findLongestWord(str) {
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]

}

console.log(findLongestWord("hi, hello world!"))

// Runtime =  o(1)
// Space Complexity = o(1)