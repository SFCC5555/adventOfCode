const crypto = require("crypto")

let day4Prueba1="abcdef"

let day4Prueba2="pqrstuv"

let day4="yzbqklnj"

let x=0

let firstFive

while (x>=0) {

    x++

    let data=day4+x

    console.log(data)
    
    let result = crypto.createHash("md5").update(data).digest("hex")

    let firstFive=result.slice(0,6) //Part 1: (0,5) ; Part 2: (0,6)

    console.log(firstFive)

    if (firstFive=="000000") { //Part 1: "00000" ; Part 2: "000000"
        break
    }


}

console.log(x)
