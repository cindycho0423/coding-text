// 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
// (첫 번째 수는 무조건 출력한다.)
// 입력 설명: 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
// 출력 설명: 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
// 입력 예제:
// 6
// 7 3 9 5 6 12
// 출력 예제:
// 7 9 6 12

// -> 내가 쓴 답

function solution(s) {
  let answer = [];
  answer.push(s[0]);
  for (let i = 0; i < s.length; i++) {
    if (s[i] > s[i - 1]) {
      answer.push(s[i]);
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
