function Position(start) {
  let allMoves = [
    [start[0] + 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] - 2, start[1] + 1],
    [start[0] - 2, start[1] - 1],
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
  ];
  this.possibleMoves = [];
  for (let i = 0; i < allMoves.length; i++) {
    if (
      0 <= allMoves[i][0] &&
      allMoves[i][0] <= 7 &&
      0 <= allMoves[i][1] &&
      allMoves[i][1] <= 7
    ) {
      this.possibleMoves.push(allMoves[i]);
    }
  }

  return { possibleMoves, start };
}

function knightMoves(start, end) {
  let home = Position(start);
    console.log(`Your path:`)
  let q = [];
  q.push(home);
  while (!q.isEmpty) {
    let node = q.shift();
    console.log(node.start)
    if (JSON.stringify(node.start) === JSON.stringify(end)) {
      return node.start;
    } else {
      if (node.possibleMoves[0] != undefined) {
        q.push(Position(node.possibleMoves[0]));
      }
      if (node.possibleMoves[1] != undefined) {
        q.push(Position(node.possibleMoves[1]));
      }
      if (node.possibleMoves[2] != undefined) {
        q.push(Position(node.possibleMoves[2]));
      }
      if (node.possibleMoves[3] != undefined) {
        q.push(Position(node.possibleMoves[3]));
      }
      if (node.possibleMoves[4] != undefined) {
        q.push(Position(node.possibleMoves[4]));
      }
      if (node.possibleMoves[5] != undefined) {
        q.push(Position(node.possibleMoves[5]));
      }
      if (node.possibleMoves[6] != undefined) {
        q.push(Position(node.possibleMoves[6]));
      }
      if (node.possibleMoves[7] != undefined) {
        q.push(Position(node.possibleMoves[7]));
      }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
