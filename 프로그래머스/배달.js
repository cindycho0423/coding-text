// 힙을 통해 가장 작은 값을 쉽게 찾아낼 수 있다.
// 다익스트라 알고리즘에서는 거리가 가장 짧은 경로부터 계산해야 하기 때문에 최소 힙이 필요하다.
class MinHeap {
  constructor() {
    this.items = [];
  }

  // 현재 힙에 몇 개의 요소가 있는지 알려준다.
  size() {
    return this.items.length;
  }

  // 요소를 힙에 추가하고,
  // bubbleUp 함수를 호출해서 새로운 요소가 힙의 규칙(작은 값이 위로 오게)을 따르도록 올려보낸다.
  // 즉, 삽입된 요소가 부모 노드보다 작으면 부모와 자리를 바꿔서 올려보내는 것
  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  // 가장 작은 값을 빼내고, 마지막 요소를 맨 앞으로 옮긴 뒤 bubbleDown을 호출해 힙을 다시 정렬한다.
  pop() {
    if (this.size() === 0) {
      return null;
    }
    // this.items[0], 즉 배열의 첫 번째 요소는 힙에서 가장 작은 값이므로 min에 저장해둡니다.
    const min = this.items[0];

    // 배열의 마지막 요소를 첫 번째 위치로 이동시키고,
    this.items[0] = this.items[this.size() - 1];

    // pop()으로 마지막 요소를 제거
    this.items.pop();

    // bubbleDown()을 호출해 힙의 규칙을 다시 맞춘다. 이제 위에서 내려오면서 힙 규칙을 유지하는 과정이다.
    this.bubbleDown();

    // 최종적으로 min을 반환한다.
    return min;
  }

  // 두 위치에 있는 값을 서로 바꿔준다. (왜)
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  // 새로 추가한 요소가 부모보다 작으면 위로 올려보내서 힙 규칙을 유지
  bubbleUp() {
    // index를 힙의 마지막 요소 위치로 설정
    let index = this.size() - 1;
    while (index > 0) {
      // parentIndex를 계산해 부모 위치를 찾음
      const parentIndex = Math.floor((index - 1) / 2);

      // 부모와 현재 요소를 비교해서 부모가 더 작다면 멈춥니다(break).
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }

      // 부모가 더 크다면 swap()으로 자리 바꾸고,
      this.swap(index, parentIndex);

      // index를 parentIndex로 업데이트해서 다시 부모와 비교합니다.
      index = parentIndex;
    }
  }

  // 힙에서 최솟값을 제거한 후, 맨 위에 있는 요소를 아래로 내려서 힙 규칙을 유지
  bubbleDown() {
    // index를 0으로 초기화하고,
    let index = 0;
    // 왼쪽 자식(leftChild)과 오른쪽 자식(rightChild)의 위치를 계산
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      // 두 자식 중 더 작은 값을 smallerChild로 설정
      let smallerChild =
        rightChild < this.size() && this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild;
      // smallerChild와 현재 요소(index)를 비교해, 현재 요소가 더 작다면 멈춘다.
      // 아니라면 자리 바꾸고, index를 smallerChild로 업데이트해서 다시 자식들과 비교한다.
      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(N, road, K) {
  // 각 노드에 연결된 간선들을 저장할 배열
  // 각 마을에 연결된 다른 마을과의 거리를 기록할 배열. ex)graph[1]은 1번 마을에서 갈 수 있는 모든 마을과의 거리를 담고 있다.
  const graph = Array.from({ length: N + 1 }, () => []);

  // 출발점에서 각 노드까지의 최단 거리를 저장할 배열
  // 시작 마을에서 다른 마을까지 가는 최단 거리를 기록하는 배열. 처음에는 모든 마을까지 거리가 Infinity로 설정되지만,
  const distances = Array(N + 1).fill(Infinity);

  // 출발점은 0으로 초기화
  // 출발점인 1번 마을까지의 거리는 0으로 초기화
  distances[1] = 0;

  // 그래프 구성
  // 여기서는 road 배열을 통해 주어진 도로 정보를 그래프에 저장. 각각의 a, b, cost는 마을 a와 b사이의 도로 길이가 cost 라는 뜻
  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  // 다익스트라 알고리즘 시작
  // heap.insert([0, 1]): 출발점(1번 마을)에서의 거리가 0이므로 [0,1]을 힙에 넣는다.
  const heap = new MinHeap();
  heap.insert([0, 1]); // 출발점을 heap에 추가
  // 힙에서 가장 작은 거리를 가진 마을을 꺼내면서, 그 마을을 node로 사용해 인접한 다른 마을까지의 최단 거리를 갱신한다.
  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    // 인접한 노드들의 최단 거리를 갱신하고 heap에 추가
    // 노드와 연결된 모든 nextNode를 확인한다.
    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      // cost를 계산해서 nextNode에 저장된 거리보다 작다면 업데이트하고, 힙에 [cost, nextNode]를 넣는다.
      // 이렇게 하면 다음 차례에 최소 거리부터 검사할 수 있다.
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }

  // distances 배열에서 k 이하인 값의 개수를 구하여 반환
  // 모든 마을에 대한 최단 거리가 계산되면, distances 배열에서 K 이내로 갈 수 있는 마음의 개수를 센다.
  return distances.filter(dist => dist <= k).length;
}
