class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  // 이동할 수 있는 방향을 나타내는 배열 move 선언
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // 맵의 크기를 저장하는 변수 선언
  const n = maps.length;
  const m = maps[0].length;

  // 시작 지점부터 각 칸까지 거리를 저장하는 배열 dist를 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  // bfs 함수를 선언
  function bfs(start) {
    // 너비 우선 탐색에 사용할 queue를 선언하고 시작 위치를 queue에 추가
    const q = new Queue();
    q.push(start);
    // 시작 노드의 최소비용을 1로 저장
    // dist는 거리를 저장하기도 하지만 방문 여부를 체크하는 역할을 하기도 함.
    // 초깃값은 -1이므로 이 값이 -1이면 방문하지 않은 것으로 생각
    dist[start[0]][start[1]] = 1;

    // 너비 우선 탐색은 queue가 빌 때 까지 반복
    while (!q.isEmpty()) {
      const here = q.pop();

      // 현재 위치 here를 기준으로 오프셋 배열을 활용하여 이동할 수 있는 모든 방향 살핌
      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const column = here[1] + dy;

        // (유효한 인덱스가 아니면) 이동한 위치가 범위를 벗어난 경우 다음 방향으로 넘어감
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        // 이동한 위치에 벽이 있는 경우 연산을 진행하지 않고 다음 방향으로 넘어감
        if (maps[row][column] === 0) {
          continue;
        }

        // 이동한 위치가 처음 방문하는 경우, queue에 추가하고 거리 갱신
        // 이 조건문이 없으면 무한 루프에 빠진다.
        // 왜냐하면 아무 기준 없이 상하좌우로 움직이면 기존에 방문한 칸도 방문할 수 있기 때문에 '방문 여부'를 체크해야 한다.
        // 반복문을 빠져나오면 dist의 좌표에 시작 노드로부터 해당 칸까지의 최소 비용이 저장되어 있을 것
        if (dist[row][column] === -1) {
          q.push([row, column]);
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }
    // 거리를 저장하는 배열 dist를 반환
    return dist;
  }

  // 시작 위치에서 bfs() 함수를 호출하여 거리 계산
  bfs([0, 0]);

  // 목적지까지의 거리 반환, 목적지에 도달하지 못한 경우 -1을 반환
  return dist[n - 1][m - 1];
}

// 배열의 크기를 N * M이라고 하면 dist 배열을 초기화할 때의 시간 복잡도는 O(N * M)이고,
// 너비 우선 탐색을 할 때는 최악의 경우 dist의 모든 위치가 큐에 들어가는 경우이므로 너비 우선 탐색의 시간 복잡도는 O(N * M)이다.
// 따라서 최종 시간 복잡도는 O(N * M)이다.
