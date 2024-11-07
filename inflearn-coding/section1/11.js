// 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
//
// 입력 설명: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
// 출력 설명: 첫 줄에 대문자의 개수를 출력한다.
// 입력 예제: KoreaTimeGood
// 출력 예제: 3

// -> 내가 쓴 답

function solution(n) {
  let answer = n.split('').filter(x => x === x.toUpperCase()).length;
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

// -> 해설
function solution2(n) {
  let answer = 0;
  for (let x of n) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

console.log(solution2(str));

// 대문자 아스키코드 65~90 (총 26개)
// 소문자 아스키코드 97~122 (총 26개)

function solution3(n) {
  let answer = 0;
  for (let x of n) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

console.log(solution3(str));
