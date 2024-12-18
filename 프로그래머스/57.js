// 정수 n을 받아 n의 각 자릿수를 내림차순으로 정렬한 새로운 정수를 반환하기
function solution(n) {
  let answer = n;
  return Number(
    answer
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(solution(118372));
