let checkNum 

for (let i = 0; i <= 15; i++) {
    checkNum = i                //See if odd or even iteration
    if (checkNum % 2 === 0 ){
        console.log(checkNum + ' is even ')
    }
    else if(checkNum %2 === 1) {
        console.log(checkNum + ' is odd ')
    }
}