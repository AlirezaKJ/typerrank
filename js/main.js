let textSpan = document.getElementById("texts");
let statTabDiv = document.getElementById("statstab")
let rerollSpan = document.getElementById("reset")
let wpmStatSpan = document.getElementById("wpm")
let timeStatSpan = document.getElementById("time")
let xpStatSpan = document.getElementById("xp")
let missStatSpan = document.getElementById("miss")
let accuracyStatSpan = document.getElementById("accuracy")
let moveAmount = 22
let lettersarray = textSpan.innerText.split("")
let lettersamount = lettersarray.length;
let typeStarted;
let inSession;

let levelSpan = document.getElementById("levelnum")
levelSpan.innerText = userLVL
// let xpSpan = document.getElementById("xpbar")
// xpSpan.innerText = userXP

let startTime;
let endTime;
let elapsedTime;
let wpmAmount;
let xpAmount;
let missAmount;
let accuracyAmount;
let startStatus = true;

function move() {
    textSpan.style.transform = "translateX(-" + moveAmount + "px)"
    moveAmount = moveAmount + 22
}

function startTimer() {startTime = Date.now()}
function endTimer() {
    endTime = Date.now()
    elapsedTime = endTime - startTime
    elapsedTimeInSecs = elapsedTime / 1000
    elapsedTimeInSecs = elapsedTimeInSecs.toFixed(1)
    wpmAmount = ((lettersamount / 5) / elapsedTimeInSecs) * 60
    xpCalc()
    localStorage.setItem("DBuserFirstTime",false)
}
function xpCalc() {
    xpAmount = (lettersamount / 10) + (wpmAmount / 10)
    if (missAmount === 0) {
        xpAmount = xpAmount + 10
    }
    xpAmount = xpAmount.toFixed(1)
    addXP(xpAmount)
}


function startSession() {
    missAmount = 0
    startStatus = false
    startTimer()
}

function showScores() {
    wpmStatSpan.innerText = wpmAmount.toFixed(1)
    timeStatSpan.innerText = elapsedTimeInSecs + "S"
    xpStatSpan.innerText = xpAmount
    getLevel()
    levelSpan.innerText = userLVL
    missStatSpan.innerText = missAmount
    accuracyAmount = (lettersamount - missAmount) * 100 / lettersamount 
    accuracyAmount = accuracyAmount.toFixed(1)
    accuracyStatSpan.innerText = accuracyAmount + "%"
    statTabDiv.style.filter = "opacity(100%)";
    if (wpmAmount.toFixed(1) > bestwpm) {
        bestwpm = wpmAmount.toFixed(1)
        localStorage.setItem("DBuserBestWPM",bestwpm)
    }
}

function reroll() {
    lettersarray = []
    wordAmount = 0
    while (wordAmount < 10) {
        selectedWord = words[Math.trunc(Math.random() * words.length)]
        lettersarray.push(selectedWord)
        wordAmount = wordAmount + 1
    }
    textSpan.innerText = lettersarray.join(" ")
    textSpan.style.transform = "translateX(0px)"
    lettersarray = textSpan.innerText.split("")
    moveAmount = 22
    lettersamount = lettersarray.length
    startStatus = true
    rerollSpan.style.visibility = "hidden"
    rerollSpan.style.filter = "opacity(0%)"
    statTabDiv.style.filter = "opacity(0%)";
}

reroll()