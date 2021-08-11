
var num = 12.13121312;

// ** num değerinin ilk 3 basamağını kullan

// Çözüm
console.log(num.toPrecision(3)); // 15.1

// ** Ondalık kısmı 3 basamaklı al

// Çözüm
console.log(num.toFixed(3)); // 15.131

// * En yakın sayıya yuvarla

// Çözüm
console.log(Math.round(num));

// ** Aşağıya yuvarla

// Çözüm
console.log(Math.floor(num));

// ** Yukarıya yuvarla

// Çözüm
console.log(Math.ceil(num));

// ** 1,2,10,56,20 en büyük ve en küçük değeri bulun

console.log('En büyük değer: '+Math.max(1,2,10,56,20),'En küçük değer: '+Math.min(1,2,10,56,20));


/*Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayınız. 
    Brüt maaş: 4700 TL
    Brüt mesai: 20.5 TL
    Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
    Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak olan net maaş nedeir ?*/

// Çözüm

var bMaas = 4700
var mesaiUcreti = 20.5;
var mesaiSuresi = 42;

var netMaas = (bMaas + mesaiSuresi*mesaiUcreti)*.75

console.log(netMaas)
