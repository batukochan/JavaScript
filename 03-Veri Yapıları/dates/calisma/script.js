// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

// console.log(new Date());
// console.log(new Date().getDay());
// console.log(new Date().getMonth());
// console.log(new Date().getFullYear());

var dt = new Date();
console.log(dt);
console.log(dt.getMonth()+1);

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dth = new Date('8/24/2021 14:55:12');
console.log(dth);

// ** */ 1/1/1990 tarihinden bir gün öncesini gösteriniz. 

var dthA = new Date('1/1/1999');
var dayOfMounth = dthA.getDate();
dthA.setDate(dayOfMounth - 1);
console.log(dthA)

// ** iki tarih arasındaki geçen zamanı bulunuz.

var start = new Date('1/1/1994');
var end = new Date('1/1/1995');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye/60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond :' +milisecond  )
console.log('saniye : '+saniye)
console.log('dakika : '+dakika)
console.log('saat : '+saat)
console.log('gün : '+gun)

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('3/14/1998').getTime();
var today = Date.now();
var ageDifMs = today -birthday;
var ageDate = new Date(ageDifMs);
var age = ageDate.getUTCFullYear() -1970;
console.log(age)


// ** Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);




