// 7개의 자연수가 주어질 때,
// 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는
// 77, 41, 53, 85이므로 그 합은 256이 되고,
// 최소값은 41이 됩니다.
// 입력 설명: 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
// 출력 설명: 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
// 입력 예제: 12, 77, 38, 41, 53, 92, 85
// 출력 예제: 256 / 41

// -> 내가 쓴 답

function solution(arr) {
  let odd = arr.filter(num => num % 2 === 1);
  let sum = odd.reduce((a, b) => a + b);
  let min = Math.min(...odd);
  let answer = `sum:${sum} min:${min} `;

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// -> 해설
function solution2(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(solution2(arr));
