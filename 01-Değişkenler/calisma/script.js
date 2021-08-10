// Bir müşterşnşn aşağıdaki bilgileri için değişken oluşturunuz

// Müşteri adı
var customerName='Batu';
// Müşteri sıyadı
var customerSurname='Koç';
// Müşteri tc
var customerId = '12121231212';
// Sipariş tutarı
var total = 207.85;
// cinsiyet
var gender='Erkek'; // boolean olarak da saklanabilir.
// adres
var adress = {
    mahalle: 'gazipasa',
    sokak: '34.sk',
    no:'56'
}
//Hobiler
var hobies = ['guitar','tennis','fitness','movie','books'];

// Aşağıdaki iki değişkeni toplayınız.

var order1='100';
var order2='200';

// Çözüm
var total = Number(order1)+Number(order2);
console.log(total);

// Aşağıdaki iki değişkeni toplayınız.

var order3='100.3';
var order4='200.52';

// Çözüm
var orderTotal = parseFloat(order3)+parseFloat(order4);
console.log(orderTotal.toFixed(2))

// Aşağıda verilen doğum yılı bilgisine göre yaş hesabı yapınız.

var yearOfBirth = '1927';

// Çözüm

var age = new Date().getFullYear() - Number(yearOfBirth);
console.log(age)

// Aşağıdaki string ifadenin karakter uzunluğunu bulunuz.

var course ='ReactJs ile Front End';

console.log(course.length) // 21



