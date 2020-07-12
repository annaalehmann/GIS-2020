"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A09Server;
(function (A09Server) {
    let daten;
    let datenUrl;
    datenUrl = "mongodb+srv://annaalehmann:hallo12345@gis2020.pgckc.mongodb.net/Test?retryWrites=true&w=majority";
    //mongodb+srv://annaalehmann:hallo12345@gis2020.pgckc.mongodb.net/Test?retryWrites=true&w=majority
    //https://mongodbnetbrowser.herokuapp.com/?u=annaalehmann&p=hallo12345&a=gis2020.drdqs.mongodb.net&n=Test&c=Students
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    connectToDatabase(datenUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Test").collection("Students");
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/hinzugüfen") {
                daten.insertOne(url.query);
            }
            else if (url.pathname == "/anzeigen") {
                _response.write(JSON.stringify(await daten.find().toArray()));
            }
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map