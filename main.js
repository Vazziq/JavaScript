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

// window.addEventListener('load', function(evt){
//     const formularze = document.forms['imie'];
//     console.log(formularze);

//     formularze.addEventListener('submit', function(evt){
//         evt.preventDefault();
//         const imie = formularze.querySelector('input[type="tekst"]').value;
//         console.log(imie);
//         alert(imie);

//     });
// });

// const naszaData = Date.now();

//     console.log(naszaData);

// const naszaData2 = Date.now();

//     console.log(naszaData2);

// console.log(naszaData - naszaData2);

// setTimeout(function(){

//     console.log('Witam');
// }, 3000);

// let licznik = 0;
// let naszInterwal = setInterval(doKonsoli, 1000)

//     function doKonsoli(){
//         licznik++;
//         console.log("ASD " + licznik);
//         if (licznik > 9) {
//             clearInterval(naszInterwal);
//         }
// }

// class Osoba {

//     constructor(_imie){
//         this.imie = _imie;
//     }
//     przywitajSie(pozdrowienie){
//         console.log(pozdrowienie + ", jestem " + this.imie);
//     }
// }
// let ja = new Osoba('Krystian');
// ja.przywitajSie('Siemanko');

// let ty = new Osoba('Karol');
// ty.przywitajSie("Elo");

// let can = document.getElementById('naszCanvas');

// let ctx = can.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(150, 80);
// ctx.stroke();

// ctx.font = "36px Arial";
// ctx.strokeText("Siema", 100, 100);

let zapamietaneImie = localStorage.getItem('imie');
    console.log(zapamietaneImie);
    alert(zapamietaneImie);

let przycisk = document.getElementById('zatwierdz');
    
    przycisk.addEventListener('click', function(evt){
        evt.preventDefault();
        let imie = document.getElementById('inputImie').value;
        console.log(imie);
        localStorage.setItem('imie', imie);
    })
    