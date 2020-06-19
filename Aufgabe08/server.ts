import * as Http from "http";

export namespace A08Server {
// in der Konsole wird der Start des Servers angegeben 
  console.log("Starting server");

  let port: number = Number(process.env.PORT);
  if (!port) //wenn es den Port nicht gibt 
   // bekommt der Port den Wert 8100
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  //der Server hört zu (listening) und nimmt die Aufrufe wahr
  function handleListen(): void {
    console.log("Listening");
  }
    // durch diese Funktion wird "I hear voices!" ausgegeben, sobald der Server neu geladen wird
    //Diese Funktion wird ausgelöst, wenn handleListening einen Aufruf wahrnimmt
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}