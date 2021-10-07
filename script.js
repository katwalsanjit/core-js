// const add =function(...numbers) {
//   let sum =0;
//   for (let i=0; i<numbers.length; i++){
//     sum += numbers[i]
//   }

//   console.log(sum)
// }


const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); 
}
console.log('-----------------------------'); 
for (const i of iterable) {
  console.log(i); 
}

const iterable1 = new Uint8Array([0x00, 0xff]);

for (const value of iterable1) {
  console.log(value);
}

console.log('--------iterate in map func-----')
const iterable2 = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable2) {
  console.log(entry);
}

for (const [key, value] of iterable2){
console.log(value)
}