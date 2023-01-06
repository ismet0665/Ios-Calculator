// console.log(false == "0");
// console.log(typeof typeof 1);
// console.log(1 + "2" + "2");
// let array = [1, 2, 3];
// array[6] = 9;
// console.log(array[5]);

const A = [12, 14, 16];
const B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];
// const C = [...A, ...B];
// const C = A.concat(B);
//! spread operatörü daha çok dizi kopyalama yöntemlerinde işimize yarıyor.
const C = [...A, ...B].sort((a, b) => a - b);

console.log(C);

console.log(typeof typeof 1); //!içten başlıyor ilk başta typeof 1= number// numberıda typeof string olarak görüyor.
