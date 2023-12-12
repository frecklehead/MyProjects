//an array of objects
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  //Array.prototype.filter()-> an iterrative method , it calls an provided callback function once for hte each 
  //element in ab array and constructs an new array of a the values
  //for which  callbackfn returns a truthy value.
  //storing function  in avariable

  const alive= inventors.filter(lived => (lived.year>=1500 && lived.year<1600))

  console.table(alive);

  //array.prototype.map
  //it is an callback function that typically takes three parameters
  //current parameter
  //the index of the parameter
  //the array itself  {it can also take less than two parameters}

  const map= inventors.map( invent => `${invent.first} ${invent.last}`)

console .log(map);

//arrary.prototype.sort

