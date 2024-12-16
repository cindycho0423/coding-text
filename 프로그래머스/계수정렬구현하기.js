function solution(word) {
  // 1. 알파벳 숫자만큼 배열을 만든다.
  let counts = Array(26).fill(0);
  // 2. 해당하는 알파벳의 인덱스는 값을 더해준다.
  for (count of word) {
    counts[count.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  // 3. 알파벳 배열을 순회하면서 숫자가 0보다 크면 그 수만큼 숫자를 알파벳으로 변환하여 글자를 생성한다.
  let answer = '';
  for (let i = 0; i < 26; i++) {
    answer += String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(counts[i]);
  }
  return answer;
}

console.log(solution('hello'));
console.log(solution('algorithm'));
