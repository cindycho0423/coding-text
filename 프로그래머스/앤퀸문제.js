// dfs를 쓸거구요
// 위에서부터 하나씩 채우기
// 1번이 첫줄에 자리 잡은 후에 다음 줄에 다음 퀸이 오는데, 이때 같은 숫자라면 동일한 세로줄이므로 탈락
// 동시에 차가 행 차의 절댓값이 되면 대각선이므로 탈락
// 근데 이때 백트래킹으로 처음으로 돌아가면 시간이 오래 걸릴 것 같은데
// 각 자리마다 되는지 안 되는지 분류해두고 이전걸로 돌아가서 다시 시도하면 좀 더 효율이 나지 않을까?
// 2번까지 배치 완료했다 치고 3번이 되면 1번 퀸 피해서 배치하고 재귀해서 2번퀸 피해서 배치 반복
// n개의 퀸을 다 배치했다면 cnt++
function solution(n) {
  let cnt = 0;
  const board = Array(n).fill(0);

  function isPossible(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
        return false;
      }
    }
    return true;
  }

  function dfs(row) {
    if (row === n) {
      cnt++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isPossible(row, col)) {
        board[row] = col;
        dfs(row + 1);
      }
    }
  }
  dfs(0);
  return cnt;
}
