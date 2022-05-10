let caret = document.getElementById("caret")
let caretAnimationValue = localStorage.getItem("DBuserCaretAnimation")



function applySetting() {
    if (userTheme === null) {
        localStorage.setItem("DBuserTheme","typerrank")
        getUserTheme()
    } else {getUserTheme()}
    if (caretAnimationValue === null) {
        localStorage.setItem("DBuserCaretAnimation","80")
        caretAnimationValue = localStorage.getItem("DBuserCaretAnimation")    
        textSpan.style.transition = caretAnimationValue + "ms"
    } else {textSpan.style.transition = caretAnimationValue + "ms"}
}
