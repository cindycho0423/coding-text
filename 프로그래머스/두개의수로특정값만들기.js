// function solution(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return true;
//     }
//   }
//   return false;
// }

// console.log(solution([1, 2, 3, 4, 8], 6));
// console.log(solution([2, 3, 5, 9], 10));
// console.log(solution([1, 3, 5, 9], 10));

function solution(arr, target) {
  const numObj = {};

  for (let num of arr) {
    const remaining = target - num;
    console.log(numObj);
    if (remaining in numObj) {
      console.log(numObj);
      return true;
    }
    numObj[num] = num;
    console.log(numObj);
  }

  return false;
}

// 테스트
console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
