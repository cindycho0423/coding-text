function solution(board) {
  // 스도쿠 보드를 해결하는 함수

  function isValid(num, row, col) {
    // 현재 위치 (row, col)에 숫자 num이 들어갈 수 있는지 검사
    return !(inRow(num, row) || inCol(num, col) || inBox(num, row, col));
  }

  function inRow(num, row) {
    // 주어진 행(row)에 숫자 num이 존재하는지 확인
    return board[row].includes(num);
  }

  function inCol(num, col) {
    // 주어진 열(col)에 숫자 num이 존재하는지 확인
    return board.some(row => row[col] === num);
  }

  function inBox(num, row, col) {
    // 현재 위치가 속한 3x3 박스에 숫자 num이 존재하는지 확인
    const boxRow = Math.floor(row / 3) * 3; // 박스의 시작 행 계산
    const boxCol = Math.floor(col / 3) * 3; // 박스의 시작 열 계산
    for (let i = boxRow; i < boxRow + 3; i++) {
      // 박스의 각 행 탐색
      for (let j = boxCol; j < boxCol + 3; j++) {
        // 박스의 각 열 탐색
        if (board[i][j] === num) {
          return true; // num이 박스에 존재하면 true 반환
        }
      }
    }
    return false; // num이 박스에 없으면 false 반환
  }

  function findEmptyPosition() {
    // 스도쿠 보드에서 비어 있는 위치(0이 있는 곳)를 찾음
    for (let i = 0; i < 9; i++) {
      // 9x9 보드의 각 행 탐색
      for (let j = 0; j < 9; j++) {
        // 각 행의 각 열 탐색
        if (board[i][j] === 0) {
          return [i, j]; // 비어 있는 위치 (row, col) 반환
        }
      }
    }
    return null; // 비어 있는 위치가 없으면 null 반환
  }

  function findSolution() {
    // 스도쿠 보드를 백트래킹 방식으로 해결하는 재귀 함수
    const emptyPos = findEmptyPosition(); // 비어 있는 위치를 찾음
    if (!emptyPos) {
      // 비어 있는 위치가 없으면 스도쿠가 해결된 것으로 간주
      return true;
    }
    const [row, col] = emptyPos; // 비어 있는 위치의 행(row)과 열(col)을 가져옴
    for (let num = 1; num <= 9; num++) {
      // 1부터 9까지의 숫자를 시도
      if (isValid(num, row, col)) {
        // 현재 숫자가 유효한 경우
        board[row][col] = num; // 보드에 숫자를 넣음
        if (findSolution()) {
          // 다음 빈 칸을 해결하며 스도쿠가 완성되면 true 반환
          return true;
        }
        board[row][col] = 0; // 실패하면 원래 상태로 되돌림 (백트래킹)
      }
    }
    return false; // 모든 숫자를 시도했으나 해결되지 않으면 false 반환
  }

  findSolution(); // 스도쿠 해결 함수 실행
  return board; // 해결된 스도쿠 보드 반환
}
