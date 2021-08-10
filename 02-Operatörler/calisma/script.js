// Operatörler Çalışma

// Kullanıcıdan boy ve kilo bilgisi al
// alınan bilgilere göre kilo indekslerini hesapla
// kilo indeksi = kilo/boy değerinin karesi
// indeks bilgisine göre karşılaştırma yap
// kullanıcının bulunduğu katagoriyi belirle 
// 0 - 18.4: zayıf;
// 18.5 - 24.9: normal;
// 25.0 - 29.9: kilolu;
// 30.0 - 34.9: Obez ;

let indexBatu;
let indexMercan;

const kgBatu = 87 
const kgMercan = 44;

const heightBatu = 1.84;
const heightMercan = 1.48;

indexBatu = kgBatu / parseFloat(heightBatu)**2 ;
indexMercan = kgMercan / parseFloat(heightMercan)**2 ;
console.log(indexBatu.toFixed(2));
console.log(indexMercan.toFixed(2));

let a = indexBatu > indexMercan;

console.log("Batu'nun kilo indeksi Mercan'ın kilo indeksinden daha büyüktür. " +a)

let mercanZayif = indexMercan>=0 && indexMercan<=18.4 ; // false
let mercanNormal = indexMercan>=18.5 && indexMercan<=24.9; // true
let mercanKilolu = indexMercan>=25.0 && indexMercan<=29.9 ; // false
let mercanObez = indexMercan>=30.0 && indexMercan<=34.9 ; // false
 
console.log(mercanNormal)