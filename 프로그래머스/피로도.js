function solution(k, dungeons) {
  // 탐험한 최대 던전 수를 저장할 변수
  let maxDungeons = 0;

  // 각 던전의 방문 여부를 추적할 배열 (모두 false로 초기화)
  const visited = new Array(dungeons.length).fill(false);

  // 깊이 우선 탐색(DFS) 함수
  function dfs(currentTiredness, count) {
    // 현재까지 탐험한 던전 수와 기존 최대 던전 수 중 큰 값 선택
    maxDungeons = Math.max(maxDungeons, count);

    for (let i = 0; i < dungeons.length; i++) {
      // 아직 방문하지 않은 던전이고, 현재 피로도가 입장 가능한 피로도보다 높은 경우
      if (!visited[i] && currentTiredness >= dungeons[i][0]) {
        // 해당 던전 방문 표시
        visited[i] = true;
        // 해당 던전 탐험 (피로도 감소, 탐험 횟수 증가)
        dfs(currentTiredness - dungeons[i][1], count + 1);
        // 다른 경우의 수를 위해 방문 표시 해제
        visited[i] = false;
      }
    }
  }

  // 초기 DFS 호출 (초기 피로도, 초기 탐험 횟수 0)
  dfs(k, 0);

  // 최대로 탐험할 수 있는 던전 수 반환
  return maxDungeons;
}

// 예시 테스트
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
