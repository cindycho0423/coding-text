function solution(nodes) {
  const answer = [];
  let preOrder = '';
  let inOrder = '';
  let postOrder = '';

  // 트리에서 index를 기준으로 전위/중위/후위 순회 구현
  function traverse(index) {
    if (index >= nodes.length) return;

    // 전위 순회(Pre-order) - 루트 -> 왼쪽 -> 오른쪽
    preOrder += nodes[index] + ' ';

    // 왼쪽 자식 노드 순회
    traverse(2 * index + 1);

    // 중위 순회(In-order) - 왼쪽 -> 루트 -> 오른쪽
    inOrder += nodes[index] + ' ';

    // 오른쪽 자식 노드 순회
    traverse(2 * index + 2);

    // 후위 순회(Post-order) - 왼쪽 -> 오른쪽 -> 루트
    postOrder += nodes[index] + ' ';
  }

  // 0번 인덱스에서 시작 (루트 노드)
  traverse(0);

  // 순회 결과를 배열에 저장
  answer.push(preOrder.trim()); // 공백 제거 후 push
  answer.push(inOrder.trim()); // 공백 제거 후 push
  answer.push(postOrder.trim()); // 공백 제거 후 push

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
