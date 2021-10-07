console.log('-----------Map Method------------')

const usdPayments = [60,55,-70,40,0149,59];
const usdToNpr = 117.54;

const nprPayment = usdPayments.map(function(usd){
  return Math.trunc(usd * usdToNpr);
})

console.log(usdPayments);
console.log('-----Using Map----');
console.log(nprPayment)

// sane sutuation using for of loop

console.log('-------using for of loop-----')
const nprpaymentsfor = [];
for(const usd of usdPayments) nprpaymentsfor.push(Math.trunc(usd*usdToNpr))

console.log(nprpaymentsfor)

// map is modern way of doing using functional programming
console.log('--------using arrow function')
const nprPaymentsArrow = usdPayments.map((usd)=>Math.trunc(usd*usdToNpr));
console.log(nprPaymentsArrow)

console.log('------------------------------------------')
console.log('map metod takes 3 arg, value, index, array')
const paymentNote = usdPayments.map((usd, i, arr) =>
`Payment Number: ${i+1}, You ${usd >0 ?'Deposite' : 'Withdraw'} the payment of ${usd}`
);
console.log(paymentNote);

console.log('------------------------------------------')
console.log('-----------filter metod also takes 3 arg-----')

const nprPaymentFilter = usdPayments.filter(function(mov, i, arr){
  return mov > 0;
});
console.log(nprPaymentFilter);

console.log('------------------------------------------')
console.log('-----------Reduce metod-----')

const balance = usdPayments.reduce(function(acc, cur, i, arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// const balance = usdPayments.reduce((acc, cur) => acc + cur, 0);

console.log(balance)