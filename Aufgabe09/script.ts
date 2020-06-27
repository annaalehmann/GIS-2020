namespace Aufgabe09 {

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonjson?.addEventListener("click", handleButtonJson);

    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonhtml?.addEventListener("click", handleButtonHtml);

    async function handleButtonHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://annaalehmanngis.herokuapp.com/";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();

        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("ausgabeServer");
        serverResponse.innerHTML = responseText;
    }

    async function handleButtonJson(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://annaalehmanngis.herokuapp.com/";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();        
        console.log(responseText);

    }
}
