"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    for (let i = 0; i <= length - 1; i++) {
        let div = document.createElement("div");
        document.getElementById("inhaltKorb")?.appendChild(div);
        div.id = "container" + i;
        let bild = document.createElement("img");
        bild.src = "" + localStorage.getItem("bild" + i);
        div.appendChild(bild);
        let name = document.createElement("h3");
        name.innerHTML = "" + localStorage.getItem("name" + i);
        div.appendChild(name);
        let preis = document.createElement("h4");
        preis.innerHTML = "" + localStorage.getItem("preis" + i) + "€";
        div.appendChild(preis);
        div.setAttribute("preis", preis.innerHTML);
        let löschen = document.createElement("button");
        löschen.innerHTML = "löschen";
        div.appendChild(löschen);
        löschen.addEventListener("click", handlelöschen);
        löschen.setAttribute("delete", i + "");
        div.setAttribute("lösch", i + "");
    }
    let allDelete = document.getElementById("löschenButton");
    allDelete.innerHTML = "Alles löschen";
    allDelete.addEventListener("click", handleAllesLöschen);
    function handlelöschen(_event) {
        let del = _event.target.getAttribute("delete");
        localStorage.removeItem(del);
        document.getElementById("contauiner" + del).remove();
    }
    function handleAllesLöschen(_event) {
        for (let i = 0; i <= length; i++) {
            document.getElementById("container" + i).remove();
            localStorage.clear();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map