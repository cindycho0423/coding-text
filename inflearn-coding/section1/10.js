// 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.
// 입력 설명: 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
// 출력 설명: 첫 줄에 해당 문자의 개수를 출력한다.
// 입력 예제: COMPUTERPROGRAMMING
// 출력 예제:

// -> 내가 쓴 답
function solution(s, t) {
  let answer = 0;
  for (x of s) {
    if (x === t) {
      answer += 1;
    }
  }
  return answer;
}

function solution3(s, t) {
  return s.split('').filter(x => x === t).length;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.log(solution3(str, 'R'));

// -> 해설
function solution2(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

function solution5(s, t) {
  let answer = s.split(t).length - 1;
  return answer;
}

console.log(solution2(str, 'R'));
console.log(solution5(str, 'R'));
