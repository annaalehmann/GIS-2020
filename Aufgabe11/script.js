"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonHinzufügen = document.getElementById("datenHinzufügen");
    buttonHinzufügen.addEventListener("click", handleHinzufügen);
    let buttonAnzeigen = document.getElementById("datenAnzeigen");
    buttonAnzeigen.addEventListener("click", handleAnzeigen);
    async function handleHinzufügen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/hinzufuegen" + "?" + query.toString();
        ;
        await fetch(url);
        console.log("test");
    }
    async function handleAnzeigen() {
        let url = "https://annaalehmanngis.herokuapp.com";
        url += "/anzeigen";
        let antwort = await fetch(url, { method: "get" });
        let text = await antwort.text();
        document.getElementById("serverAntwort").innerHTML = text;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map