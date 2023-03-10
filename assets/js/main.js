/* 
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
1 per i multipli di 3 stampi “Fizz” al posto del numero
2 per i multipli di 5 stampi “Buzz”
3 per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

// Numbers 1 to 100 in console
let number = 0
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        number = i
        number = 'fizzbuzz'
    }else if (i % 3 === 0 ) {
        number = i
        number = 'fizz'
    } else if (i % 5 === 0) {
        number = i
        number = 'buzz'
    } else {
        number = i
    }
    console.log(number) 

}
