namespace Aufgabe082 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", clickButton);

    async function laden (_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: String = await response.text();
        console.log(response2);

    }

    function clickButton(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://annaalehmanngis.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        
        laden(url);
    }
}
