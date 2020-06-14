"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    produkteAnzeigen("produkte.json");
    async function produkteAnzeigen(_url) {
        let antwort = await fetch(_url);
        let wiedergabeJSON = await antwort.json();
        Aufgabe07.array = await JSON.parse(JSON.stringify(wiedergabeJSON));
        produkt();
    }
    function produkt() {
        for (let i = 0; i < Aufgabe07.array.length; i++) {
            if (Aufgabe07.array[i].lippenstift) {
                let div = document.createElement("div");
                div.id = "produktLippenstift" + i;
                document.getElementById("Lippenstift")?.appendChild(div);
                div.setAttribute("produktSpeichern", i.toString());
                let bildLippenstift = document.createElement("img");
                bildLippenstift.src = Aufgabe07.array[i].bild;
                document.getElementById("produktLippenstift" + i)?.appendChild(bildLippenstift);
                let nameLippenstift = document.createElement("h3");
                nameLippenstift.innerHTML = Aufgabe07.array[i].name;
                document.getElementById("produktLippenstift" + i)?.appendChild(nameLippenstift);
                let beschreibungLippenstift = document.createElement("p");
                beschreibungLippenstift.innerHTML = Aufgabe07.array[i].beschreibung;
                document.getElementById("produktLippenstift" + i)?.appendChild(beschreibungLippenstift);
                let preisLippenstift = document.createElement("h4");
                preisLippenstift.innerHTML = Aufgabe07.array[i].preis.toFixed(2) + "€";
                document.getElementById("produktLippenstift" + i)?.appendChild(preisLippenstift);
                let button = document.createElement("button");
                document.getElementById(Aufgabe07.array[i].name)?.appendChild(button);
                document.getElementById("produktLippenstift" + i)?.appendChild(button);
                button.innerHTML = "In den Warenkorb";
                button.setAttribute("preis", Aufgabe07.array[i].preis.toLocaleString());
                button.setAttribute("name", Aufgabe07.array[i].name);
                button.addEventListener("click", handlerWarenkorb);
            }
            else if (Aufgabe07.array[i].lipliner) {
                let div = document.createElement("div");
                div.id = "produktLipliner" + i;
                document.getElementById("Lipliner")?.appendChild(div);
                div.setAttribute("produktSpeichern", i.toString());
                let bildLipliner = document.createElement("img");
                bildLipliner.src = Aufgabe07.array[i].bild;
                document.getElementById("produktLipliner" + i)?.appendChild(bildLipliner);
                let nameLipliner = document.createElement("h3");
                nameLipliner.innerHTML = Aufgabe07.array[i].name;
                document.getElementById("produktLipliner" + i)?.appendChild(nameLipliner);
                let beschreibungLipliner = document.createElement("p");
                beschreibungLipliner.innerHTML = Aufgabe07.array[i].beschreibung;
                document.getElementById("produktLipliner" + i)?.appendChild(beschreibungLipliner);
                let preisLipliner = document.createElement("h4");
                preisLipliner.innerHTML = Aufgabe07.array[i].preis.toFixed(2) + "€";
                document.getElementById("produktLipliner" + i)?.appendChild(preisLipliner);
                let button = document.createElement("button");
                document.getElementById(Aufgabe07.array[i].name)?.appendChild(button);
                document.getElementById("produktLipliner" + i)?.appendChild(button);
                button.innerHTML = "In den Warenkorb";
                button.setAttribute("preis", Aufgabe07.array[i].preis.toLocaleString());
                button.setAttribute("name", Aufgabe07.array[i].name);
                button.setAttribute("speichern", Aufgabe07.array[i] + "");
                button.addEventListener("click", handlerWarenkorb);
            }
        }
        //Teilaufgabe 1
        let preisRechner = 0;
        let kreisDiv = document.createElement("div");
        kreisDiv.id = "kreisDiv";
        let zaehlerArtikel = 0;
        let warenkorbProdukt = [];
        function handlerWarenkorb(_event) {
            if (zaehlerArtikel >= 0) {
                document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
            }
            zaehlerArtikel += 1;
            kreisDiv.innerHTML = zaehlerArtikel + "";
            let nameProdukt = _event.currentTarget?.getAttribute("name");
            preisRechner += parseInt(_event.currentTarget?.getAttribute("preis"));
            console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");
            //Daten abspeichern
            let speichernButton = _event.currentTarget.parentElement.getAttribute("produktSpeichern");
            let indexNr = parseInt(speichernButton);
            warenkorbProdukt.push(Aufgabe07.array[indexNr]);
            localStorage.setItem("produktBild" + (warenkorbProdukt.length - 1), Aufgabe07.array[indexNr].bild);
            localStorage.setItem("produktName" + (warenkorbProdukt.length - 1), Aufgabe07.array[indexNr].name);
            localStorage.setItem("produktBeschreibung" + (warenkorbProdukt.length - 1), Aufgabe07.array[indexNr].beschreibung);
            localStorage.setItem("produktPreis" + (warenkorbProdukt.length - 1), Aufgabe07.array[indexNr].preis.toFixed(2));
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
    }
    Aufgabe07.produkt = produkt;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map