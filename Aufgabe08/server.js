"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    // in der Konsole wird der Start des Servers angegeben 
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port) //wenn es den Port nicht gibt 
        // bekommt der Port den Wert 8100
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //der Server hört zu (listening) und nimmt die Aufrufe wahr
    function handleListen() {
        console.log("Listening");
    }
    // durch diese Funktion wird "I hear voices!" ausgegeben, sobald der Server neu geladen wird
    //Diese Funktion wird ausgelöst, wenn handleListening einen Aufruf wahrnimmt
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map