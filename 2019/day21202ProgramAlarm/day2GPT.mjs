import { readFileSync } from 'node:fs';


const lines = readFileSync('day2.txt', { encoding: 'utf-8' });
const data = lines.split(',').map(n => parseInt(n, 10));
const finalOutPut = 19690720;

for (let u = 0; u < 100; u++) {
  for (let v = 0; v < 100; v++) {
    const output = runProgram(u, v, [...data]);
    if (output === finalOutPut) {
      const answer = 100 * u + v;
      console.log(answer);
      break;
    }
  }
}

function runProgram(u, v, data) {
  data[1] = u;
  data[2] = v;
  for (let i = 0; i < data.length - 3; i += 4) {
    const code = data[i];
    const inPutPosition1 = data[i + 1];
    const inPutPosition2 = data[i + 2];
    const outPutPosition = data[i + 3];

    const inPut1 = data[inPutPosition1];
    const inPut2 = data[inPutPosition2];
    let outPut;

    if (code === 1) {
      outPut = inPut1 + inPut2;
    } else if (code === 2) {
      outPut = inPut1 * inPut2;
    } else if (code === 99) {
      break;
    }

    data[outPutPosition] = outPut;
  }

  return data[0];
}