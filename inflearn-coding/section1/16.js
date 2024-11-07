// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
// 입력 설명: 첫 줄에 문자열이 입력됩니다.
// 출력 설명: 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
// 입력 예제: ksekkset
// 출력 예제: kset

// -> 내가 쓴 답

function solution(n) {
  let answer = [];
  let word = n.split('');
  word.map((n, idx) => {
    if (answer.includes(n)) idx++;
    else answer.push(n);
  });
  return answer.join('');
}

console.log(solution('ksekkset'));

// -> 해설
function solution2(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
