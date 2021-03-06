namespace Aufgabe09 {
    
    
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handleButtonHTML);

    let submitBut: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    submitBut.addEventListener("click", handleButtonJSON);

    let formData: FormData;

    async function handleButtonHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://annaalehmanngis.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwortText: string = await antwort.text();
        console.log(antwortText);

        let serverAntwort: HTMLElement = <HTMLElement> document.getElementById("ausgabeServer");
        serverAntwort.innerHTML = antwortText;
    }
    
    async function handleButtonJSON(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://annaalehmanngis.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwortText: string = await antwort.json();
        console.log(antwortText);
        
    }
}
