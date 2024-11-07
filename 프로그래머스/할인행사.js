function isShallowEqual(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) {
      return false;
    }
  }
  return true;
}

function solution(want, number, discount) {
  let answer = 0;
  const wantMap = new Map();

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const discountMap = new Map();

    for (let j = 0; j < 10; j++) {
      const item = discount[i + j];
      discountMap.set(item, (discountMap.get(item) || 0) + 1);
    }

    if (isShallowEqual(wantMap, discountMap)) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
