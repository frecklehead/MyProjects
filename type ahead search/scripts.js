//this is an raw data and lets convert it into an json data
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
 const cities=[];
fetch(endpoint) // creates apromise
        // .then (data=> console.log(data)) ,it doesnot get a json
        .then(data=>data.json()) //converting data to json
        .then( p=> cities.push(...p)) // while putting the array that we recieve into an constant variable
                           //we push the data  into the cities and use spread oerator to not create an array of array
                           
function findmatches(word,cities){//passing the array and the word to find
    //filtering the data
    return cities.filter(place=>{
        const regex= new RegExp(word,'gi')
        return place.city.match(regex)|| place.state.match(regex) 
    })

}          

function displaymatches(){
  
const matcharray= findmatches(this.value,cities);

const html= matcharray.map(place=>{
    console.log(place.state)
    return ` 
    <li><span class="name">${place.city},${place.state}</span></li>
    `;
   
}).join('');
console.log(display1);
display1.innerHTML=html;
console.log(display1);
}

const Inputs= document.querySelector(".search")
const display1=document.querySelector(".display1")
Inputs.addEventListener("change",displaymatches)
Inputs.addEventListener("keyup",displaymatches)
