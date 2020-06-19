"use strict";
var Aufgabe082;
(function (Aufgabe082) {
    let button = document.getElementById("button");
    button.addEventListener("click", clickButton);
    async function laden(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        console.log(response2);
    }
    function clickButton() {
        let formData = new FormData(document.forms[0]);
        let url = "https://annaalehmanngis.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        laden(url);
    }
})(Aufgabe082 || (Aufgabe082 = {}));
//# sourceMappingURL=script.js.map