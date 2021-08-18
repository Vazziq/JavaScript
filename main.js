/* let osoba = {
    imie: 'Krystian', 
    nazwisko: 'Bilski',
    wiek: 24,
    szkoly: {
        podstawowa: 'nr. 7',
        gimnazjum: 'nr. 1',
        liceum: 'nr. 3',
    }
};

console.log(osoba);
*/

//for (let i = 12; i > 0; i--) {
  //  console.log('czesc ' + i)
//}

/* let osoba = {
    imie: 'Krystian',
    nazwisko: 'Bilski'
}
for (x in osoba) {
    console.log(x + ': ' + osoba[x]);
}
*/
/* let i = 0;
while (i < 5) {
    console.log('czesc ' + i);
    i++;
}
*/

/* function dodaj(x, y) {
    return x * y;
}

let a = dodaj(2,3);
let b = dodaj(6,2);
let c = dodaj(9,1);

console.log(a, b, c);
*/

/*
let dodaj = (function(x, y) {
    let mnoznik = 3;
    let wynik = (x + y) * mnoznik;
    console.log(wynik);
})(3,9)
*/
/*
let osoby = [
    {imie:'Johnny',nazwisko:'Deep',wiek:55},
    {imie:'Brad',nazwisko:'Pitt',wiek:55},
    {imie:'Tom',nazwisko:'Hanks',wiek:62},
]
for (let i = 0; i < osoby.length; i++){
    console.log(i, osoby[i].imie );
}
*/
/* osoby.forEach(function(x){
    console.log(x.imie);
})
*/
/*
let wynik = osoby.filter(function(osoba){
    return osoba.wiek > 60;
})
    console.log(wynik);
*/
/*
let wynik = osoby.map(function(osoba){
    return osoba.wiek;
})
    console.log(wynik);
*/

/*
let wynik = osoby.reduce(function(total, osoba){
    return total + osoba.wiek;
}, 0);
    console.log(wynik);
*/

//window.addEventListener('load', function(evt){
/*
const header = document.querySelector('#naszheader');
/*
const headerChildrenArray = Array.from(header.children);

for (let i = 0; i < headerChildrenArray.length; i++) {
    console.log(headerChildrenArray[i]);
}
*/
/*
const przycisk = document.createElement('button');
const text = document.createTextNode('Kliknij Tutaj');

    przycisk.appendChild(text);
    header.appendChild(przycisk);

header.addEventListener('click', function(evt){
    console.log(evt);
    //console.log(evt.target);
})
})
*/

window.addEventListener('load', function(evt){
    const formularze = document.forms['imie'];
    console.log(formularze);

    formularze.addEventListener('submit', function(evt){
        evt.preventDefault();
        const imie = formularze.querySelector('input[type="tekst"]').value;
        console.log(imie);
        alert(imie);

    });
});