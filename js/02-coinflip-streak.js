let coinFlip 
let randomNum

//do while loop 
do {
    randomNum = Math.round(Math.random())
    if (randomNum > 0) {
        coinFlip = 'Tails'
    }else  {  
        coinFlip ='Heads'
    }
    console.log(coinFlip + ' ')
} while (coinFlip != 'Tails');