namespace Aufgabe11 {

  let buttonHinzufügen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenHinzufügen"));
  buttonHinzufügen.addEventListener("click", handleHinzufügen);

  let buttonAnzeigen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenAnzeigen"));
  buttonAnzeigen.addEventListener("click", handleAnzeigen);


  async function handleHinzufügen(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://annaalehmanngis.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "/hinzufuegen" + "?" + query.toString(); ;
    await fetch(url);
  }

  async function handleAnzeigen(): Promise<void> {
    let url: string = "https://annaalehmanngis.herokuapp.com";
    url += "/anzeigen";

    let antwort: Response = await fetch(url, { method: "get" });
    let text: string = await antwort.text();
    (<HTMLElement>document.getElementById("serverAntwort")).innerHTML = text;

  }
}