class MaxHeap {
  constructor() {
    this.items = []; // 최대 힙을 저장할 배열 초기화
  }

  size() {
    return this.items.length; // 힙의 크기(저장된 요소 개수) 반환
  }

  push(item) {
    this.items.push(item); // 새 요소를 힙의 끝에 추가
    this.bubbleUp(); // 추가된 요소를 올바른 위치로 이동시키는 작업 수행
  }

  pop() {
    if (this.size() === 0) {
      return null; // 힙이 비어 있으면 null 반환
    }

    const max = this.items[0]; // 루트 노드(가장 큰 값) 저장
    this.items[0] = this.items[this.size() - 1]; // 힙의 마지막 요소를 루트로 이동
    this.items.pop(); // 마지막 요소 제거
    this.bubbleDown(); // 루트를 올바른 위치로 이동시키는 작업 수행
    return max; // 가장 큰 값 반환
  }

  swap(a, b) {
    // 두 인덱스에 해당하는 요소의 위치를 바꿈
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1; // 방금 추가한 요소의 인덱스
    while (index > 0) {
      // 루트에 도달할 때까지 반복
      const parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스 계산
      if (this.items[parentIndex] >= this.items[index]) {
        break; // 부모 노드가 현재 노드보다 크거나 같으면 반복 종료
      }

      this.swap(index, parentIndex); // 부모와 현재 노드의 위치를 교환
      index = parentIndex; // 현재 노드의 위치를 부모로 업데이트
    }
  }

  bubbleDown() {
    let index = 0; // 루트부터 시작
    while (index * 2 + 1 < this.size()) {
      // 왼쪽 자식이 있을 때까지 반복
      let leftChild = index * 2 + 1; // 왼쪽 자식의 인덱스
      let rightChild = index * 2 + 2; // 오른쪽 자식의 인덱스
      let largerChild =
        rightChild < this.size() && this.items[rightChild] > this.items[leftChild]
          ? rightChild // 오른쪽 자식이 더 크면 오른쪽 선택
          : leftChild; // 그렇지 않으면 왼쪽 선택

      if (this.items[index] >= this.items[largerChild]) {
        break; // 현재 노드가 자식보다 크거나 같으면 반복 종료
      }

      this.swap(index, largerChild); // 현재 노드와 더 큰 자식의 위치를 교환
      index = largerChild; // 현재 노드의 위치를 자식으로 업데이트
    }
  }
}
