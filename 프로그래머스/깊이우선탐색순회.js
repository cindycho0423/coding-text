function solution(graph, start) {
  // 인접리스트 형태로 바꾸기 위해 객체를 만들어 노드를 연결해준다.
  const adjList = {};
  graph.forEach(([u, v]) => {
    // 만약 adjList에 u가 존재하지 않으면 빈배열을 할당한다.
    if (!adjList[u]) adjList[u] = [];
    // adjList[u]의 배열에 v를 넣는다.
    adjList[u].push(v);
  });
  // 아래와 같은 형태로 만들어준다.
  // {
  //   A: ['B'],
  //   B: ['C'],
  //   C: ['D'],
  //   D: ['E']
  // }

  //	DFS 함수는 노드와 방문된 노드들의 집합(visited), 그리고 탐색 결과(result)를 인자로 받는다.
  function dfs(node, visited, result) {
    visited.add(node); // 1단계: 현재 노드를 '방문됨'으로 표시
    result.push(node); // 2단계: 현재 노드를 탐색 결과에 추가

    // 3단계: 현재 노드에 연결된 모든 이웃 노드를 확인
    (adjList[node] || []).forEach(neighbor => {
      if (!visited.has(neighbor)) {
        // 4단계: 방문하지 않은 이웃 노드가 있으면
        dfs(neighbor, visited, result); // 그 이웃 노드를 재귀적으로 방문
        console.log(node, visited, result);
      }
    });
  }

  const visited = new Set();
  const result = [];
  dfs(start, visited, result);

  return result;
}

console.log(
  solution(
    [
      ['A', 'B'],
      ['B', 'C'],
      ['C', 'D'],
      ['D', 'E'],
    ],
    'A'
  )
);

console.log(
  solution(
    [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'D'],
      ['B', 'E'],
      ['C', 'F'],
      ['E', 'F'],
    ],
    'A'
  )
);
