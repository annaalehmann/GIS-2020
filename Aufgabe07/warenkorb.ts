namespace Aufgabe07 {

    for (let i: number = 0; i <= length - 1; i++) {

        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("inhaltKorb")?.appendChild(div);
        div.id = "container" + i;

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = "" + localStorage.getItem("bild" + i);
        div.appendChild(bild);

        let name: HTMLElement = document.createElement("h3");
        name.innerHTML = "" + localStorage.getItem("name" + i);
        div.appendChild(name);

        let preis: HTMLElement = document.createElement("h4");
        preis.innerHTML = "" + localStorage.getItem("preis" + i) + "€";
        div.appendChild(preis);
        div.setAttribute("preis", preis.innerHTML);

        let löschen: HTMLButtonElement = document.createElement("button");
        löschen.innerHTML = "löschen";
        div.appendChild(löschen);

        löschen.addEventListener("click", handlelöschen);
        löschen.setAttribute("delete", i + "");
        div.setAttribute("lösch", i + "");

    }

    let allDelete: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("löschenButton"));
    allDelete.innerHTML = "Alles löschen";
    allDelete.addEventListener("click", handleAllesLöschen);


    function handlelöschen(_event: Event): void {
        let del: string = (<HTMLElement>_event.target).getAttribute("delete")!;
        localStorage.removeItem(del);
        (<HTMLDivElement>document.getElementById("contauiner" + del)).remove();
    }

    function handleAllesLöschen(_event: Event): void {
        for (let i: number = 0; i <= length; i++) {
            (<HTMLDivElement>document.getElementById("container" + i)).remove();
            localStorage.clear();
        }

    }

}







