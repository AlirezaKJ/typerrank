let root = document.querySelector(":root");
let userTheme = localStorage.getItem("DBuserTheme");



function getUserTheme() {
    userTheme = localStorage.getItem("DBuserTheme")
    changeTheme(userTheme)
}

function changeThemeVars(main,second,third,alt) {
    root.style.setProperty('--main',main);
    root.style.setProperty('--second',second);
    root.style.setProperty('--third',third);
    root.style.setProperty('--alt',alt);
}

function changeTheme(theme) {
    if (theme === "typerrank") {
        changeThemeVars("#000000","#DEE2E6","#6C757D","#FFFFFF")
        localStorage.setItem("DBuserTheme",theme)
    } else if (theme === "monokai") {
        if (userLVL > 0) {
            changeThemeVars("#E2E2DC","#272822","#5BBBCC","#8C80FF")
            localStorage.setItem("DBuserTheme",theme)            
        } else {alert("U Need To Be Level 1 Or Higher To Access This Theme")}
    } else if (theme === "dracula") {
        if (userLVL > 1) {
            changeThemeVars("#BD93F9","#282A36","#ECEDED","#8BE9FD")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 2 Or Higher To Access This Theme")}
    } else if (theme === "dev") {
        if (userLVL > 2) {
            changeThemeVars("#C8C8B2","#1B2028","#47546E","#229EC8")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 3 Or Higher To Access This Theme")}
    } else if (theme === "onedark") {
        if (userLVL > 3) {
            changeThemeVars("#97C279","#2F343F","#61AFEF","#E06C75")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 4 Or Higher To Access This Theme")}
    } else if (theme === "cafe") {
        if (userLVL > 4) {
            changeThemeVars("#D4D2D1","#CEB18D","#24201A","#24201A")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 5 Or Higher To Access This Theme")}
    } else if (theme === "menthol") {
        if (userLVL > 5) {
            changeThemeVars("#186544","#00C18C","#98FDD7","#98FDD7")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 6 Or Higher To Access This Theme")}
    } else if (theme === "honey") {
        if (userLVL > 6) {
            changeThemeVars("#F3ECC5","#F2AA00","#795200","#FFF546")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 7 Or Higher To Access This Theme")}
    } else if (theme === "leather") {
        if (userLVL > 7) {
            changeThemeVars("#FFE4BC","#A86948","#EF6D49","#844A2E")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 8 Or Higher To Access This Theme")}
    } else if (theme === "milkshake") {
        if (userLVL > 8) {
            changeThemeVars("#3C455A","#FFFFFF","#212B43","#62CFE6")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 9 Or Higher To Access This Theme")}
    } else if (theme === "matrix") {
        if (userLVL > 9) {
            changeThemeVars("#ADFFA7","#000000","#15FF00","#003000")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 10 Or Higher To Access This Theme")}
    } else if (theme === "copper") {
        if (userLVL > 10) {
            changeThemeVars("#E7E0DE","#442F29","#C25C42","#7EBAB5")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 11 Or Higher To Access This Theme")}
    } else if (theme === "vscode") {
        if (userLVL > 11) {
            changeThemeVars("#CACACA","#1E1E1E","#569CD6","#0276C4")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 12 Or Higher To Access This Theme")}
    } else if (theme === "terminal") {
        if (userLVL > 12) {
            changeThemeVars("#E7EAE0","#191A1B","#79A617","#48494B")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 13 Or Higher To Access This Theme")}
    } else if (theme === "reddragon") {
        if (userLVL > 13) {
            changeThemeVars("#48494A","#1A0B0C","#FF3A32","#E2A528")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 14 Or Higher To Access This Theme")}
    } else if (theme === "metaverse") {
        if (userLVL > 14) {
            changeThemeVars("#E8E8E8","#232323","#D82934","#5E5E5E")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 15 Or Higher To Access This Theme")}
    } else if (theme === "comfy") {
        if (userLVL > 15) {
            changeThemeVars("#F5EFEE","#4A5B6E","#9EC1CC","#EFC7C2")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 16 Or Higher To Access This Theme")}
    } else if (theme === "sonokai") {
        if (userLVL > 16) {
            changeThemeVars("#E2E2E3","#2C2E34","#F38C71","#9ED072")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 17 Or Higher To Access This Theme")}
    } else if (theme === "pulse") {
        if (userLVL > 17) {
            changeThemeVars("#E5F4F4","#181818","#17B8BD","#53565A")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 18 Or Higher To Access This Theme")}
    } else if (theme === "luna") {
        if (userLVL > 18) {
            changeThemeVars("#F6DBE4","#221C35","#F67599","#5A3A7E")
            localStorage.setItem("DBuserTheme",theme)    
        } else {alert("U Need To Be Level 19 Or Higher To Access This Theme")}
    } else if (theme === "carbon") {
        if (userLVL > 19) {
            changeThemeVars("#E0D3B8","#313131","#F66E0D","#616161")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 20 Or Higher To Access This Theme")}
    } else if (theme === "alpine") {
        if (userLVL > 20) {
            changeThemeVars("#F6F6F7","#6C687F","#585568","#9994B8")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 21 Or Higher To Access This Theme")}
    } else if (theme === "joker") {
        if (userLVL > 21) {
            changeThemeVars("#E5DEF2","#1A0E25","#99DE1E","#7554A3")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 22 Or Higher To Access This Theme")}
    } else if (theme === "frozenllama") {
        if (userLVL > 22) {
            changeThemeVars("#FDFFFF","#9BF2EA","#6D44A6","#B497FB")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 23 Or Higher To Access This Theme")}
    } else if (theme === "retro") {
        if (userLVL > 23) {
            changeThemeVars("#DAD3C1","#918B7D","#1D1B17","#1D1B17")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 24 Or Higher To Access This Theme")}
    } else if (theme === "sweden") {
        if (userLVL > 24) {
            changeThemeVars("#EDF3F9","#0058A3","#FFCC02","#FFCC02")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 25 Or Higher To Access This Theme")}
    } else if (theme === "metropolis") {
        if (userLVL > 25) {
            changeThemeVars("#E4EDF1","#0F1F2C","#56C3B7","#326984")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 26 Or Higher To Access This Theme")}
    } else if (theme === "ezmode") {
        if (userLVL > 26) {
            changeThemeVars("#FA62D5","#0068C6","#4DDB47","#F0F2F4")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 27 Or Higher To Access This Theme")}
    } else if (theme === "mint") {
        if (userLVL > 27) {
            changeThemeVars("#EDF5E1","#05385B","#5CDB95","#20688A")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 28 Or Higher To Access This Theme")}
    } else if (theme === "nebula") {
        if (userLVL > 28) {
            changeThemeVars("#BE3C88","#212135","#78C729","#19B3B8")
            localStorage.setItem("DBuserTheme",theme)
        } else {alert("U Need To Be Level 29 Or Higher To Access This Theme")}
    } 
}