// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하기

// 1. 각 문자열의 n번째 글자 기준으로 오름차순 정렬하기
// 3. n번째 문자가 같은 경우, 사전순으로 앞선 문자열이 앞쪽에 위치하기
// 3. 정렬한 배열 반환하기

// 삽입정렬 사용해보기!
function solution(strings, n) {
  let answer = [...strings];

  // 두 번째 원소부터 비교 시작
  for (let i = 1; i < answer.length; i++) {
    // 두 번째 원소부터 왼쪽으로 한칸씩 옮겨가면서 비교
    for (let j = i; j > 0; j--) {
      // 왼쪽이 오른쪽보다 크면 자리 바꿔줌
      if (answer[j - 1][n] > answer[j][n]) {
        [answer[j - 1], answer[j]] = [answer[j], answer[j - 1]];
      }
      // 값이 같으면 단어끼리 비교
      else if (answer[j - 1][n] === answer[j][n]) {
        if (answer[j - 1] > answer[j]) {
          [answer[j - 1], answer[j]] = [answer[j], answer[j - 1]];
        }
      } else break;
    }
  }

  return answer;
}
console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
