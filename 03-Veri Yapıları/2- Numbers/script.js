// ** Numbers

let val;
val=10;
val = parseInt('10a'); // 10
val = parseInt('a10a'); // NaN

var num = 12.1213;

val = num.toPrecision(5);
val = num.toFixed(3);

val = Math.PI;
val = Math.round(2.4); // 2
val = Math.round(2.5); // 3
val = Math.ceil(2.2) // 3
val = Math.floor(2.7) // 2
val = Math.sqrt(64) // 8
val = Math.pow(2,3) // 8
val = Math.abs(-100) // 100
val = Math.min(100,23,28,-7,11,75) // -7
val = Math.random(); // 0-1 arasında rastgele bir sayı
val = Math.random()*10; // 0-10 arasında rastgele bir sayı


console.log(val);
console.log(typeof val);