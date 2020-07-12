import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace A09Server {
  let mongoDaten: Mongo.Collection;
  let databaseUrl: string;

  databaseUrl = "mongodb+srv://annaalehmann:hallo12345@gis2020.pgckc.mongodb.net/gis2020?retryWrites=true&w=majority";

  //mongodb+srv://annaalehmann:hallo12345@gis2020.pgckc.mongodb.net/gis2020?retryWrites=true&w=majority


  console.log("Starting server");

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  connectToDatabase(databaseUrl);

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    mongoDaten = mongoClient.db("Test").collection("Students");
  } 

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string = <string>url.pathname;

      if (path == "/json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);

        console.log(jsonString);
      }

      else if (path == "/html") {

        for (let key in url.query) {
          _response.write(key + ":" + url.query[key] + "<br/>");

        }
      }
    }
    _response.end();
  }
}