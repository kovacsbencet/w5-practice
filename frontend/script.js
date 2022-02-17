/* 
console.log(a)
console.log(c) 
*/

//console.log("Hello!")
//console.log('Hello!')
//console.log(`Hello!`)


//console.log(typeof 2)
//console.log(typeof NaN)
//console.log(0/0)
//console.log(2.14)


//console.log(true)
//console.log(false)


//console.log(undefined)
//console.log(null)

//console.log(typeof undefined)
//console.log(typeof null)

/* 
console.log({
    "title": "Start Coding",
    "type": "solo",
    "difficulty": "4.1",
    "usefulness": "4.2",
    "enjoyability": "3.7",
    "materials": "3.4",
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""
        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "Word filter",
            "description": ""
        }
    ]
})
 */

/* 
var a = "Hello1!"
let b = "Hello2!"
const c = "Hello3!"
 */

/* 
console.log(a)
console.log(b)
console.log(c)
 */

/* 
function d(){
    if (1 + 1 === 2){
        
    }
    var a = "Hello1!"
    let b = "Hello2!"
    const c = "Hello3!"
    console.log(a)
    console.log(b)
    console.log(c)
}
d()
 */

/* 
let e = 1
console.log(e)

e = 2
console.log(e)

e = e*2
console.log(e)

function multiplyByTwo(num){
    console.log(num)
    return num*2
    
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1))
console.log(num)
 */


/*  
let g = {
    myMethod: function (){
        console.log("Hello");
    }
}

g.myMethod()
 */

/* 
let window = {
    addEventListener: function (eventName,eventFunction){
        if (eventName === "load" )
        eventFunction()
    }
}
window.addEventListener("load", loadEvent)
 */

/* 
let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("Hello")
console.log(i);
console.log(h.anotherMethod)
 */

/* 
let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString = "Mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);
 */

/* 
let myObject = {
    myString: "Mikkamakka"
};

let mySecondObject = myObject;

let myThirdObject = {
    myString: "Mikkamakka"
};

mySecondObject.myString = "Dömdödöm"

let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati"

console.log(myObject.myString);
console.log(myFourthObject.myString);

 */

/* 
console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject);

 */

/* 
console.log("" === "");
console.log({} === {});
 */




/*------------IMDB DATA STRUCTURES------------*/


/* 
window.addEventListener("load", function(){
    console.log("My page is loaded.")
})
 */

/* 
let card =  function(movieRecieved){
    return  `
    <div class="card">
    <h1>${movieRecieved.title}</h1>
    <h2>${movieRecieved.year}</h2>
    <h3>${movieRecieved.rate}</h3>
    </div>
    `;
};
*/


    
/* 
let anotherFavouriteMovie = {
    "title": "The last Scout Boy",
    "year": "1991",
    "rate": "7.0"
}
*/

/* 
rootElement.insertAdjacentHTML("beforeend", card({
    "title": "Inception",
    "year": "2012",
    "rate": "9.9"
}));

let actuallyFavouriteMovie = {
    "title": "Eternal sunshine of a spotless mind",
    "year": "2004",
    "rate": "9.9"
}

rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));
rootElement.insertAdjacentHTML("beforeend", card(movies[0])); 
*/

/* 
rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate))
*/


function loadEvent() {

    let rootElement = document.getElementById("root");

    let card2 =  function(title, year, rate){
        return `
        <div class="card">
            <h1>${title}</h1>
            <h2>${year}</h2>
            <h3>${rate}</h3>
        </div>
        `;
    }

    let renderAllCardElements = function (incomingMoviesArray){
        let renderedCardList = `<div class="cards">`;

        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
            
            /* 
            renderedCardList += `
            <div class="card">
                <h1>${incomingMovie.title}</h1>
                <h2>${incomingMovie.year}</h2>
                <h3>${incomingMovie.rate}</h3>
            </div>
            ` 
            */
        }
        renderedCardList += `</div>`
        console.log(renderedCardList);
        return renderedCardList

    }

    let newGoodMovies = [];

    for (const movieSend of movies) {
        if (movieSend.year > 2000 && movieSend.rate >= 8){
            newGoodMovies.push(movieSend);
        }
    }


    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))
} 
    
window.addEventListener("load", loadEvent);
