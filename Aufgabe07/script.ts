namespace Aufgabe07 {

    export function getProdukte(): void {
        for (let i: number = 0; i < produkte.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            div.id = "produkte" + i;

            if (produkte[i].kategorie == 1) {
                document.getElementById("Lippenstift")?.appendChild(div);  
            }

            else if (produkte[i].kategorie == 2) {
                document.getElementById("Lipliner")?.appendChild(div);

            }

            
            let bild: HTMLImageElement = document.createElement("img");
            bild.src = produkte[i].bild;
            div.appendChild(bild);

            let name: HTMLElement = document.createElement("h3");
            name.innerHTML = produkte[i].name;
            div.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = produkte[i].beschreibung;
            div.appendChild(beschreibung);


            let preis: HTMLElement = document.createElement("h4");
            preis.innerHTML = produkte[i].preis.toFixed(2) + "€";
            div.appendChild(preis);


            let button: HTMLElement = document.createElement("button");
            div.appendChild(button);
            button.innerHTML = "In den Warenkorb";

            button.setAttribute("preis", produkte[i].preis.toLocaleString());
            button.setAttribute("name", produkte[i].name);
            button.addEventListener("click", handlerWarenkorb);
            button.setAttribute("newIndex", i.toString());
        }
    }

    Aufgabe07.getProdukte = getProdukte;
    //Teilaufgabe 1
    let preisRechner: number = 0;
    let kreisDiv: HTMLDivElement = document.createElement("div");
    kreisDiv.id = "kreisDiv";
    let zaehlerArtikel: number = 0;
    let ind: number = 0; 


    function handlerWarenkorb(_event: Event): void {

        if (zaehlerArtikel >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
        }

        zaehlerArtikel += 1;
        kreisDiv.innerHTML = zaehlerArtikel + "";

        let nameProdukt: string = (<HTMLElement>_event.currentTarget)?.getAttribute("name")!;
        preisRechner += parseInt((<HTMLElement>_event.currentTarget)?.getAttribute("preis")!);
        console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");

        let target: HTMLElement = (<HTMLElement>_event.target);
        let wclick: string = "" + target.getAttribute("newIndex");
        let arvar: number = + wclick;

        localStorage.setItem("namen" + zaehlerArtikel, produkte[arvar].name);
        localStorage.setItem("preis" + zaehlerArtikel, (produkte[arvar].preis).toString());
        localStorage.setItem("bild" + zaehlerArtikel, produkte[arvar].bild);
        ind++;

        console.log(localStorage);
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

