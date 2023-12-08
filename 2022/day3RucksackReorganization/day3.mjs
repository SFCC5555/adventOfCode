import { readFileSync } from "node:fs";

const lines = readFileSync("day3.txt", { encoding: "utf-8"})

let inventory = lines.split("\n");
let inventory2 = lines.split("\n");

console.log(inventory)

// Part 1

let items= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

let sumOfPriorities=0

for (let rucksacks of inventory) {
    let numberOfItems= rucksacks.length
    let compartment1=rucksacks.slice(0,numberOfItems/2)
    let compartment2=rucksacks.slice(numberOfItems/2,numberOfItems)

    for (let item of compartment1) {
        if (compartment2.includes(item)) {
            console.log(item)

            let priority=items.indexOf(item)+1
            console.log(priority)

            sumOfPriorities+=priority            
            break
        }
    }
    console.log(compartment1)
    console.log(compartment2)
    console.log(rucksacks)
    console.log(numberOfItems)

}

console.log(sumOfPriorities)

console.log("******************************")

// Part 2

let sumOfBadgesPriorities=0

for (let rucksacks of inventory2) {

    console.log(inventory2.indexOf(rucksacks))
    

    let rucksack1=inventory[0]
    let rucksack2=inventory[1]
    let rucksack3=inventory[2]

    for (let item of rucksack1) {
        if (rucksack2.includes(item) && rucksack3.includes(item)) {
            console.log(item)

            let badgePriority=items.indexOf(item)+1
            console.log(badgePriority)

            sumOfBadgesPriorities+=badgePriority            
            break
        }
    }

    console.log(rucksack1)
    console.log(rucksack2)
    console.log(rucksack3)

    inventory.splice(0,3)

    if (inventory.length==0) {
        break
    }

}

console.log(sumOfBadgesPriorities)