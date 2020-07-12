namespace Aufgabe11{

document.getElementById("datenHinzufügen")?.addEventListener("click", handleHinzufügen);
document.getElementById("datenAnzeigen")?.addEventListener("click", handleAnzeigen);


async function handleHinzufügen(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]); 
    let url: string = "https://annaalehmanngis.herokuapp.com";
    url += "/add";

    let query: URLSearchParams = new URLSearchParams(<any> formData);
    url = url + "?" + query.toString();
    (<HTMLFormElement>document.getElementById("form"))?.reset();
    await fetch(url);
  }

async function handleAnzeigen(): Promise<void> {
    let url: string = "https://annaalehmanngis.herokuapp.com";
    url += "/show";
   
    let antwort: Response = await fetch(url, { method: "get" });
    let zweiteAntwort: string = await antwort.text(); 
    (<HTMLElement>document.getElementById("serverAntwort")).innerHTML  = zweiteAntwort;
  }
}