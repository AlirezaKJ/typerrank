let caretAnimationInput = document.getElementById("caretanimationinput")
let caretAnimationValue = localStorage.getItem("DBuserCaretAnimation")

if (caretAnimationValue === null) {
    localStorage.setItem("DBuserCaretAnimation","80")
    caretAnimationValue = localStorage.getItem("DBuserCaretAnimation")
    caretAnimationInput.value = caretAnimationValue
} else {caretAnimationInput.value = caretAnimationValue}

function changeCaretAnimation() {
    if (userLVL > 3) {
        localStorage.setItem("DBuserCaretAnimation",caretAnimationInput.value)
    } else {alert("U Need To Be Level 3 Or Higher To Access This Feature")}
}

let blinkingbtn = document.getElementById("blinkingbtn")
let blinkingCaret = localStorage.getItem("DBuserCaretBlink")

if (blinkingCaret === null) {
    localStorage.setItem("DBuserCaretBlink","off")
    blinkingCaret = localStorage.getItem("DBuserCaretBlink")
    blinkingbtn.innerText = blinkingCaret
    blinkingbtn.classList.add("offstatus")
} else {
    blinkingbtn.innerText = blinkingCaret
    if (blinkingbtn.innerText === "on") {
        blinkingbtn.classList.add("onstatus")
    } else {
        blinkingbtn.innerText = "off"
        blinkingbtn.classList.add("offstatus")
    }
}

function changeCaretBlinkStatus() {
    if (blinkingbtn.innerText === "on") {
        if (userLVL > 5) {
            blinkingbtn.innerText = "off"
            blinkingbtn.classList.remove("onstatus")
            blinkingbtn.classList.add("offstatus")
            localStorage.setItem("DBuserCaretBlink","off")    
        } else {alert("U Need To Be Level 5 Or Higher To Access This Feature")}
        
    } else {
        if (userLVL > 5) {
            blinkingbtn.innerText = "on"
            blinkingbtn.classList.remove("offstatus")
            blinkingbtn.classList.add("onstatus")
            localStorage.setItem("DBuserCaretBlink","on")
        } else {alert("U Need To Be Level 5 Or Higher To Access This Feature")}
    }
}