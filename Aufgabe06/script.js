"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Lippenstifte
    let brave = {
        bild: "mac_lipstick/mac_brave.png",
        name: "Brave",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 21.00,
        lippenstift: true,
        lipliner: false
    };
    let mehr = {
        bild: "mac_lipstick/mac_mehr.png",
        name: "Mehr",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false
    };
    let faux = {
        bild: "mac_lipstick/mac_faux.png",
        name: "Faux",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false
    };
    let twig = {
        bild: "mac_lipstick/mac_twig.png",
        name: "Twig",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false
    };
    let kindaSexy = {
        bild: "mac_lipstick/mac_kinda_sexy.png",
        name: "Kinda Sexy",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false
    };
    let velvetTeddy = {
        bild: "mac_lipstick/mac_velvet_teddy.png",
        name: "Velvet Teddy",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 21.00,
        lippenstift: true,
        lipliner: false
    };
    let mocha = {
        bild: "mac_lipstick/mac_mocha.png",
        name: "Mocha",
        beschreibung: "Ein cremiger Lippenstift mit weichem Gefühl, mittlerer bis voller, aufbaubarer Deckkraft und Satin finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false
    };
    let whirl = {
        bild: "mac_lipstick/mac_whirl.png",
        name: "Whirl",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false
    };
    let russianRed = {
        bild: "mac_lipstick/mac_russian_red.png",
        name: "Russian Red",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false
    };
    let ladyDanger = {
        bild: "mac_lipstick/mac_lady_danger.png",
        name: "Lady Danger",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 22.00,
        lippenstift: true,
        lipliner: false
    };
    let rubyWoo = {
        bild: "mac_lipstick/mac_ruby_woo.png",
        name: "Ruby Woo",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 23.00,
        lippenstift: true,
        lipliner: false
    };
    let fudge = {
        bild: "mac_lipstick/mac_double_fudge.png",
        name: "Fudge",
        beschreibung: "Eine cremig, reichhaltige Formel mit starker Farbpigmentierung und Mattem, nicht-glänzendem Finish.",
        preis: 24.00,
        lippenstift: true,
        lipliner: false
    };
    //Lipliner
    let cherryRed = {
        bild: "mac_lip_pensil/mac_cherry_red.png",
        name: "Cherry Red",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };
    let chicory = {
        bild: "mac_lip_pensil/mac_chicory.png",
        name: "Chicory",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };
    let cork = {
        bild: "mac_lip_pensil/mac_cork.png",
        name: "Cork",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };
    let dervish = {
        bild: "mac_lip_pensil/mac_dervish.png",
        name: "Dervish",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 20.00,
        lippenstift: false,
        lipliner: true
    };
    let halfRed = {
        bild: "mac_lip_pensil/mac_half_red.png",
        name: "Half Red",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 16.00,
        lippenstift: false,
        lipliner: true
    };
    let hover = {
        bild: "mac_lip_pensil/mac_hover.png",
        name: "Hover",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };
    let oak = {
        bild: "mac_lip_pensil/mac_oak.png",
        name: "Oak",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };
    let macRedd = {
        bild: "mac_lip_pensil/mac_redd.png",
        name: "Mac Redd",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };
    let rosyRim = {
        bild: "mac_lip_pensil/mac_rosy_rim.png",
        name: "Rosy Rim",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };
    let rubyWoo2 = {
        bild: "mac_lip_pensil/mac_ruby_woo.png",
        name: "Ruby Woo",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 18.00,
        lippenstift: false,
        lipliner: true
    };
    let sensation = {
        bild: "mac_lip_pensil/mac_sensation.png",
        name: "Sensation",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 19.00,
        lippenstift: false,
        lipliner: true
    };
    let soar = {
        bild: "mac_lip_pensil/mac_soar.png",
        name: "Soar",
        beschreibung: "Lippenkonturenstift in einer großen Auswahl an Farbnuancen für das definieren, umranden oder ausfüllen der Lippen.",
        preis: 17.00,
        lippenstift: false,
        lipliner: true
    };
    //Auf HTML Elemente zugreifen 
    let array = [brave, mehr, faux, twig, kindaSexy, velvetTeddy, mocha, whirl, russianRed, ladyDanger, rubyWoo, fudge, cherryRed,
        chicory, cork, dervish, halfRed, hover, oak, macRedd, rosyRim, rubyWoo2, sensation, soar];
    for (let i = 0; i < array.length; i++) {
        if (array[i].lippenstift) {
            let div = document.createElement("div");
            div.id = "produktLippenstift" + i;
            document.getElementById("Lippenstift")?.appendChild(div);
            let bildLippenstift = document.createElement("img");
            bildLippenstift.src = array[i].bild;
            document.getElementById("produktLippenstift" + i)?.appendChild(bildLippenstift);
            let nameLippenstift = document.createElement("h3");
            nameLippenstift.innerHTML = array[i].name;
            document.getElementById("produkLippenstift" + i)?.appendChild(nameLippenstift);
            let beschreibungLippenstift = document.createElement("p");
            beschreibungLippenstift.innerHTML = array[i].beschreibung;
            document.getElementById("produktLippenstift" + i)?.appendChild(beschreibungLippenstift);
            let preisLippenstift = document.createElement("h4");
            preisLippenstift.innerHTML = array[i].preis.toFixed(2) + "€";
            document.getElementById("produktLippenstift" + i)?.appendChild(preisLippenstift);
            let button = document.createElement("button");
            document.getElementById(array[i].name)?.appendChild(button);
            document.getElementById("produktLippenstift" + i)?.appendChild(button);
            button.innerHTML = "In den Warenkorb";
            button.setAttribute("preis", array[i].preis.toLocaleString());
            button.addEventListener("click", handlerWarenkorb);
        }
        else if (array[i].lipliner) {
            let div = document.createElement("div");
            div.id = "produktLipliner" + i;
            document.getElementById("Lipliner")?.appendChild(div);
            let bildLipliner = document.createElement("img");
            bildLipliner.src = array[i].bild;
            document.getElementById("produktLipliner" + i)?.appendChild(bildLipliner);
            let nameLipliner = document.createElement("h3");
            nameLipliner.innerHTML = array[i].name;
            document.getElementById("produktLipliner" + i)?.appendChild(nameLipliner);
            let beschreibungLipliner = document.createElement("p");
            beschreibungLipliner.innerHTML = array[i].beschreibung;
            document.getElementById("produktLipliner" + i)?.appendChild(beschreibungLipliner);
            let preisLipliner = document.createElement("h4");
            preisLipliner.innerHTML = array[i].preis.toFixed(2) + "€";
            document.getElementById("produktLipliner" + i)?.appendChild(preisLipliner);
            let button = document.createElement("button");
            document.getElementById(array[i].name)?.appendChild(button);
            document.getElementById("produktLipliner" + i)?.appendChild(button);
            button.innerHTML = "In den Warenkorb";
            button.setAttribute("preis", array[i].preis.toLocaleString());
            button.addEventListener("click", handlerWarenkorb);
        }
    }
    let preisRechner = 0;
    let kreisDiv = document.createElement("div");
    kreisDiv.id = "kreisDiv";
    let zaehlerArtikel = 0;
    //Teilaufgabe 1
    function handlerWarenkorb(_event) {
        if (zaehlerArtikel >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(kreisDiv);
        }
        zaehlerArtikel += 1;
        kreisDiv.innerHTML = zaehlerArtikel + "";
        preisRechner += parseInt(_event.currentTarget?.getAttribute("preis"));
        console.log("Warenkorbwert: " + preisRechner.toFixed(2) + " €");
    }
    //Teilaufgabe 2
    let kategorieLippenstift = document.querySelector("#kLippenstift");
    kategorieLippenstift.id = "lippenstift";
    kategorieLippenstift.addEventListener("click", handlerKategorie1);
    let kategorieLipliner = document.querySelector("#kLipliner");
    kategorieLipliner.id = "lipliner";
    kategorieLipliner.addEventListener("click", handlerKategorie1);
    function handlerKategorie1(_event) {
        if (_event.currentTarget.getAttribute("id") == "lippenstift") {
            lippenstif();
        }
        else if (_event.currentTarget.getAttribute("id") == "lipliner") {
            lipliner();
        }
    }
    function lippenstif() {
        document.getElementById("Lippenstift").style.display = "inline-grid";
        document.getElementById("lippenstift_ueberschrift").style.display = "inline-grid";
        document.getElementById("Lipliner").style.display = "none";
        document.getElementById("lipliner_ueberschrift").style.display = "none";
    }
    function lipliner() {
        document.getElementById("Lippenstift").style.display = "none";
        document.getElementById("lippenstift_ueberschrift").style.display = "none";
        document.getElementById("Lipliner").style.display = "inline-grid";
        document.getElementById("lipliner_ueberschrift").style.display = "inline-grid";
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map