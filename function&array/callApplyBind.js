console.log('Call apply and bind method implemented here')
console.log('---------------------------------------------')


const nepalAirlines = {
  airline: 'Nepal Airlines',
  iataCode:'NA',
  bookings:[],
  //book:function(){}
  book(flightNum, name){
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}, name`})
  }
}
//console.log(nepalAirlines)
nepalAirlines.book(34, 'sanjit katwal');
// sanjit katwal booked a seat on Nepal Airlines flight NA34
//console.log(nepalAirlines)

// --------------------------------------------
const ktmAirlines = {
  airline: 'KTM Airlines',
  iataCode: 'KA',
  bookings: [],
};

const book = nepalAirlines.book;

//book(23, 'raju rijal') //we cant do like this

book.call(ktmAirlines, 23, 'Raju Rijal');
console.log(ktmAirlines);

const pokharaAirlines = {
  airline: 'Pokhara Airlines',
  iataCode: 'PA',
  bookings:[]
};

book.call(pokharaAirlines, 23, 'Raju Rijal');
console.log(pokharaAirlines);


// Apply method
// const flightData = [583, 'SK Roy'];
// book.apply(pokharaAirlines, flightData);
// console.log(pokharaAirlines)

// Bind method
const bookNew = book.bind(ktmAirlines);
bookNew(23, 'Rajesh Hamal')
console.log(bookNew)