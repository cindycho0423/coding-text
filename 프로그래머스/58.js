// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때 k번째에 있는 수 구하기

function solution(array, commands) {
  let answer = [];

  for (command of commands) {
    let num = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(num[command[2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
