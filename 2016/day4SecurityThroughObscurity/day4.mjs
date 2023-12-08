import {readFileSync} from "node:fs"

import order from "./order.mjs"

import orderR from "./orderR.mjs"

const lines= readFileSync("day4.txt",{encoding:"utf-8"})

let data=lines.split("\n")

console.log(data)

let answer=0

let answerID

let answerName

let dataRealRooms=[]


for (let room of data) {
    let checksum = room.slice(room.indexOf("[")+1,room.indexOf("]"))
    let name = room.slice(0,room.lastIndexOf("-")).replaceAll("-","")
    let sectorID = room.slice(room.lastIndexOf("-")+1,room.indexOf("["))

    let objectList=[]

    let verificationList=[]
    
    for (let i of name) {

        if (verificationList.includes(i)) {

        }
        
        else {
            verificationList.push(i)

            let iRegExp= new RegExp(i,"g")
               
            let characterList=name.match(iRegExp)
    
            let repeticiones=characterList.length
    
            let object={name:i,value:repeticiones}

            objectList.push(object)

            
        }



    }

    objectList.sort(order)
    objectList.sort(orderR)
    //console.log(objectList)

    let finalList=objectList.map(function(char) {
        return char.name
    } )

    let finalString = finalList.toString().replaceAll(",","").slice(0,5)
    
    //console.log(finalString) //Part 1

    if (finalString==checksum) {
        answer+=parseInt(sectorID)

        dataRealRooms.push(room)
    }

}


//console.log(answer) //Part 1

// Part 2

for (let realRoom of dataRealRooms) {

    let nameRoom = realRoom.slice(0,realRoom.lastIndexOf("-")).replaceAll("-"," ")

    let sectorID = realRoom.slice(realRoom.lastIndexOf("-")+1,realRoom.indexOf("["))

    console.log(nameRoom)
    console.log(sectorID)

    let letters = "abcdefghijklmnopqrstuvwxyza"

    let newName

    for (let u=0;u<parseInt(sectorID);u++) {

        newName = ""

        for (let char of nameRoom) {

            if (char == " ") {
    
                newName+=char
    
            }
    
            else {
                let newChar=char.replace(char,letters[letters.indexOf(char)+1])
    
                newName+=newChar
            }
    
        }

        nameRoom=newName

    }

    console.log(newName)


    if (newName.includes("pole")) {
        
        answerName=newName
        answerID=sectorID

    }



}

console.log(answerName,answerID)