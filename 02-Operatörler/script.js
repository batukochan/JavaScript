/// Operatörler

let val;
const a = 10;
const b = 5;
let c = 7;
let d = 7;
let e = 12;
let f = '12';

/// Aritmatik Operatörler

val = a + b; // 15/number
val = a - b; //  5/number
val = a * b; // 50/number
val = a / b; //  2/number
val = a % b; //  0/number

val = c++; // İlk önce c değerini val değişkenine atar. Bu işlemden sonra da c değerini 1 arttırır. Bu durumda console.log(val); işlemi 7 sonucunu, console.log(c); işlemi 8 sonucunu verir.

val = ++d; // İlk önce d değerini 1 arttırır. Bu işlem sonrasında val değişkenine değer atamsı yapılır. hem consol.log(d); hem de console.log(val); işlemlerinin sonucu 8 olur.

/// Atama Operatörleri

val += a; // val değişkeninin son haline a değişkeninin değeri eklenir. 8 + 10 = 18
val -= a; // 18 - 10 = 8
val *= a; // 8*10 = 80
val /= a; // 80/10 = 8
val %= a; // 8%10 = 8


/// Karşılaştırma Operatörleri

val = a == b; // false boolean
val = e == f // true boolean
val = a === b; // hem değer hem de tip kontrolü yapılır.
val = e === f // false boolean / değerleri eşit ancak tipleri farklıdır.
val = a != b; // a b'ye eşit değil mi ? true
val = a > b; // true
val = a <= b; // false
val = e <= f; // true


/// Mantıksal Operatörler

// let val;
// const a = 10;
// const b = 5;
// let c = 7;
// let d = 7;
// let e = 12;
// let f = '12';

// && (and)
// Koşullardan 1 tanesi false ise sonuç false olur. Sonucun true dönmesi için bütün koşullar true olmalıdır.
// true && true = true, true && false = false, false && false = false
val = (e==f) && (a>b); // true
val = (e==f) && (a>b) && (e>d); // true
val = (e===f) && (a>b) && (e>d); // false

// || (or)
// değerlerden herhangi biri true ise sonuç true olur.
// true || false = true, true || true = true, false || false = false 
val = (e==f) || (a>b); // true
val = (e===f) || (a>b) || (e>d); // True

// (!) (not)
// Sonucun tersini alır.
val = !((e==f) && (a>b)); // false
val = !((e===f) && (a>b) && (e>d)); // true

// console.log(c)
console.log(val)
console.log(typeof val)