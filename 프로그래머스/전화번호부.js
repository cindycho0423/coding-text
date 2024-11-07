function solution(phone_book) {
  const prefix = phone_book[0];
  let answer = false;

  phone_book.slice(1).map(num => {
    if (num.startsWith(prefix)) {
      answer = true;
    }
  });

  return answer;
}

console.log(solution(['119', '97674223', '1195524421']));
console.log(solution(['123', '456', '789']));
console.log(solution(['12', '123', '1235', '567', '88']));
