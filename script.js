const add =function(...numbers) {
  let sum =0;
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i]
  }

  console.log(sum)
}


add(5,3,5);
const x = [2,3,4];
 add(1,9, ...x);