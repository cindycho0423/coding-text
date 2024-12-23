// 가장 큰 수
// 0 또는 양의 정수가 담긴 배열이 주어졌을 때 정수를 이어붙여 만들 수 있는 가장 큰 수

// 1. 현재 배열의 첫번째 자리가 가장 큰 수 순서대로 answer에 push
// 2. 만약 첫번째 자리수가 같다면 앞, 뒤로 붙여서 비교
// 3.

// function solution(numbers) {
//   let arr = numbers.sort((a, b) => b - a).map(a => a.toString());
//   let max = Math.max(...numbers).toString();
//   let answer;

//   for (num of arr) {
//     if (num[0] > max[0]) {
//       answer = num.toString() + max;
//     } else if (num.toString()[0] < max[0]) {
//       answer = max + num.toString();
//     } else if (num[0] === max[0]) {
//       answer = compare(num, max);
//     }

//     max = answer;
//   }

//   return answer;
// }

function solution(numbers) {
  // 숫자 배열을 문자열로 변환하고 정렬
  let sorted = numbers
    .map(num => num.toString()) // 숫자를 문자열로 변환
    .sort((a, b) => b + a - (a + b)); // 조합 결과에 따라 정렬

  // 정렬 결과가 모두 0인 경우 "0" 반환
  if (sorted[0] === '0') return '0';

  // 정렬된 배열을 하나의 문자열로 병합
  return sorted.join('');
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
