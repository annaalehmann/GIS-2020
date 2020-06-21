import * as Http from "http";

export namespace A08Server {
// in der Konsole wird der Start des Servers angegeben 
  console.log("Starting server");

  let port: number = Number(process.env.PORT);
  if (!port) //wenn es den Port nicht gibt 
   // bekommt der Port den Wert 8100
    port = 8100;

  let server: Http.Server = Http.createServer(); //Servervariable wird festgelegt 
  server.addListener("request", handleRequest); //Listener erstellen für die Funktion handleListen
  server.addListener("listening", handleListen); //Listener erstellen für die Funktion handleListen
  server.listen(port);

  //der Server hört zu und Konsolenausgabe "Listening"
  function handleListen(): void {
    console.log("Listening");
  }
    
    //Diese Funktion wird ausgelöst, wenn handleListening einen Aufruf wahrnimmt
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    //Beim aufruf dieser Funktion wird "I hear voices!" ausgegeben 
    console.log("I hear voices!");

    //Hier werden die Paramete für die response festgelegt 
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    
    //Hier wird die URL ausgegeben 
    _response.write(_request.url);

    //Ende der Response
    _response.end();
  }
}