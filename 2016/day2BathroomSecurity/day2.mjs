import {readFileSync} from "node:fs"

const lines= readFileSync("day2.txt", {encoding:"utf-8"})

let data= lines.split("\n")

console.log(data)

//Part 1

/*let x=2

let y=2

let button

let sequence=""


for (let i of data) {

    for (let code of i) {

        if (code=="R") {
            if (x==3) {

            }

            else {
                x++
            }
        }

        else if (code=="L") {

            if (x==1) {

            }

            else {
                x--
            }
        
        }

        else if (code=="U") {
            if (y==1) {

            }
            else {
                y--
            }
        }

        else if (code=="D") {
            if (y==3) {

            }

            else {
                y++
            }
        }

    }

    if (x==1 && y==1) {
        button="1"
    }

    else if (x==2 && y==1) {
        button="2"
    }

    else if (x==3 && y==1) {
        button="3"
    }

    else if (x==1 && y==2) {
        button="4"
    }

    else if (x==2 && y==2) {
        button="5"
    }

    else if (x==3 && y==2) {
        button="6"
    }

    else if (x==1 && y==3) {
        button="7"
    }

    else if (x==2 && y==3) {
        button="8"
    }

    else if (x==3 && y==3) {
        button="9"
    }

    sequence+=button
}

console.log(sequence)*/

//Part 2

let x=1

let y=3

let button

let sequence=""


for (let i of data) {

    for (let code of i) {

        if (y==1) {
    
            if (code=="D") {
                y++
            }
    
        }

        else if (y==2) {
    
            if (code=="R") {
                if (x==4) {

                }
                else {
                    x++
                }
            }

            if (code=="L") {
                if (x==2) {

                }
                else {
                    x--
                }
            }

            if (code=="U") {
                if (x==2 || x==4) {

                }
                else {
                    y--
                }
            }

            if (code=="D") {
                y++
            }
        }

        else if (y==3) {
            
            if (code=="R") {
                if (x==5) {

                }
                else {
                    x++
                }
            }

            if (code=="L") {
                if (x==1) {

                }
                else {
                    x--
                }
            }

            if (code=="U") {
                if (x==1 || x==5) {

                }
                else {
                    y--
                }
            }

            if (code=="D") {
                if (x==1 || x==5) {

                }
                else {
                    y++
                }
            }
            
        }

        else if (y==4) {
    
            if (code=="R") {
                if (x==4) {

                }
                else {
                    x++
                }
            }

            if (code=="L") {
                if (x==2) {

                }
                else {
                    x--
                }
            }

            if (code=="U") {
                y--
            }

            if (code=="D") {
                if (x==2 || x==4) {

                }
                
                else {
                    y++
                }

            }
        }

        else if (y==5) {
    
            if (code=="U") {
                y--
            }
    
        }
    }

    if (x==3 && y==1) {
        button="1"
    }

    else if (x==2 && y==2) {
        button="2"
    }

    else if (x==3 && y==2) {
        button="3"
    }

    else if (x==4 && y==2) {
        button="4"
    }

    else if (x==1 && y==3) {
        button="5"
    }

    else if (x==2 && y==3) {
        button="6"
    }

    else if (x==3 && y==3) {
        button="7"
    }

    else if (x==4 && y==3) {
        button="8"
    }

    else if (x==5 && y==3) {
        button="9"
    }

    else if (x==2 && y==4) {
        button="A"
    }

    else if (x==3 && y==4) {
        button="B"
    }

    else if (x==4 && y==4) {
        button="C"
    }

    else if (x==3 && y==5) {
        button="D"
    }

    
    sequence+=button
}

console.log(sequence)