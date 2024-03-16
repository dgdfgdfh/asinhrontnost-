//-------------------------//
//       setTimeout       //
console.log("До setTimeout");

setTimeout(() => {
    console.log('Сработал таймер 3000')
}, 3000)

setTimeout(() => {
    console.log('Сработал таймер 500')
    setTimeout(() => {
        console.log('сработал таймер на 5000')
    }, 5000)
    console.log('внутри таймера на 500 сработал таймер на 5000')
}, 500)
console.log('После setTimeout');

console.log('до цикла')

console.time('tmr')
for (let i = 1; i < 2000000000; i++) {
    let a = i / i;
}
console.timeEnd('tmr')

console.log('после цикла')

//-------------------------//