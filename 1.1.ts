var lineReader = require("line-reader");

const input = [];
lineReader.eachLine("./input1.txt", (line: string, last: boolean) => {
  input.push(line);
  if (last) {
    main();
  }
});

function main() {
  const inputRowLeft = input
    .map((line) => Number(line.split(" ").filter((number) => number !== "")[0]))
    .sort();

  const inputRowRight = input
    .map((line) => Number(line.split(" ").filter((number) => number !== "")[1]))
    .sort();

  const answer = inputRowLeft.reduce(
    (acc, leftRowNumber, index) => acc + Math.abs(leftRowNumber - inputRowRight[index]),
    0
  );
  console.log(answer);
}
