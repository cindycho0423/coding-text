function solution(s) {
  let zero = 0;
  let transform = 0;

  while (s !== '1') {
    let filtered = s.split('').filter(a => {
      if (a === '0') {
        zero++;
        return false;
      }
      return true;
    });

    s = filtered.length.toString(2);
    transform++;
  }

  return [transform, zero];
}

console.log(solution('110010101001'));
console.log(solution('01110'));
