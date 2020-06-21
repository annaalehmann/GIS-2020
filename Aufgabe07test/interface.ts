namespace Aufgabe07 {

    export interface Produkt {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }

    export let produkte: Produkt[];
    loadArtikel("produkte.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        console.log(jsonArray);

        produkte = await JSON.parse(JSON.stringify(jsonArray));
        console.log(produkte);

        getProdukte();
}

}