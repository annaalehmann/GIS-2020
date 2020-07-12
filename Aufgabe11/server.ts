import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe11 {
  
  let datenUrl: string;
  datenUrl = "mongodb+srv://annaalehmann:hallo12345@gis2020.pgckc.mongodb.net/Test?retryWrites=true&w=majority";
  verbindungDatenbank(datenUrl);
 
  let daten: Mongo.Collection;

  console.log("Starting server");

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  async function verbindungDatenbank(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    daten = mongoClient.db("Test").collection("Students");
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");


    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let pathname: String | null = url.pathname;

      if (pathname == "/hinzufuegen") {

        daten.insertOne(url.query);

      } else if (pathname == "/anzeigen") {
        _response.write(JSON.stringify(await daten.find().toArray()));
      }
    }

    _response.end();
  }
}