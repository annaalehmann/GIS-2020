"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    for (let i = 0; i <= localStorage.length; i++) {
        let div = document.createElement("div");
        document.getElementById("inhaltKorb")?.appendChild(div);
        div.id = "warenkorb" + i;
        let bild = document.createElement("img");
        bild.src = "" + localStorage.getItem(bild + "");
        div.appendChild(bild);
        let name = document.createElement("h3");
        name.innerHTML = "" + localStorage.getItem("namen" + i);
        div.appendChild(name);
        let preis = document.createElement("h4");
        preis.innerHTML = "" + localStorage.getItem("preis" + i);
        div.appendChild(preis);
        let löschen = document.createElement("button");
        löschen.innerHTML = "löschen";
        div.appendChild(löschen);
        löschen.addEventListener("click", handlelöschen);
        löschen.setAttribute("delete", i + "");
        div.setAttribute("löschen", i + "");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
function handlelöschen(_event) {
    let löschen = _event.target.getAttribute("delete");
    localStorage.removeItem(löschen);
    document.getElementById("warenkorb" + löschen).remove();
}
//# sourceMappingURL=warenkorb.js.map