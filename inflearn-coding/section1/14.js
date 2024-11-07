// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
//
// 입력 설명: 첫 줄에 자연수 N이 주어진다. (3 <= N <= 30)
//          두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
//          각 문자열의 길이는 서로 다릅니다.
// 출력 설명: 첫 줄에 가장 긴 문자열을 출력한다.
// 입력 예제: ["teacher", "time", "student", "beautiful", "good"]
// 출력 예제: beautiful

// -> 내가 쓴 답
function solution2(n) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  n.forEach(x => {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  });

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution2(str));

// 지피티 답
function solution3(n) {
  return n.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}
/*
이 코드에서는 reduce 메서드를 사용하여 배열 n을 순회하면서 가장 긴 문자열을 찾아 반환합니다. reduce 메서드는 두 개의 인자를 받습니다:

Accumulator (longest): 현재까지 가장 긴 문자열을 저장합니다.
Current Value (current): 현재 순회 중인 배열 요소입니다.
current.length가 longest.length보다 크면 current를 longest로 업데이트하고, 그렇지 않으면 longest를 그대로 유지합니다. 초기값으로 빈 문자열 ''을 설정하여 가장 긴 문자열을 비교하는 기준을 만듭니다.
 */
console.log(solution3(str)); // Output: beautiful

// -> 해설

function solution(n) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (x of n) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(solution(str));
