function dfs(computers, visited, node) {
  // 현재 방문 중인 node를 true로 표시해서, 이 노드를 방문했다고 기록한다.
  visited[node] = true;
  console.log(`노드 ${node} 방문`);

  // 현재 노드에 연결된 컴퓨터들을 순회한다. computers[node][idx] 값이 1이면
  // node와 idx 컴퓨터가 연결된 것이고, 0이면 연결되지 않은 것이다.
  for (let idx = 0; idx < computers[node].length; idx++) {
    // 만약 node와 idx가 연결되어 있고 (computers[node][idx] === 1),
    // idx를 아직 방문하지 않았다면 (!visited[idx]),
    if (computers[node][idx] && !visited[idx]) {
      console.log(`노드 ${node}와 연결된 노드 ${idx}로 이동`);

      // 그 컴퓨터로 이동해서 dfs를 재귀적으로 호출해요.
      dfs(computers, visited, idx);
    }
  }
}

// 전체 네트워크의 개수를 계산하는 부분
function solution(n, computers) {
  let answer = 0;

  // 방문 여부를 저장하는 배열이며 모든 컴퓨터가 아직 방문되지 않았음으로 초기값은 false이다
  const visited = Array(n).fill(false);
  console.log(`방문 배열 1번 ${visited}`);

  // 모든 컴퓨터를 하나씩 순회하면서
  for (let i = 0; i < n; i++) {
    // 아직 방문하지 않은 노드라면
    if (!visited[i]) {
      console.log(`네트워크 시작점 노드 ${i}`);

      // DFS를 호출하여 연결된 노드들을 모두 방문하면서 네트워크 개수 증가
      dfs(computers, visited, i);
      // 깊이 우선 탐색을 끝냈다면 카운트를 하나 늘린다.
      answer++;
      console.log(`방문 배열 2번 ${visited}`);
      console.log(`네트워크 카운트 증가, 현재 개수: ${answer}`);
    }
  }
  return answer;
}

//dfs가 호출될 때마다 연결된 컴퓨터들을 모두 방문하므로 하나의 네트워크로 묶인다.
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
