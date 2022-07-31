var input = document.querySelector("#input")
var wordsCount = document.querySelector("#word")
var charCount = document.querySelector("#char")

function getWords() {
    var i = input.value
    i = i.replace("\n", " ")
    var c = i.split(' ').length;
    charCount.innerHTML = i.length
    if(i.length <= 0) return wordsCount.innerHTML = "0"
    wordsCount.innerHTML = c.toString()
}