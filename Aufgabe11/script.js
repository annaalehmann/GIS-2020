"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    document.getElementById("datenHinzufügen")?.addEventListener("click", handleHinzufügen);
    document.getElementById("datenAnzeigen")?.addEventListener("click", handleAnzeigen);
    async function handleHinzufügen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com";
        url += "/hinzufügen";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("form")?.reset();
        await fetch(url);
    }
    async function handleAnzeigen() {
        let url = "https://annaalehmanngis.herokuapp.com";
        url += "/anzeigen";
        let antwort = await fetch(url, { method: "get" });
        let zweiteAntwort = await antwort.text();
        document.getElementById("serverAntwort").innerHTML = zweiteAntwort;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map