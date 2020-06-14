namespace Aufgabe07 {

    produkteAnzeigen("produkte,json");

    async function produkteAnzeigen(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url);
        let wiedergabeJSON: String = await antwort.json();
        array = await JSON.parse(JSON.stringify(wiedergabeJSON));

        produkt1();
    }

    //Produkte auflisten 
    export function produkt1(): void {
        

        for (let i: number = 0; i < localStorage.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("warenkorb")?.appendChild(div);
            div.id = "produkt" + i;
            

            let bild: HTMLImageElement = document.createElement("img");
            bild.innerHTML = array[parseInt(localStorage.getItem(i + "")!)].bild;
            bild.src = array[i].bild;
            document.getElementById("produkt" + i)?.appendChild(bild);

            let name: HTMLElement = document.createElement("h3");
            name.innerHTML = array[parseInt(localStorage.getItem(i + "")!)].name;
            document.getElementById("produkt" + i)?.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = array[parseInt(localStorage.getItem(i + "")!)].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibung);

            let preis: HTMLElement = document.createElement("h4");
            preis.innerHTML = array[parseInt(localStorage.getItem(i + "")!)].preis.toFixed(2) + "€";
            document.getElementById("produkt" + i)?.appendChild(preis);


            let löschen: HTMLButtonElement = document.createElement("button");
            document.getElementById("produkt" + i)?.appendChild(löschen);
            löschen.innerHTML = "löschen";

            löschen.setAttribute("delete", i + "");
            löschen.addEventListener("click", handlelöschen);
            
        }



        function handlelöschen(_event: Event): void {
            let löschen: string = (<HTMLElement>_event.target).getAttribute("delete")!;
            localStorage.removeItem(löschen);
            (<HTMLDivElement>document.getElementById("inhalt" + löschen)).remove();
        }

        }
    }

  
                