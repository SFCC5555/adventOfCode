import {readFileSync, stat} from "node:fs"

const lines = readFileSync("day1.txt",{encoding:"utf-8"})

let data= lines.split(", ")

console.log(data)

let x=0

let y=0

let aim="U"

let location=[x,y]

let locationList=[[0,0]]

let status="ON"

for (let i of data) {

    let blocksNumber=i.slice(1)

    if (aim=="R") {
        if (i[0]=="R") {
            //y-=parseInt(blocksNumber)
            aim="D"
        }

        else {
            //y+=parseInt(blocksNumber)

            aim="U"
        }
    }

    else if (aim=="L") {
        if (i[0]=="R") {
            //y+=parseInt(blocksNumber)

            aim="U"
        }

        else {
            //y-=parseInt(blocksNumber)

            aim="D"
        }
    }

    else if (aim=="U") {
        if (i[0]=="R") {
            //x+=parseInt(blocksNumber)

            aim="R"
        }

        else {
            //x-=parseInt(blocksNumber)

            aim="L"
        }
    }

    else if (aim=="D") {
        if (i[0]=="R") {
            //x-=parseInt(blocksNumber)

            aim="L"
        }

        else {
            //x+=parseInt(blocksNumber)

            aim="R"
        }
    }

    let ux

    let uy


    if (status=="ON") {

        if (aim=="R") {
            ux=1

            uy=0
        }

        else if (aim=="L") {
            ux=-1

            uy=0
        }


        else if (aim=="U") {
            ux=0

            uy=1
        }


        else if (aim=="D") {
            ux=0

            uy=-1
        }
        
        for (let step=0;step<parseInt(blocksNumber);step++) {

            if (status=="ON") {

                            
            let status2="ON"
            
            x+=ux

            y+=uy
            
            location=[x,y]

            let counter=0

                
            for (let l of locationList) {

                if (status2=="ON") {

                    console.log(l)
                    console.log(location)
        
                    if (l[0]==location[0] && l[1]==location[1]) {
                        status="OFF"
                        break
                    }
                
                    else {
        
                        counter++
                        console.log(counter)
        
                    }
        
                    if (counter==locationList.length) {
                        locationList.push(location)
                        status2="OFF"
                    }

                }
        
            
            }


            }
            




        }
        

    }
    


    
}

let absolutex=Math.abs(x)

let absolutey=Math.abs(y)

let blocksAway=absolutex+absolutey


console.log(blocksAway)

console.log(Math.abs(location[0])+Math.abs(location[1]))

