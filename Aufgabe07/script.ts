namespace Aufgabe07 {

    produkteAnzeigen("produkte.json");

    async function produkteAnzeigen(_url: string): Promise<void> {
        let antwort: Response = await fetch(_url);
        let wiedergabeJSON: String = await antwort.json();
        array = await JSON.parse(JSON.stringify(wiedergabeJSON));

        produkt();
    }

    export function produkt(): void {
        for (let i: number = 0; i < array.length; i++) {

            if (array[i].lippenstift) {

                let div: HTMLDivElement = document.createElement("div");
                div.id = "produktLippenstift" + i;
                document.getElementById("Lippenstift")?.appendChild(div);
                div.setAttribute("produktSpeichern", i.toString());

                let bildLippenstift: HTMLImageElement = document.createElement("img");
                bildLippenstift.src = array[i].bild;
                document.getElementById("produktLippenstift" + i)?.appendChild(bildLippenstift);

                let nameLippenstift: HTMLElement = document.createElement("h3");
                nameLippenstift.innerHTML = array[i].name;
                document.getElementById("produktLippenstift" + i)?.appendChild(nameLippenstift);

                let beschreibungLippenstift: HTMLElement = document.createElement("p");
                beschreibungLippenstift.innerHTML = array[i].beschreibung;
                document.getElementById("produktLippenstift" + i)?.appendChild(beschreibungLippenstift);

                let preisLippenstift: HTMLElement = document.createElement("h4");
                preisLippenstift.innerHTML = array[i].preis.toFixed(2) + "€";
                document.getElementById("produktLippenstift" + i)?.appendChild(preisLippenstift);


                let button: HTMLElement = document.createElement("button");
                document.getElementById(array[i].name)?.appendChild(button);
                document.getElementById("produktLippenstift" + i)?.appendChild(button);
                button.innerHTML = "In den Warenkorb";
                button.setAttribute("preis", array[i].preis.toLocaleString());
                button.setAttribute("name", array[i].name);
                button.addEventListener("click", handlerWarenkorb);
            }

            else if (array[i].lipliner) {

                let div: HTMLDivElement = document.createElement("div");
                div.id = "produktLipliner" + i;
                document.getElementById("Lipliner")?.appendChild(div);
                div.setAttribute("produktSpeichern", i.toString());

                let bildLipliner: HTMLImageElement = document.createElement("img");
                bildLipliner.src = array[i].bild;
                document.getElementById("produktLipliner" + i)?.appendChild(bildLipliner);

                let nameLipliner: HTMLElement = document.createElement("h3");
                nameLipliner.innerHTML = array[i].name;
                document.getElementById("produktLipliner" + i)?.appendChild(nameLipliner);

                let beschreibungLipliner: HTMLElement = document.createElement("p");
                beschreibungLipliner.innerHTML = array[i].beschreibung;
                document.getElementById("produktLipliner" + i)?.appendChild(beschreibungLipliner);

                let preisLipliner: HTMLElement = document.createElement("h4");
                preisLipliner.innerHTML = array[i].preis.toFixed(2) + "€";
                document.getElementById("produktLipliner" + i)?.appendChild(preisLipliner);


                let button: HTMLElement = document.createElement("button");
                document.getElementById(array[i].name)?.appendChild(button);
                document.getElementById("produktLipliner" + i)?.appendChild(button);
                button.innerHTML = "In den Warenkorb";
                button.setAttribute("preis", array[i].preis.toLocaleString());
                button.setAttribute("name", array[i].name);
                button.setAttribute("speichern", array[i] + "");
                button.addEventListener("click", handlerWarenkorb);
            }

        }


        //Teilaufgabe 1
        let preisRechner: number = 0;
        let kreisDiv: HTMLDivElement = document.createElement("div");
        kreisDiv.id = "kreisDiv";
        let zaehlerArtikel: number = 0;

        let warenkorbProdukt: Produkt[] = [];

        function handlerWarenkorb(this: Produkt, _event: Event): void {

            if (zaehlerArtikel >= 0) {
                document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
            }

            zaehlerArtikel += 1;
            kreisDiv.innerHTML = zaehlerArtikel + "";

            let nameProdukt: string = (<HTMLElement>_event.currentTarget)?.getAttribute("name")!;
            preisRechner += parseInt((<HTMLElement>_event.currentTarget)?.getAttribute("preis")!);
            console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");

            //Daten abspeichern
            let speichernButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("produktSpeichern")!;
            let indexNr: number = parseInt(speichernButton);

            warenkorbProdukt.push(array[indexNr]);
            localStorage.setItem("produktBild" + (warenkorbProdukt.length - 1), array[indexNr].bild);
            localStorage.setItem("produktName" + (warenkorbProdukt.length - 1), array[indexNr].name);
            localStorage.setItem("produktBeschreibung" + (warenkorbProdukt.length - 1), array[indexNr].beschreibung);
            localStorage.setItem("produktPreis" + (warenkorbProdukt.length - 1), array[indexNr].preis.toFixed(2));
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

}