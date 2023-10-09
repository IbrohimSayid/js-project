// if, else - 1

// let a = prompt("son kiriting") * 1;

// if (a >= 0) {
//     console.log(a += 1);
// } else {
//     console.log(a);
// }

// <----------------------------------------------------------------------------------------------------->

// if, else - 2

// let a = prompt("son kiriting") * 1;

// if (a >= 0) {
//     console.log(a += 1);
// } else {
//     console.log(a -= 2);
// }

// <----------------------------------------------------------------------------------------------------->

// if, else - 3 

// let a = prompt("son kriting") * 1;
// let b = 10


// if (a >= 0) {
//     console.log(a += 1);
// } else if (a == 0) {
//     console.log(b);
// } else {
//     console.log(a -= 2);
// }

// <---------------------------------------------------------------------------------------------------->

// if, else - 6

// let a = prompt("birinchi son kiritng");
// let b = prompt("ikkinchi son kiriting");

// if (a >= b) {
//     console.log("a - katta son");
// } else {
//     console.log("b - katta son");
// }

// <----------------------------------------------------------------------------------------------------->

// if, else - 7

// let a = prompt("birinchi son kiritng");
// let b = prompt("ikkinchi son kiritng");

// let small;

// if (a <= b) {
//     small = a;
// } else {
//     small = b;
// }

// let order;

// if (small === 1) {
//     order = 1;
// } else if (small === 2) {
//     order = 2;
// } else if (small === 3) {
//     order = 3;
// } else  {
//     order = 4
// }

// console.log(a, "va", b, "orasidagi kichik son bu", small, order);

// <------------------------------------------------------------------------------------------------>

// id, else - 8

// let a = prompt("birinchi son kiritng");
// let b = prompt("ikkinchi son kiritng");

// let big, small;


// if (a >= b) {
//     big = a;
//     small = b;
//     console.log("katta son bu", a);
//     console.log("kichik son bu", b);

// } else {
//     big = b;
//     small = a;
//     console.log("katta son bu", b);
//     console.log("kichik son bu", a);
// }

// <-------------------------------------------------------------------------------------------->

// if, else - 9

// let a = prompt("birinchi son kiriting")
// let b = prompt("ikkinchi son kiriting")

// if (a >= b) {
//     a /= 10;
//     b *= 10;
// }

// a = a % 10;
// b = b * 10;

// console.log(a);
// console.log(b);

// <-------------------------------------------------------------------------------------------->

// if, else - 10

// let a =+ prompt("birinchi son");
// let b =+ prompt("ikkinchi son");

// let c;

// if (a != b) {
//     c = (a + b).toString()
//     console.log(c);
// } else {
//     console.log(a = 0);
//     console.log(b = 0);
// }

// <--------------------------------------------------------------------------------------------->

// if, else - 11

// let a = + prompt("birinchi son");
// let b = + prompt("ikkinchi son");

// let c;

// if (a >= b) {
//     let c = a, b;
//     console.log(c);
// } else {
//     let c = b, a;
//     console.log(c);
// }

// <----------------------------------------------------------------------------------------------->

// if, else - 12

// let a = + prompt("birinchi son");
// let b = + prompt("ikkinchi son");
// let c = + prompt("uchinchi son");

// if (a <= b) {
//     console.log(a);
// } else if (b <= c) {
//     console.log(b);
// } else if (c <= a) {
//     console.log(c);
// }

// <---------------------------------------------------------------------------------------------->

// if, else - 13

// let a = + prompt("birinchi son");
// let b = + prompt("ikkinchi son");
// let c = + prompt("uchinchi son");

// if (a >= b) {
//     if (b >= c) {
//         console.log(b);
//     }
// } else if (b >= a) {
//     if (a >= c) {
//         console.log(a);
//     }
// } else if (a >= c) {
//     if (c >= b) {
//         console.log(c);
//     }
// }

// <--------------------------------------------------------------------------------------------->

// if, else - 14

// let a = + prompt("birinchi son");
// let b = + prompt("ikkinchi son");
// let c = + prompt("uchinchi son");

// if (a >= b) {
//     if (b <= c) {
//         console.log(a, "katta son", b, "kichik son");
//     }
// } else if (b >= c) {
//     if (c <= a) {
//         console.log(b, "katta son", c, "kichik son");
//     }
// } else if (c >= a) {
//     if (a <= b) {
//         console.log(c, "katta son", a, "kichik son");
//     }
// }


// Alisher travel

let wallet = + prompt("Qancha pul bor ukam")

let yeuro = 12354.03 * 120;
let dollar = 11000.34 * 750;

let results = yeuro + dollar;

if (results >= wallet) {
    console.log("Gazini bos bratishka👋")
} else {
    console.log("Bratishka pul yoq bo'lsa pishirb qo'yibtimi chet elda😏");
}