let letterstyped = localStorage.getItem("DBstatLetters")
if (letterstyped === null) {
    localStorage.setItem("DBstatLetters","0")
    letterstyped = localStorage.getItem("DBstatLetters")
    letterstyped = parseInt(letterstyped)
} else {letterstyped = parseInt(letterstyped)}
let sessionscompleted = localStorage.getItem("DBstatSessions")
if (sessionscompleted === null) {
    localStorage.setItem("DBstatSessions","0")
    sessionscompleted = localStorage.getItem("DBstatSessions")
    sessionscompleted = parseInt(sessionscompleted)
} else {sessionscompleted = parseInt(sessionscompleted)}
let bestwpm = localStorage.getItem("DBuserBestWPM")
if (bestwpm === null) {
    localStorage.setItem("DBuserBestWPM","0")
    bestwpm = localStorage.getItem("DBuserBestWPM")
    bestwpm = parseInt(bestwpm)
} else {bestwpm = parseInt(bestwpm)}