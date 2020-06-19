"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    function getProdukte() {
        for (let i = 0; i < Aufgabe07.produkte.length; i++) {
            let div = document.createElement("div");
            div.id = "produkte" + i;
            if (Aufgabe07.produkte[i].kategorie == 1) {
                document.getElementById("Lippenstift")?.appendChild(div);
            }
            else if (Aufgabe07.produkte[i].kategorie == 2) {
                document.getElementById("Lipliner")?.appendChild(div);
            }
            let bild = document.createElement("img");
            bild.src = Aufgabe07.produkte[i].bild;
            div.appendChild(bild);
            let name = document.createElement("h3");
            name.innerHTML = Aufgabe07.produkte[i].name;
            div.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07.produkte[i].beschreibung;
            div.appendChild(beschreibung);
            let preis = document.createElement("h4");
            preis.innerHTML = Aufgabe07.produkte[i].preis.toFixed(2) + "€";
            div.appendChild(preis);
            let button = document.createElement("button");
            div.appendChild(button);
            button.innerHTML = "In den Warenkorb";
            button.setAttribute("preis", Aufgabe07.produkte[i].preis.toLocaleString());
            button.setAttribute("name", Aufgabe07.produkte[i].name);
            button.addEventListener("click", handlerWarenkorb);
            button.setAttribute("newIndex", i.toString());
        }
    }
    Aufgabe07.getProdukte = getProdukte;
    Aufgabe07.getProdukte = getProdukte;
    //Teilaufgabe 1
    let preisRechner = 0;
    let kreisDiv = document.createElement("div");
    kreisDiv.id = "kreisDiv";
    let zaehlerArtikel = 0;
    function handlerWarenkorb(_event) {
        if (zaehlerArtikel >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
        }
        zaehlerArtikel += 1;
        kreisDiv.innerHTML = zaehlerArtikel + "";
        let nameProdukt = _event.currentTarget?.getAttribute("name");
        preisRechner += parseInt(_event.currentTarget?.getAttribute("preis"));
        console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");
        let target = _event.target;
        let wclick = "" + target.getAttribute("newIndex");
        let arvar = +wclick;
        localStorage.setItem("namen" + zaehlerArtikel, Aufgabe07.produkte[arvar].name);
        localStorage.setItem("preis" + zaehlerArtikel, (Aufgabe07.produkte[arvar].preis).toString());
        localStorage.setItem("bild" + zaehlerArtikel, Aufgabe07.produkte[arvar].bild);
        console.log(localStorage);
    }
    //Teilaufgabe 2
    let kategorieLippenstift = document.querySelector("#kLippenstift");
    kategorieLippenstift.id = "lippenstift";
    kategorieLippenstift.addEventListener("click", handlerKategorie1);
    let kategorieLipliner = document.querySelector("#kLipliner");
    kategorieLipliner.id = "lipliner";
    kategorieLipliner.addEventListener("click", handlerKategorie1);
    let kategorieBeide = document.querySelector("#kalle");
    kategorieBeide.id = "alle";
    kategorieBeide.addEventListener("click", handlerKategorie1);
    function handlerKategorie1(_event) {
        if (_event.currentTarget.getAttribute("id") == "lippenstift") {
            lippenstif();
        }
        else if (_event.currentTarget.getAttribute("id") == "lipliner") {
            lipliner();
        }
        else if (_event.currentTarget.getAttribute("id") == "alle") {
            beide();
        }
    }
    function lippenstif() {
        document.getElementById("Lippenstift").style.display = "inline-grid";
        document.getElementById("lippenstift_ueberschrift").style.display = "inline-grid";
        document.getElementById("Lipliner").style.display = "none";
        document.getElementById("lipliner_ueberschrift").style.display = "none";
    }
    function lipliner() {
        document.getElementById("Lippenstift").style.display = "none";
        document.getElementById("lippenstift_ueberschrift").style.display = "none";
        document.getElementById("Lipliner").style.display = "inline-grid";
        document.getElementById("lipliner_ueberschrift").style.display = "inline-grid";
    }
    function beide() {
        document.getElementById("Lippenstift").style.display = "inline-grid";
        document.getElementById("lippenstift_ueberschrift").style.display = "inline-grid";
        document.getElementById("Lipliner").style.display = "inline-grid";
        document.getElementById("lipliner_ueberschrift").style.display = "inline-grid";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map