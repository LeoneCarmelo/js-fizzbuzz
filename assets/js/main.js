/* 
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
1 per i multipli di 3 stampi “Fizz” al posto del numero
2 per i multipli di 5 stampi “Buzz”
3 per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */


// Declare a variable to put all the new results
let number = 0
// Generate all the numbers needed
for (let i = 1; i < 101; i++) {
    // looking for the numbers that are multiple of 3 and 5
    // put them in the number variable and call them fizzbuzz 
    if (i % 3 === 0 && i % 5 === 0) {
        number = i
        number = 'fizzbuzz'
    // looking for the numbers tha are only multiple of 3
    // put them in the number variable and call them fizz
    }else if (i % 3 === 0 ) {
        number = i
        number = 'fizz'
    // looking for the numbers that are only multiple of 5
    // put them in the number variable and call them buzz
    } else if (i % 5 === 0) {
        number = i
        number = 'buzz'
    // put the rest of the numbers in the number variable
    } else {
        number = i
    }
    console.log(number) 

}
