// first class function
// Higherorder function

const oneWord = function (str){
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str){
  const[first, ...other] =str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
}
// Javascript is the best !

const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.dir(fn);
}

transformer('Javascript is the best', oneWord);
//transformer('Javascript is the best', upperFirstWord);

const add = function (a, b){
  return a+b;
}
const operation = function(fn){
  console.log(fn(1,2));
}

operation(add);