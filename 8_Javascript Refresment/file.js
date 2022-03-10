var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar]

console.log(lengkap_arr[2]);

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}
var c = perkenalan (9,22);

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
Array = nama;

console.log("array = " + Array);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// 2
// a. karena dalam let terdaftar itu false sedangkan dalam if nya itu true sehingga tidak tampil, maka harus disamakan agar tampil.
// b. karena b itu let sedangkan let itu bersifat scop area, bisa diubah namun tidak bisa di deklarasikan ulang.
// c. dapat karena nama di pindahkan menjadi tujuan object, dan posisi nama tadi di ganti array karena array berfungsi menyimpan object.

// 3
const foo = ['Budi','Sita','ayu'];
 
const [x, y, z,] = foo;
console.log(x); // "Budi"
console.log(y); // "Sita"
console.log(z); // "Ayu"

// 4
let bdays = ['10-17','05-19','20-19'];
console.log(bdays="['10/17','05/19','20/19']");

// 5
let value = [1,2,3,4,5,6,];
let p = value.map(x => x * 2);
console.log(p);

// 6
let arr = [1.5,2.56,5.1,12.33];
let q = arr.map(y => Math.round(y)); 
console.log(q);