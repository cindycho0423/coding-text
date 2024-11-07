class Queue {
  items = [];
  front = 0;
  rear = 0;

  pop() {
    return this.items[this.front++];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  frontWord() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function makeItems(items) {
  const queue = new Queue();
  for (item of items) {
    queue.push(item);
  }
  return queue;
}

function solution(cards1, cards2, goal) {
  const firstCards = makeItems(cards1);
  const secondCards = makeItems(cards2);
  const goalCards = makeItems(goal);

  while (!goalCards.isEmpty()) {
    if (goalCards.frontWord() === firstCards.frontWord()) {
      goalCards.pop();
      firstCards.front++;
    } else if (goalCards.frontWord() === secondCards.frontWord()) {
      goalCards.pop();
      secondCards.front++;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
