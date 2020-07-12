"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    document.getElementById("versandDaten")?.addEventListener("click", communicateAdd);
    document.getElementById("anfrageServer")?.addEventListener("click", communicateShow);
    
    async function communicateAdd() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com";
        url += "/add";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("form")?.reset();
        await fetch(url);
    }
   
    async function communicateShow() {
        let url = "https://annaalehmanngis.herokuapp.com";
        url += "/show";
        let antwort = await fetch(url, { method: "get" });
        let zweiteAntwort = await antwort.text();
        document.getElementById("serverAntwort").innerHTML = zweiteAntwort;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map