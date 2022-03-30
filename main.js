// Oppgave 1
// Hensikten med en funksjon er å lage noe man kan kalle på for å bruke en spesifik kode flere ganger uten å bruke for mange 
// linjer på det.

// Oppgave 2 
function helloWorld() {
    console.log("Hello World!");
}
// For å lage en funksjon må man først si at det man lager skal være en funksjon ved å skrive "function" først. Etter det så gir du
// variabelen et navn også to parantes hvor man kan gi funksjonen noen parametere. Deretter lager du et scope for funksjonen hvor du
// skriver koden som skal være i funksjonen.

helloWorld();

// For å kalle på en funksjon så skriver man navnet på funksjonen og to parantes hvor man kan skrive eventuelle parametere

// Oppgave 3
// En parameter er navnene som er gitt i funksjonen sin definisjon. Parametere har en default verdi av "undefined". En parameter i et
// funksjonskall er argumentene til en funksjon. Forskjellen på et argument og en parameter er at når et argument sin verdi blir endret
// så bytter den ikke parameteren sin originale verdi. Et argument blir skrevet når en funksjon blir kalt på, mens en parameter
// blir skrevet når funksjonen blir lagd.

// Oppgave 4
function enParameter(input) {
    console.log(input);
}

enParameter("Min parameter er");
enParameter("Plobslob");

// Oppgave 5
function toParametere(input, input2){
    console.log(`Jeg fikk to parametere; ${input} og ${input2}`)
}

toParametere("crocs", "uggs")

// Oppgave 6
// Return avslutter funksjonen og gir en verdi tilbake til konsollen/den som kalte på funksjonen.

// Oppgave 7
function addNumbers(a, b){
    if(typeof(a) == 'number' && typeof(b) == 'number'){
        console.log(`${a} + ${b} = ${a + b}`)
    }
}

addNumbers(2, 3)

// Oppgave 8 
// Hvis du skal lage en funksjon uten et bestemt antall parametere, så må du bruke noe som heter spread operator. Dette bruker du
// ved å skrive "(...[spread])" i stedet for parametere i funksjonen. Deretter lager du en for løkke som for eksempel skriver
// ut alle navnene i listen.

function unknownParameters(...navn){
    for (let i = 0; i < navn.length; i++) {
        console.log(navn[i]);
    }
}

unknownParameters("Yo", "Fo", "Sho")

// RETTESKJEMA
// Oppgave 1   Besvarelsen er forankret i minst to hovedpoenger    2/2 

// Oppgave 2   Besvarelsen ‘dissekerer’ funksjonen i sine hoveddeler og forklarer hva  som er hensikten med dem.       5/5 

// Oppgave 3   Det er tydelig forklart hva som er skille mellom parametere og argumenter Besvarelsen viser tydelig at du har forstått forskjellen 4 /4 

// Oppgave 4   Løsningen er i henhold til oppgaven og testingen viser at den fungerer 4/4 

// Oppgave 5 Løsningen er i henhold til oppgaven og testingen viser at den fungerer 4/4 

// Oppgave 6 Besvarelsen kan redegjøre for hvordan koden vil oppføre seg ved return; 

// -hvordan påvirker det et scope? 

// -hvordan påvirker det koden rundt?      6/6 

// Oppgave 7 Løsningen har kun én utgang 

// Testen demonsterer bruk av retur enten via variabel, eller via en Utskrift          6/6 

// Oppgave 8  

// -den tekstlige forklaringen viser at du har en teoretisk forståelse av 

// Hvordan du kan løse oppgaven, og hvilke begreper som er relevante 4/4 

// -den praktiske løsningen og testingen viser at du kan løse problemet med relevant funksjonalitet.       4/4 

 
// Total poengsum          29/29 

 