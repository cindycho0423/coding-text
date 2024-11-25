function solution(board) {
  function isValid(num, row, col) {
    // 현재 위치에 num이 들어갈 수 있는지 검사
    return !(inRow(num, row) || inCol(num, col) || inBox(num, row, col));
  }

  function inRow(num, row) {
    // 해당 행에 num이 있는지 확인
    return board[row].includes(num);
  }

  function inCol(num, col) {
    // 해당 열에 num이 있는지 확인하는 함수
    return board.some(row => row[col] === num);
  }

  function inBox(num, row, col) {
    // 현재 위치의 3 * 3 박스에 num이 있는지 확인
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) {
          return true;
        }
      }
    }
    return false;
  }

  function findEmptyPosition() {
    // 스도쿠 보드에서 비어 있는 위치 반환
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  function findSolution() {
    // 비어 있는 위치에 가능한 숫자를 넣어가며 스도쿠 해결
    const emptyPos = findEmptyPosition();
    // 빈 칸이 없으면 스도쿠가 해결된 것으로 간주
    if (!emptyPos) {
      return true;
    }
    const [row, col] = emptyPos;
    for (let num = 1; num <= 9; num++) {
      if (isValid(num, row, col)) {
        board[row][col] = num;
        if (findSolution()) {
          return true; // 정답을 찾았으므로 백트래킹
        }
        board[row][col] = 0; // 가능한 숫자가 없으면 원래의 0으로 되돌림
      }
    }
    return false;
  }

  findSolution();
  return board;
}
