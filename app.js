function randomRGB(){
    const r = Math.floor(Math.random() * 256); //to get a random number, we use math.random(). this returns
    const g = Math.floor(Math.random() * 256); //a num between 0 and .999... so to get all 255 possible r vals
    const b = Math.floor(Math.random() * 256); //multiply by one number higher, then round down with math.floor

    return `rgb(${r}, ${g}, ${b})` //return string of values
}

/*const h1 = document.querySelector('h1'); //selects the h1 element and puts it into a variable we can manipulate in js
//h1.style.color = randomRGB();            //sets h1 to random color
setInterval(function(){                    //set color to change every 500 ms
    h1.style.color = randomRGB();          //anonymous function executes random color change
}, 500);
*/

const letters = document.querySelectorAll('.letter'); //selects all elements with class(.name) of letter

setInterval(function() {
    for(let letter of letters){             
        letter.style.color = randomRGB(); //sets each individual letter to a random color
    }
}, 1000);    