// Değişkenler

var number;
console.log(number);

// atama yapılmadığı için number değişkeni undefined olur.

number = 23
console.log(number)

var surname1="Kochan";
console.log(surname1);

// Değişken tanımlaması nasıl yapılır ?

// Sayı ile başlayamaz 
// Komut isimleri ile tanımlama yapılamaz.
// Birden fazla kelime kullanımı varsa boşluk bırakılamaz.

// var, let, const

let city="İstanbul";
console.log(city)

const email="abc@gmail.com"
console.log(email)

// email="bc@SpeechGrammarList.com" //hata verir. const ile tanımlanan değişkende değişiklik yapılamaz. 
// console.log(email)

// Değişken Tipleri

// Primitive // Reference - Objects

// Primitives

 //String
let surname="Atay"
console.log(typeof surname) //string

 //number

let age= 28;
console.log(typeof age) // number
let ondalikliSayi= 103.2;
console.log(typeof ondalikliSayi) // number

 // Boolean
let dogruMu = true;
console.log(typeof dogruMu) // boolean

 // null
let boslukDeger = null;
console.log( typeof boslukDeger) // Primitive tiptir ancak typeof bize object değer döndürür. Bu bir hatadır.

 // undefined

let color;
console.log(typeof color)

//-------------------------------------------------------------------------------------------------------------//

// Reference
 
 // Array
let list1=['1','2','3'];
 
 // Object

let calisanlar = {
    number1: 'Ahmet Kocaeli',
    number2: 'Mehmet Sarı'
}

 // Function
var calculateAge = function(){
return 0;
};
console.log(typeof calculateAge)

// Javascript Temelleri
// Tür dönüşümü

let num1 = '12';
console.log(typeof num1) //string
let num2 ='21';
console.log(typeof num2) //string

console.log(num1+num2); // 1221 string birleştirme işlemi yapılır.

let num3 = Number('19');
let num4 = Number('5');

let total = num3+num4
console.log(total); // Toplama işlemini matematiksel olarak gerçekleştirir. 24

let val;
// Number to String
val = String(10);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
//Array to String
val = String(['1','2','3'])
// String to Number
val = Number('28');
val = Number(true); // 1
val = Number(false); // 0
val = Number('A'); // NaN NOT A NUMBER
val = Number(['1','2','3']); // NaN NOT A NUMBER

// parseInt
// parseFloat

val = parseFloat(10.5) // 10.5
val = parseInt(10.5) // 10

console.log(val);
console.log(typeof val);
console.log(val.length) // karakter sayısını verir. Number için undefined
console.log(val.toFixed(3)) // Number için özel seçenekler gelir.


