"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonjson = document.getElementById("buttonJSON");
    buttonjson?.addEventListener("click", handleButtonJson);
    let buttonhtml = document.getElementById("buttonHTML");
    buttonhtml?.addEventListener("click", handleButtonHtml);
    async function handleButtonHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com/";
        url += "/json";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("ausgabeServer");
        serverResponse.innerHTML = responseText;
    }
    async function handleButtonJson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com/";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map