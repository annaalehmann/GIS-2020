namespace Aufgabe07 {

    for (let i: number = 0; i <= localStorage.length; i++) {

        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("inhaltKorb")?.appendChild(div);
        div.id = "warenkorb" + i;

        let bild: HTMLImageElement = document.createElement("img");
        bild.src =  "" + localStorage.getItem("bild" + i);
        div.appendChild(bild);

        let name: HTMLElement = document.createElement("h3");
        name.innerHTML = "" + localStorage.getItem("namen" + i);
        div.appendChild(name);

        let preis: HTMLElement = document.createElement("h4");
        preis.innerHTML = "" + localStorage.getItem("preis" + i);
        div.appendChild(preis);

        let löschen: HTMLButtonElement = document.createElement("button");
        löschen.innerHTML = "löschen";
        div.appendChild(löschen);

        löschen.addEventListener("click", handlelöschen);
        löschen.setAttribute("delete", i + "");
        div.setAttribute("löschen", i + "");
    }



    function handlelöschen(_event: Event): void {
        let löschen: string = (<HTMLElement>_event.target).getAttribute("delete")!;
        localStorage.removeItem(löschen);
        (<HTMLDivElement>document.getElementById("warenkorb" + löschen)).remove();
    }

}



