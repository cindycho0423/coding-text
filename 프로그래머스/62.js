function solution(arr, n) {
  // 1. 2차원 배열을 인자로 받고, 90도 회전시키는 함수
  function rotate90() {
    // 2. 배열의 크기를 저장
    const n = arr.length;

    // 3. 배열의 크기와 동일한 2차원 배열 생성 (초기값은 0)
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    // 4. 배열을 90도 회전
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = arr[i][j];
      }
    }

    // 5. 90도로 회전한 배열 반환
    return rotated;
  }

  // 6. 원본 배열 arr을 복사함
  let rotated = arr.map(row => [...row]);

  // 7. 90도 회전 함수 호출
  for (let i = 0; i < n; i++) {
    rotated = rotate90(rotated);
  }

  return rotated;
}

function solution(arr, n) {
  const len = arr.length;
  // 회전 횟수를 4로 나눈 나머지를 사용 (4번 회전하면 360도 니까 원상태)
  const rotateCount = n % 4;

  // 회전이 필요없거나 4번 회전(원래 상태)인 경우
  if (rotateCount === 0) return arr;

  const result = Array.from({ length: len }, () => Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      switch (rotateCount) {
        // 90도 회전
        case 1:
          result[j][len - 1 - i] = arr[i][j];
          break;
        // 180도 회전
        case 2:
          result[len - 1 - i][len - 1 - j] = arr[i][j];
          break;
        // 270도 회전
        case 3:
          result[len - 1 - j][i] = arr[i][j];
          break;
      }
    }
  }

  return result;
}
