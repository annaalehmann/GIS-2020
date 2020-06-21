namespace Aufgabe07 {

    loadArtikel("produkte.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        console.log(jsonArray);
        produkte = await JSON.parse(JSON.stringify(jsonArray));
        console.log(produkte);
        get();
}

    export function get(): void {
        for (let i: number = 0; i < produkt.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            div.id = "produkte" + i;

            if (produkt[i].kategorie == 1) {
                document.getElementById("Lippenstift")?.appendChild(div);
                div.setAttribute("NewIndex", i.toString());
            }

            else if (produkt[i].kategorie == 2) {
                document.getElementById("Lipliner")?.appendChild(div);
                div.setAttribute("NewIndex", i.toString());

            }


            let bild: HTMLImageElement = document.createElement("img");
            bild.src = produkt[i].bild;
            div.appendChild(bild);

            let name: HTMLElement = document.createElement("h3");
            name.innerHTML = produkt[i].name;
            div.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = produkt[i].beschreibung;
            div.appendChild(beschreibung);


            let preis: HTMLElement = document.createElement("h4");
            preis.innerHTML = produkt[i].preis.toFixed(2) + "€";
            div.appendChild(preis);


            let button: HTMLElement = document.createElement("button");
            div.appendChild(button);
            button.innerHTML = "In den Warenkorb";

            button.setAttribute("preis", produkt[i].preis.toLocaleString());
            button.setAttribute("name", produkt[i].name);
            button.addEventListener("click", handlerWarenkorb);
        }
    }

    //Teilaufgabe 1
    let preisRechner: number = 0;
    let kreisDiv: HTMLDivElement = document.createElement("div");
    kreisDiv.id = "kreisDiv";
    let zaehlerArtikel: number = 0;

    let inhaltWarenkorb: Produkt[] = [];

    function handlerWarenkorb(_event: Event): void {

        if (zaehlerArtikel >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
        }

        zaehlerArtikel += 1;
        kreisDiv.innerHTML = zaehlerArtikel + "";

        let nameProdukt: string = (<HTMLElement>_event.currentTarget)?.getAttribute("name")!;
        preisRechner += parseInt((<HTMLElement>_event.currentTarget)?.getAttribute("preis")!);
        console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");

        let inBu: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("NewIndex")!;
        let iNr: number = parseInt(inBu);

        inhaltWarenkorb.push(produkt[iNr]);
        localStorage.setItem("bild", produkt[iNr].bild);
        localStorage.setItem("name", produkt[iNr].name);
        localStorage.setItem("preis", produkt[iNr].preis.toString());
        localStorage.setItem("anzahlProdukte", inhaltWarenkorb.length.toString());

        console.log(localStorage);
        console.log(inhaltWarenkorb.length);
    }


    //Teilaufgabe 2
    let kategorieLippenstift: HTMLAnchorElement = <HTMLAnchorElement>document.querySelector("#kLippenstift");
    kategorieLippenstift.id = "lippenstift";
    kategorieLippenstift.addEventListener("click", handlerKategorie1);

    let kategorieLipliner: HTMLAnchorElement = <HTMLAnchorElement>document.querySelector("#kLipliner");
    kategorieLipliner.id = "lipliner";
    kategorieLipliner.addEventListener("click", handlerKategorie1);

    let kategorieBeide: HTMLAnchorElement = <HTMLAnchorElement>document.querySelector("#kalle");
    kategorieBeide.id = "alle";
    kategorieBeide.addEventListener("click", handlerKategorie1);


    function handlerKategorie1(_event: Event): void {
        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "lippenstift") {
            lippenstif();
        }

        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "lipliner") {
            lipliner();
        }

        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "alle") {
            beide();
        }
    }

    function lippenstif(): void {
        (<HTMLElement>document.getElementById("Lippenstift")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("lippenstift_ueberschrift")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("Lipliner")).style.display = "none";
        (<HTMLElement>document.getElementById("lipliner_ueberschrift")).style.display = "none";
    }

    function lipliner(): void {
        (<HTMLElement>document.getElementById("Lippenstift")).style.display = "none";
        (<HTMLElement>document.getElementById("lippenstift_ueberschrift")).style.display = "none";
        (<HTMLElement>document.getElementById("Lipliner")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("lipliner_ueberschrift")).style.display = "inline-grid";
    }

    function beide(): void {
        (<HTMLElement>document.getElementById("Lippenstift")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("lippenstift_ueberschrift")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("Lipliner")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("lipliner_ueberschrift")).style.display = "inline-grid";
    }
}

