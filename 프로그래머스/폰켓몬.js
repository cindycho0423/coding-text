function solution(nums) {
  let answer = 0;

  const pocketmonSet = new Set(nums);
  const canGet = nums.length / 2;

  Math.min(canGet, pocketmonSet.size);

  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([2, 2, 2, 3, 3, 3]));
