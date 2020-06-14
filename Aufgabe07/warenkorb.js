"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    produkteAnzeigen("produkte,json");
    async function produkteAnzeigen(_url) {
        let antwort = await fetch(_url);
        let wiedergabeJSON = await antwort.json();
        Aufgabe07.array = await JSON.parse(JSON.stringify(wiedergabeJSON));
        produkt1();
    }
    //Produkte auflisten 
    function produkt1() {
        for (let i = 0; i < localStorage.length; i++) {
            let div = document.createElement("div");
            document.getElementById("warenkorb")?.appendChild(div);
            div.id = "produkt" + i;
            let bild = document.createElement("img");
            bild.innerHTML = Aufgabe07.array[parseInt(localStorage.getItem(i + ""))].bild;
            bild.src = Aufgabe07.array[i].bild;
            document.getElementById("produkt" + i)?.appendChild(bild);
            let name = document.createElement("h3");
            name.innerHTML = Aufgabe07.array[parseInt(localStorage.getItem(i + ""))].name;
            document.getElementById("produkt" + i)?.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07.array[parseInt(localStorage.getItem(i + ""))].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibung);
            let preis = document.createElement("h4");
            preis.innerHTML = Aufgabe07.array[parseInt(localStorage.getItem(i + ""))].preis.toFixed(2) + "€";
            document.getElementById("produkt" + i)?.appendChild(preis);
            let löschen = document.createElement("button");
            document.getElementById("produkt" + i)?.appendChild(löschen);
            löschen.innerHTML = "löschen";
            löschen.setAttribute("delete", i + "");
            löschen.addEventListener("click", handlelöschen);
        }
        function handlelöschen(_event) {
            let löschen = _event.target.getAttribute("delete");
            localStorage.removeItem(löschen);
            document.getElementById("inhalt" + löschen).remove();
        }
    }
    Aufgabe07.produkt1 = produkt1;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map