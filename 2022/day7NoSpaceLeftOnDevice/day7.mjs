import { Console } from "node:console";
import { readFileSync } from "node:fs";

const lines = readFileSync("day7.txt", { encoding: "utf-8"})

let data = lines.split("\n");

console.log(data);

const dirMain = {name:'/',content:[],size:0};

let currentDirectory = dirMain;

class Data {
    constructor(name,size) {
        this._name=name;
        this._size=size;
    }

    get name() {
        return this._name;
    }

    set name(n) {
        this._name=n;
    }

    get size() {
        return this._size;
    }

    set size(s) {
        this._size=s;
    }

}


class Directory extends Data {

    constructor(name,content,size,parent) {
        super(name,size);
        this._content=content;
        this._parent=parent;
    }

    get content() {
        return this._content;
    }

    set content(c) {
        this._content=c;
    }

    get parent() {
        return this._parent
    }

    set parent(p) {
        this._parent=p
    }

}

class File extends Data {
    constructor(name,size){

        super(name,size);

    }
}


for (let l=1;l<data.length;l++) {

    let line = data[l];

    if (line.includes('dir')) {

        let spaceIndex=line.indexOf(' ');
        
        let newDir = new Directory(line.slice(spaceIndex+1),[],0,currentDirectory);
        
        currentDirectory.content.push(newDir);

    } else if (/\d/.test(line[0])) {
        let spaceIndex = line.indexOf(' ');
        let newFile = new File(line.slice(spaceIndex+1),parseInt(line.slice(0,spaceIndex)))
        currentDirectory.content.push(newFile);
0
        let c = currentDirectory
        
        while (c!==undefined) {
            c.size+=newFile.size
            c = c.parent
        }


    } else if (line==='$ cd ..') {
        
        currentDirectory=currentDirectory.parent;
    

    } else if (line==='$ cd /') {
        currentDirectory=dirMain;
    } 
    else if (line.includes('$ cd')) {

        let spaceIndex = line.lastIndexOf(' ');
        let directoryIndex = currentDirectory.content.findIndex(o=>o.name===line.slice(spaceIndex+1));
        currentDirectory=currentDirectory.content[directoryIndex];
    }
    //console.log(line);
    //console.log(currentDirectory);

}

console.log(dirMain);

let sizeList=[];

let smallSizeList=[];

function getSize(object) {

    let dirSize = object.size

    sizeList.push(dirSize);

    if (dirSize<=100000) {
        smallSizeList.push(dirSize);
    }

    for (let i of object.content) {
        if (i.content) {
            getSize(i);
        }
    }

}

getSize(dirMain)

console.log(smallSizeList.reduce((a,b)=>a+b));

//Part 2

console.log('Part 2 ******************')

sizeList.sort((a,b)=>a-b);

console.log(sizeList);

let totalDisk = 70000000;

let needSpace = 30000000;

let usedSpace = dirMain.size;

let availableSpace = totalDisk - usedSpace;

let toCleanSpace = needSpace - availableSpace;

let deleteDirectorySizeIndex = sizeList.findIndex(s=>s>=toCleanSpace);

let deleteDirectorySize = sizeList[deleteDirectorySizeIndex];

console.log(deleteDirectorySize);


