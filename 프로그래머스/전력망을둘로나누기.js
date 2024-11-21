function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);

  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) {
      if (child !== parent) {
        cnt += dfs(child, node);
      }
    }
    return cnt;
  }

  let minDiff = Infinity; // 두 전력망 노드 개수 차이의 최솟값
  for (const [a, b] of wires) {
    // 1) 전선 [a, b]를 끊음
    graph[a].splice(graph[a].indexOf(b), 1); // a에서 b 제거
    graph[b].splice(graph[b].indexOf(a), 1); // b에서 a 제거

    // 2) 끊긴 상태에서 서브트리 크기 계산
    const cntA = dfs(a, b); // 노드 a를 루트로 하는 서브트리 크기
    const cntB = n - cntA; // 나머지 서브트리 크기 (전체에서 cntA를 뺌)

    // 3) 두 서브트리 간의 노드 개수 차이 계산
    minDiff = Math.min(minDiff, Math.abs(cntA - cntB));

    // 4) 전선 복구
    graph[a].push(b); // a에서 b 다시 연결
    graph[b].push(a); // b에서 a 다시 연결
  }

  return minDiff;
}

console.log(
  solution(9, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
