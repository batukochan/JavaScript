// Date Object

let d = new Date();

console.log(d);  //Tue Aug 10 2021 15:06:41 GMT+0300 (GMT+03:00) // anlık bilgidir.
console.log(typeof d); // object olduğu için bu veri tipinin içindeki herhangi bir bilgiyi alabiliriz.

console.log(d.getDate()) // 10
console.log(d.getDay()) // 2 yani salı gününe denk gelir.
console.log(d.getFullYear()) // 2021
console.log(d.getMonth()) //  0'dan başladığı için 7 yani ağustos
console.log(d.getHours()) // kaydettiğim saat 15:!1, console çıktısı 15

// set methods

d.setFullYear(1998);
console.log(d.getFullYear()); // 1998


let birthday = new Date(1998,2,14)