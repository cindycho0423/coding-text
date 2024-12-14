// function solution(arr1, arr2) {
//   let array = [...arr1, ...arr2];

//   return array.sort((a, b) => a - b);
// }

function solution(arr1, arr2) {
  let i = 0,
    j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // 남은 arr1 처리
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // 남은 arr2 처리
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(solution([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(solution([1, 3, 5], [2, 4, 6]));
