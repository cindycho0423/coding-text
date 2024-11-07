// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES" 없으면 "NO"
// 입력 설명: 첫 번째 줄에 100 이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// 출력 설명: 첫 번째 줄에 "YES", "NO"를 출력한다.
// 입력 예제: 6 7 11
// 출력 예제: YES

// -> 내가 쓴 답
function solution(a, b, c) {
  if (a > b && a > c) {
    if (b + c > a) return 'YES';
    else return 'NO';
  } else if (b > a && b > c) {
    if (a + c > b) return 'YES';
    else return 'NO';
  }
  if (c > a && c > b) {
    if (a + b > c) return 'YES';
    else return 'NO';
  }
}

console.log(solution(13, 33, 17));

// -> 해설
function solution2(a, b, c) {
  let answer = 'YES',
    max;
  let total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (total - max <= max) answer = 'NO';
  return answer;
}

console.log(solution2(13, 33, 17));
