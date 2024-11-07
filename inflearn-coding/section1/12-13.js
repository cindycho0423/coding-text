// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.
//
// 입력 설명: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// 출력 설명: 첫 줄에 대문자로 통일된 문자열이 출력된다.
// 입력 예제: ItisTime
// 출력 예제:

// -> 내가 쓴 답

function solution(s) {
  return s.toUpperCase();
}

let str = 'ItisTimeToStudy';
console.log(solution(str));

// -> 해설
function solution2(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }

  return answer;
}

console.log(solution2(str));

// 대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
//
// 입력 설명: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// 출력 설명: 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
// 입력 예제: StuDY
// 출력 예제: sTUdy

// -> 내가 쓴 답

function solution3(s) {
  return s
    .split('')
    .map(x => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join('');
}

let str2 = 'StuDY';
console.log(solution3(str2));

// -> 해설
function solution4(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

let str3 = 'ItisTimeToStudy';
console.log(solution4(str3));
