function solution(graph, source) {
  // 그래프의 노드 수
  const numVertices = graph.length;

  // 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  // 직전 경로 배열 초기화 (모든 값을 null로 초기화)
  const predecessor = Array(numVertices).fill(null);
  console.log(`초기값 - 노드수:${numVertices} 거리배열:${distance} 직전경로:${predecessor}`);

  // 간선 수 만큼 반복하여 최단 경로 갱신
  for (let temp = 0; temp < numVertices - 1; temp++) {
    console.log(`--- ${temp + 1}번째 반복 ---`);
    // 각 노드 u에서 출발하는 간선을 검사
    for (let u = 0; u < numVertices; u++) {
      // 노드 u에서 연결된 다른 노드 v와 u에서 v까지의 간선 가중치 weight를 가져옴
      for (const [v, weight] of graph[u]) {
        // 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
        if (distance[u] + weight < distance[v]) {
          // 최단 거리를 갱신해준다.
          distance[v] = distance[u] + weight;
          // 직전 경로를 업데이트해준다.
          predecessor[v] = u;
          console.log(`노드 ${u}를 거쳐 노드 ${v}의 거리를 ${distance[v]}로 갱신`);
        }
      }
    }
    console.log('현재 거리 배열:', distance);
    console.log('현재 직전 경로 배열:', predecessor);
  }

  // 음의 가중치 순회 체크
  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      // 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
      if (distance[u] + weight < distance[v]) {
        console.log('음의 가중치 사이클이 발견되었습니다.');
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

// 예제 사용
const graph = [
  [
    [1, 4],
    [2, 1],
  ], // 노드 0은 노드 1 (가중치 4) 및 노드 2 (가중치 1)로 연결됨
  [
    [2, 2],
    [3, 1],
  ], // 노드 1은 노드 2 (가중치 2) 및 노드 3 (가중치 1)로 연결됨
  [[3, 5]], // 노드 2는 노드 3 (가중치 5)로 연결됨
  [[4, 3]], // 노드 3은 노드 4 (가중치 3)로 연결됨
  [], // 노드 4는 나가는 간선이 없음
];
const source = 0;

console.log(solution(graph, source));
