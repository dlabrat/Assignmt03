let coinflip
let iterNum = parseInt(prompt("How many times flip coin? (Enter number) "))


//for loop 
for (let i = 1; i<= iterNum; i++){
    randomNum = Math.floor(Math.random()*2)
    if (randomNum > 0) {
        coinFlip = 'Tails'
    }else  {  
        coinFlip ='Heads'
    }
    console.log(coinFlip + ' ')   //See results in console
}
