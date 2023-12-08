import { readFileSync } from 'node:fs';

const lines = readFileSync('./day4.txt',{encoding:'utf-8'});

let data = lines.split(/\n\n/);

//console.log(data);

let randomNumbers = data[0].split(',');

//console.log(randomNumbers);

data.shift();

data = data.map(s=>s.replaceAll('  ',' '))

//console.log(data);

data = data.map(s=>{
    
    s = s.split('\n');

    s = s.map(i=>i.trim().split(' '));

    return s;

});

data = data.map(l=>{

    let obj = {};

    for (let i=0;i<l.length;i++) {
        for (let j=0;j<l[i].length;j++) {
            
            obj[l[i][j]] = {x:i,y:j}
        }
    }

    return obj;

})

//console.log(data);

let position = {};


for (let i=1;i<=data.length;i++) {

    position[i] = {x:{0:0,1:0,2:0,3:0,4:0},y:{0:0,1:0,2:0,3:0,4:0},sum:Object.keys(data[i-1]).map(z=>parseInt(z)).reduce((a,b)=>a+b)};
}

//console.log(position);

let game = true;

let winingBoards = [];

let answerFunction = ()=> {
    for (let n of randomNumbers) {

        if (game===false) {
            break;
        }

        let numberOfBoard = 0;
    
        for (let board of data) {
    
            numberOfBoard++;
    
            if (n in board && numberOfBoard in position) {//part 2
    
                position[numberOfBoard].x[board[n].x]++;
                position[numberOfBoard].y[board[n].y]++;
                position[numberOfBoard].sum-=parseInt(n);
    
                if (position[numberOfBoard].x[board[n].x]===5||position[numberOfBoard].y[board[n].y]===5) {
    
                    winingBoards.push([position[numberOfBoard].sum,n]);

                    delete position[numberOfBoard];//Part 2

                    //game = false; Part 1
    
                }
    
    
            }
        }
    
    } 

}

let answerList = answerFunction();

//console.log(position);


//let answer = answerList[0]*answerList[1];

//console.log(answerList)

//console.log(answer);

console.log(winingBoards);

let winScores = winingBoards.map(i=>i[0]*i[1]);

console.log(winScores);

let win = Math.max(...winScores);

console.log(win);

//Part 2

let lose = winScores[winScores.length-1];

console.log(lose);
