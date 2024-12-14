function solution(s) {
  // 각 문자열의 빈도수 저장하기
  const counting = new Map();
  let alphabet = [];
  let word = s.split('');

  word.map(a => {
    if (counting.has(a)) {
      counting.set(a, counting.get(a) + 1);
    } else {
      counting.set(a, 1);
    }
  });

  alphabet = alphabet.sort((a, b) => a - b);
  alphabet.map(a => a.charCodeAt());

  word.map(a => alphabet.push(a.charCodeAt()));
  console.log(alphabet);
  // 각 문자를 아스키코드값으로 매핑하기
}

console.log(solution('hello'));
console.log(solution('algorithm'));
