let nextChar;
window.addEventListener('keydown', (key) => {
    nextChar = lettersarray[0]
    if (startStatus) {
        startSession()        
        inSession = true
    }
    if (inSession) {
        if (key.key === nextChar) {
            lettersarray.shift()
            move()
            letterstyped = letterstyped + 1
            localStorage.setItem("DBstatLetters",letterstyped)
        } else {
            missAmount = missAmount + 1
        }
        if (lettersarray.length == 0) {
            endTimer()
            inSession = false
            showScores()
            rerollSpan.style.visibility = "visible"
            rerollSpan.style.filter = "opacity(100%)"
            sessionscompleted = sessionscompleted + 1
            localStorage.setItem("DBstatSessions")
        }
    }
    if (key.key === "Tab") {
        key.preventDefault();
        rerollSpan.focus()
    }
})