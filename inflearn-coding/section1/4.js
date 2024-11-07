// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
//
//
// 입력 설명: 첫 번째 줄에 20 이하의 자연수 N이 입력된다.
// 출력 설명: 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// 입력 예제: 6
// 출력 예제: 21

// -> 내가 쓴 답

function solution(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  let answer = array.reduce((a, b) => a + b);
  return answer;
}

console.log(solution(5));

// -> 쓰고 싶었던 답
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
}

console.log(solution(5));

// 시간 복잡도가 0인 답
function solution(n) {
  return (n * (n + 1)) / 2;
}

console.log(solution(5));

// -> 해설
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(5));
