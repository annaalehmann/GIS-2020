namespace Aufgabe06 {

    interface Produkt {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        lippenstift: boolean;
        lipliner: boolean;
    }

    //Lippenstifte
    let brave: Produkt = {
        bild: "mac_lipstick/mac_brave.png",
        name: "Brave",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 21.00,
        lippenstift: true,
        lipliner: false
    };

    let mehr: Produkt = {
        bild: "mac_lipstick/mac_mehr.png",
        name: "Mehr",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false

    };

    let faux: Produkt = {
        bild: "mac_lipstick/mac_faux.png",
        name: "Faux",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false

    };

    let twig: Produkt = {
        bild: "mac_lipstick/mac_twig.png",
        name: "Twig",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false

    };


    let kindaSexy: Produkt = {
        bild: "mac_lipstick/mac_kinda_sexy.png",
        name: "Kinda Sexy",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false

    };

    let velvetTeddy: Produkt = {
        bild: "mac_lipstick/mac_velvet_teddy.png",
        name: "Velvet Teddy",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 21.00,
        lippenstift: true,
        lipliner: false

    };

    let mocha: Produkt = {
        bild: "mac_lipstick/mac_mocha.png",
        name: "Mocha",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false

    };

    let whirl: Produkt = {
        bild: "mac_lipstick/mac_whirl.png",
        name: "Whirl",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false

    };

    let russianRed: Produkt = {
        bild: "mac_lipstick/mac_russian_red.png",
        name: "Russian Red",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false

    };

    let ladyDanger: Produkt = {
        bild: "mac_lipstick/mac_lady_danger.png",
        name: "Lady Danger",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false

    };

    let rubyWoo: Produkt = {
        bild: "mac_lipstick/mac_ruby_woo.png",
        name: "Ruby Woo",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false
    };

    let fudge: Produkt = {
        bild: "mac_lipstick/mac_double_fudge.png",
        name: "Fudge",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false
    };

    //Lipliner

    let cherryRed: Produkt = {
        bild: "mac_lip_pensil/mac_cherry_red.png",
        name: "Cherry Red",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };

    let chicory: Produkt = {
        bild: "mac_lip_pensil/mac_chicory.png",
        name: "Chicory",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };

    let cork: Produkt = {
        bild: "mac_lip_pensil/mac_cork.png",
        name: "Cork",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };

    let dervish: Produkt = {
        bild: "mac_lip_pensil/mac_dervish.png",
        name: "Dervish",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 20.00,
        lippenstift: false,
        lipliner: true
    };

    let halfRed: Produkt = {
        bild: "mac_lip_pensil/mac_half_red.png",
        name: "Half Red",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 16.00,
        lippenstift: false,
        lipliner: true
    };

    let hover: Produkt = {
        bild: "mac_lip_pensil/mac_hover.png",
        name: "Hover",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };

    let oak: Produkt = {
        bild: "mac_lip_pensil/mac_oak.png",
        name: "Oak",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };

    let macRedd: Produkt = {
        bild: "mac_lip_pensil/mac_redd.png",
        name: "Mac Redd",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };

    let rosyRim: Produkt = {
        bild: "mac_lip_pensil/mac_rosy_rim.png",
        name: "Rosy Rim",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };

    let rubyWoo2: Produkt = {
        bild: "mac_lip_pensil/mac_ruby_woo.png",
        name: "Ruby Woo",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };

    let sensation: Produkt = {
        bild: "mac_lip_pensil/mac_sensation.png",
        name: "Sensation",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };

    let soar: Produkt = {
        bild: "mac_lip_pensil/mac_soar.png",
        name: "Soar",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };




    //Auf HTML Elemente zugreifen 

    let array: Array<Produkt> = [brave, mehr, faux, twig, kindaSexy, velvetTeddy, mocha, whirl, russianRed, ladyDanger, rubyWoo, fudge, cherryRed,
        chicory, cork, dervish, halfRed, hover, oak, macRedd, rosyRim, rubyWoo2, sensation, soar];


    for (let i: number = 0; i < array.length; i++) {

        if (array[i].lippenstift) {

            let div: HTMLDivElement = document.createElement("div");
            div.id = "produktLippenstift" + i;
            document.getElementById("Lippenstift")?.appendChild(div);

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
            button.addEventListener("click", handlerWarenkorb);
        }
    }

    //Teilaufgabe 1

    let preisRechner: number = 0;
    let kreisDiv: HTMLDivElement = document.createElement("div");
    kreisDiv.id = "kreisDiv";
    let zaehlerArtikel: number = 0;

    function handlerWarenkorb(_event: Event): void {

        if (zaehlerArtikel >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
        }

        zaehlerArtikel += 1;
        kreisDiv.innerHTML = zaehlerArtikel + "";

        let nameProdukt: string = (<HTMLElement>_event.currentTarget)?.getAttribute("name")!;
        preisRechner += parseInt((<HTMLElement>_event.currentTarget)?.getAttribute("preis")!);
        console.log("+" + nameProdukt + " " + preisRechner.toFixed(2) + " €");
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
