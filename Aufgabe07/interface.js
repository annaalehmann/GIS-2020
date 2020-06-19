"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    loadArtikel("produkte.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        console.log(jsonArray);
        Aufgabe07.produkte = await JSON.parse(JSON.stringify(jsonArray));
        console.log(Aufgabe07.produkte);
        Aufgabe07.getProdukte();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=interface.js.map