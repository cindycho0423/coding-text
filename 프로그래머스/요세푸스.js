class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  // 사이즈를 구해야하는지 몰라서 처음에는 items.length로 구함 => 
  // pop 메서드가 실제로 배열에서 요소를 제거하지 않고, 단지 front 인덱스를 증가시키는 것이기 때문에
  // items.length는 실제 남아있는 요소의 수를 정확히 반영하지 않음.
  // 대신 rear(추가된 총 요소 수)에서 front(처리된 요소 수)를 빼면 실제 남아있는 요소의 수를 얻을 수 있음.
  size() {
    return this.rear - this.front;
  }
}

function solution(n, k) {
  const queue = new Queue();
  Array.from({ length: n }, (_, i) => {
    queue.push(i + 1);
  });

  // 아이템이 하나만 남을 때까지
  while (queue.size() > 1) {
    // k 앞의 아이템들은 뒤로 보내고
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }
    // k 번째는 front 숫자 올려서 팝
    queue.pop();
  }
  // 마지막 남은 아이템 
  return queue.pop();
}

console.log(solution(5, 2));
