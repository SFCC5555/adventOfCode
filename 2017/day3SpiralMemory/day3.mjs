let square = 265149;

let limitX=1;

let limitY=1;

let counterX=0;

let counterY=0;

let x=0;

let y=0;

let direction = "R";

let c

let s=1

let list = []

//for (let i=1; i<square+1; i++) { Part 1 

for (let i=1; s<=square; i++) { 
    
    
    c = {name:i,x:x,y:y,sum:s};

    if (direction==="R") {
        x++
        counterX++
    }

    else if (direction==="U") {
        y++
        counterY++
    }
    
    else if (direction==="L") {
        x--
        counterX++
    }

    else if (direction==="D") {
        y--
        counterY++
    }
    
    
    if (counterX===limitX || counterY===limitY) {
        
        counterX=0
        counterY=0


        if (direction==="R") {
            direction="U"
            limitX++
        }

        else if (direction==="U") {
            direction="L"
            limitY++
        }

        else if (direction==="L") {
            direction="D"
            limitX++
        }

        else if (direction==="D") {
            direction="R"
            limitY++
        }
    }

    for (let l of list) {

        if (Math.abs(l.x-x)<=1 && Math.abs(l.y-y)<=1) {
            s+=l.sum
        }
    }
    

    list.push(c)


}

//console.log(Math.abs(c.x)+Math.abs(c.y))
console.log(list)

console.log(s)