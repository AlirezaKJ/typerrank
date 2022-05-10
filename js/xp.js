let userXP;
let userLVL;
if (localStorage.getItem("DBuserXP") === null) {
    localStorage.setItem("DBuserXP","0")
    userXP = parseInt(localStorage.getItem("DBuserXP"))
} else {    
    userXP = parseInt(localStorage.getItem("DBuserXP"))    
}
getLevel()
function setXP(xp) {
    localStorage.setItem("DBuserXP",xp)
    userXP = parseInt(localStorage.getItem("DBuserXP"))    
}
function addXP(xp) {
    localStorage.setItem("DBuserXP",userXP + parseInt(xp))
    userXP = parseInt(localStorage.getItem("DBuserXP"))    
}
function getLevel() {
    userLVL = userXP / 100
    userLVL = Math.trunc(userLVL)
}