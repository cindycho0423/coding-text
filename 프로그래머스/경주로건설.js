class Queue {
  // 큐 클래스 정의
  items = []; // 큐에 저장될 아이템 배열
  front = 0; // 큐의 첫 번째 요소를 가리키는 인덱스
  rear = 0; // 큐의 마지막 요소를 가리키는 인덱스

  push(item) {
    // 큐에 아이템을 추가
    this.items.push(item); // 배열 끝에 아이템 추가
    this.rear++; // rear 인덱스 증가
  }

  first() {
    // 큐의 첫 번째 요소를 반환
    return this.items[this.front];
  }

  last() {
    // 큐의 마지막 요소를 반환
    return this.items[this.rear - 1];
  }

  pop() {
    // 큐의 첫 번째 요소를 제거하고 반환
    return this.items[this.front++]; // front 인덱스를 증가시켜 다음 요소를 가리키도록 함
  }

  isEmpty() {
    // 큐가 비어 있는지 확인
    return this.front === this.rear; // front와 rear가 같으면 비어 있음
  }
}

function solution(board) {
  // 주어진 board를 사용해 최소 비용을 계산하는 함수

  function isValid(x, y) {
    // 주어진 좌표가 보드 안에 있는지 확인
    return 0 <= x && x < N && 0 <= y && y < N;
  }

  function isBlocked(x, y) {
    // 특정 좌표가 막혔는지 확인
    // 시작점은 (0, 0)이라 막힌 상태로 간주
    // 보드 밖이거나 값이 1인 경우에도 막힘
    return (x === 0 && y === 0) || !isValid(x, y) || board[x][y] === 1;
  }

  function calculateCost(direction, prevDirection, cost) {
    // 방향에 따라 새로운 비용을 계산
    if (prevDirection === -1 || (prevDirection - direction) % 2 === 0) {
      // 처음 이동이거나 이전 방향과 같은 방향으로 이동하면
      return cost + 100; // 직선 도로 비용 추가
    } else {
      // 방향이 바뀌면
      return cost + 600; // 코너 비용 포함
    }
  }

  function isShouldUpdate(x, y, direction, newCost) {
    // 특정 좌표와 방향에서 새로운 비용이 더 적으면 업데이트 필요
    return visited[x][y][direction] === 0 || visited[x][y][direction] > newCost;
  }

  const queue = new Queue(); // BFS를 위한 큐 생성
  queue.push([0, 0, -1, 0]); // 시작점 (0, 0), 이전 방향 없음(-1), 초기 비용 0
  const N = board.length; // 보드의 크기
  const directions = [
    [0, -1], // 왼쪽
    [-1, 0], // 위쪽
    [0, 1], // 오른쪽
    [1, 0], // 아래쪽
  ];

  const visited = Array.from(
    { length: N }, // 보드 크기만큼 반복
    () =>
      Array.from(
        { length: N }, // 각 칸마다
        () => Array(4).fill(0) // 각 방향의 방문 상태 초기화
      )
  );
  let answer = Infinity; // 최소 비용을 무한대로 초기화

  while (!queue.isEmpty()) {
    // 큐가 빌 때까지 반복 (BFS 수행)
    const [x, y, preDirection, cost] = queue.pop(); // 현재 좌표, 이전 방향, 비용 가져오기

    for (let direction = 0; direction < 4; direction++) {
      // 4가지 방향으로 이동 시도
      const [dx, dy] = directions[direction]; // 이동 방향
      const newX = x + dx; // 새 x좌표
      const newY = y + dy; // 새 y좌표

      if (isBlocked(newX, newY)) {
        // 이동 불가한 좌표는 스킵
        continue;
      }

      const newCost = calculateCost(direction, preDirection, cost); // 새 비용 계산

      if (newX === N - 1 && newY === N - 1) {
        // 목적지에 도착한 경우
        answer = Math.min(answer, newCost); // 최소 비용 갱신
      } else if (isShouldUpdate(newX, newY, direction, newCost)) {
        // 방문 필요하면 큐에 추가
        queue.push([newX, newY, direction, newCost]);
        visited[newX][newY][direction] = newCost; // 새 비용 저장
      }
    }
  }

  return answer; // 최소 비용 반환
}
