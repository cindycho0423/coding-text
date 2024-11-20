class Queue {
  // 큐 클래스 정의
  items = []; // 큐의 요소들을 저장할 배열
  front = 0; // 큐의 앞쪽 인덱스를 가리킴
  rear = 0; // 큐의 뒤쪽 인덱스를 가리킴

  push(item) {
    // 큐에 요소를 추가하는 메서드
    this.items.push(item); // 배열의 끝에 요소를 추가
    this.rear++; // rear 인덱스를 증가시켜 다음 위치를 가리킴
  }

  first() {
    // 큐의 첫 번째 요소를 반환하는 메서드
    return this.items[this.front];
  }

  last() {
    // 큐의 마지막 요소를 반환하는 메서드
    return this.items[this.rear - 1];
  }

  pop() {
    // 큐의 첫 번째 요소를 제거하고 반환하는 메서드
    return this.items[this.front++]; // front를 증가시켜 다음 요소를 가리키게 함
  }

  isEmpty() {
    // 큐가 비어 있는지 확인하는 메서드
    return this.front === this.rear; // front와 rear가 같으면 큐가 비어 있음
  }
}

function solution(board) {
  // 주어진 board에서 최소 비용을 계산하는 함수

  function isValid(x, y) {
    // 좌표가 보드 범위 내에 있는지 확인하는 함수
    return 0 <= x && x < N && 0 <= y && y < N; // x와 y가 0 이상 N 미만이어야 유효
  }

  function isBlocked(x, y) {
    // 좌표가 이동 불가능한 상태인지 확인하는 함수
    return (x === 0 && y === 0) || !isValid(x, y) || board[x][y] === 1;
    // (0, 0)은 항상 막힌 상태로 간주
    // 보드 범위를 벗어나거나, board 값이 1이면 막힘
  }

  function calculateCost(direction, prevDirection, cost) {
    // 방향에 따라 새로운 비용을 계산하는 함수
    if (prevDirection === -1 || (prevDirection - direction) % 2 === 0) {
      // 처음 이동이거나 같은 방향으로 이동하는 경우
      return cost + 100; // 직선 도로 비용 추가
    } else {
      // 다른 방향으로 이동하는 경우 (코너를 돈 경우)
      return cost + 600; // 코너 비용 추가
    }
  }

  function isShouldUpdate(x, y, direction, newCost) {
    // 새로운 비용이 기존 비용보다 적으면 업데이트 여부를 판단하는 함수
    return visited[x][y][direction] === 0 || visited[x][y][direction] > newCost;
    // 방문하지 않았거나 기존 비용보다 새 비용이 적으면 업데이트 필요
  }

  const queue = new Queue(); // BFS를 위한 큐 생성
  queue.push([0, 0, -1, 0]); // 초기 위치 (0, 0), 이전 방향 없음(-1), 초기 비용 0
  const N = board.length; // 보드 크기
  const directions = [
    [0, -1], // 왼쪽 이동
    [-1, 0], // 위쪽 이동
    [0, 1], // 오른쪽 이동
    [1, 0], // 아래쪽 이동
  ];

  const visited = Array.from(
    { length: N }, // 보드 크기만큼 반복
    () =>
      Array.from(
        { length: N }, // 각 좌표마다
        () => Array(4).fill(0) // 4개의 방향별 방문 상태 저장
      )
  );

  let answer = Infinity; // 최소 비용 초기값을 무한대로 설정

  while (!queue.isEmpty()) {
    // 큐가 빌 때까지 반복 (BFS 수행)
    const [x, y, preDirection, cost] = queue.pop(); // 현재 좌표, 이전 방향, 비용 가져오기

    for (let direction = 0; direction < 4; direction++) {
      // 4개의 방향으로 이동 시도
      const [dx, dy] = directions[direction]; // 이동 방향 설정
      const newX = x + dx; // 새로운 x좌표
      const newY = y + dy; // 새로운 y좌표

      if (isBlocked(newX, newY)) {
        // 이동 불가능한 경우 스킵
        continue;
      }

      const newCost = calculateCost(direction, preDirection, cost); // 새로운 비용 계산

      if (newX === N - 1 && newY === N - 1) {
        // 목적지에 도착한 경우
        answer = Math.min(answer, newCost); // 최소 비용 갱신
      } else if (isShouldUpdate(newX, newY, direction, newCost)) {
        // 방문하지 않았거나 비용이 더 적으면 큐에 추가
        queue.push([newX, newY, direction, newCost]); // 새로운 상태를 큐에 추가
        visited[newX][newY][direction] = newCost; // 방문 상태와 비용 갱신
      }
    }
  }

  return answer; // 최소 비용 반환
}
