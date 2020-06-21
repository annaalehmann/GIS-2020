"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div");
        document.getElementById("inhaltKorb")?.appendChild(div);
        div.id = "warenkorb" + i;
        let bild = document.createElement("img");
        bild.src = "" + localStorage.getItem("bild");
        div.appendChild(bild);
        let name = document.createElement("h3");
        name.innerHTML = "" + localStorage.getItem("namen");
        div.appendChild(name);
        let preis = document.createElement("h4");
        preis.innerHTML = "" + localStorage.getItem("preis");
        div.setAttribute("preis", preis.innerHTML);
        div.appendChild(preis);
        let löschen = document.createElement("button");
        löschen.innerHTML = "löschen";
        div.appendChild(löschen);
        löschen.addEventListener("click", handlelöschen);
        löschen.setAttribute("delete", i + "");
        div.setAttribute("löschen", i + "");
    }
    let gesamtpreis = document.createElement("p");
    //Button erstellen 
    let allesLöschen = document.createElement("button");
    document.getElementById("löschenButton")?.appendChild(allesLöschen);
    addEventListener("click", handleAllesLöschen);
    function handlelöschen(_event) {
        let löschen = _event.target.getAttribute("delete");
        localStorage.removeItem(löschen);
        document.getElementById("warenkorb" + löschen).remove();
    }
    function handleAllesLöschen(_event) {
        for (let i = 0; i <= localStorage.length; i++) {
            document.getElementById("warenkorb" + i).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map