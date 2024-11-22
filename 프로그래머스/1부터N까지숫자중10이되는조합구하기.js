function solution(N) {
  // 조합 결과를 담을 배열
  const results = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      // 합이 10이 되면 결과 배열에 추가
      results.push(selectedNums);
      return;
    }

    // 다음에 선택할 수 있는 숫자들을 하나씩 선택하면서
    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        // 선택한 숫자의 합이 10보다 작거나 같으면
        backtrack(sum + i, selectedNums.concat(i), i + 1); // 백트래킹 함수를 재귀적으로 호출
      }
    }
  }

  backtrack(0, [], 1); // 백트래킹 함수 호출
  return results;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));
