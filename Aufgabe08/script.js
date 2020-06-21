"use strict";
var Aufgabe082;
(function (Aufgabe082) {
    let button = document.getElementById("button");
    button.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        console.log("Benutzername " + formData.get("name"));
        console.log("Passwort " + formData.get("passwort"));
    }
})(Aufgabe082 || (Aufgabe082 = {}));
//# sourceMappingURL=script.js.map