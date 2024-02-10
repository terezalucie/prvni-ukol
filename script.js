// TOTO JE PŘEVODNÍK TEPLOTY Z FAHRENHEIT (°F) NA CELSIA (°C)


// PRVNÍ ŘEŠENÍ:


let teplota = Number(prompt("Zadej teplotu v °F: "))
let vypocet = Math.floor((teplota - 32) * 5 / 9)

document.body.innerHTML = "<h1>" + "Výsledek převodu teploty z " + teplota + "°F je: " + "<div>" + vypocet + "°C" + "</div>" + "</h1>"


/* KOMENTÁŘ POSTUP:

1. Vytvořila jsem si proměnou teplota, do které jsem uložila funkci prompt.
2. Vytvořila jsem další proměnnou s názvem výpočet, do které jsem uložila výsledek promptu + výpočet pro převod z Fahrenheitu na Celsia.
3. Do document.body.innerHTML - jsem vypsala výsledek proměnné (vypocet.)
*/




// DRUHÉ ŘEŠENÍ:

/* 
  let otazka = prompt("Na jakou teplotu chceš převádět? Pro převod z Fahrenheitů na stupně Celsia zadej 'C', pro převod z Celsiů na stupně Fahrenheita zadej 'F'.", "C / F")

if(otazka === "C"){
    let teplota1 = Number(prompt("Zadej teplotu v °F:"))
    let vypocet1 = Math.floor((teplota1 - 32) * 5 / 9)
    document.body.innerHTML = "<h1>" + "Výsledek převodu teploty z " + teplota1 + "°F je: " + "<div>" + vypocet1 + "°C" + "</div>" + "</h1>"
} else if(otazka === "F"){
    let teplota2 = Number(prompt("Zadej teplotu v °C:"))
    let vypocet2 = Math.floor((teplota2 * 9 / 5) + 32) 
    document.body.innerHTML = "<h1>" + "Výsledek převodu teploty z " + teplota2 + "°C je: " + "<div>" + vypocet2 + "°F" + "</div>" + "</h1>"
} else {
    document.body.innerHTML = "<h1>" + "Zadal/a jsi něco špatně. " + "</h1>"
}  
 */


/*KOMENTÁŘ: POSTUP:
 (Napadlo mě, že by se aplikace nejprve zeptala, jestli chceme převádět z Celsia na Fahrenheity anebo naopak.)

1. Stanovila jsem proměnnou –  otázka, ve které je uložená funkce prompt, která se nejprve zeptá, jestli chceme převádět na Celsia anebo na Fahrenheity. Pro převod z °F na °C se zadá – ‚C‘. Pro převod z °C na °F se zadá – ‚F‘. 
2. Přes podmínku if, else if a else, jsem vytvořila tři možnosti, toho, co se bude dít.
3. Pokud se v prvním promptu zadalo C, vyskočí další prompt s požadavkem na zadání teploty v °F. Zadanou hodnotu jsem uložila do proměnné 'teplota1'. V další proměnné 'vypocet1' vezmu 'teplotu1' a provede se výpočet (teplota1 - 32) * 1.8. Výsledek nechám vypsat do těla stránky. Ještě jsem použila funkci Math.floor, která výsledek zaokrouhlí dolů. 
4. Stejně tak postupuju u druhé podmínky (else if), kdy je rozdíl v zadaném písmenu 'F' a ve výpočtu z °F na °C se požije obrácený vzorec pro výpočet. 
5. Pokud se neprovede ani jedna z přechozích podmínek, vyskočí (else). To znamená, že zadání nebylo splněno. V prvním promptu, nebylo správně zadané písmeno a to 'F' anebo 'C'. 
 */


