// 1. k점을 어피치가 a발, 라이언이 b발 맞히면 더 많이 맞힌 선수가 k점을 가져간다.
// 2. a와 b가 같으면 어피치가 k점을 가져간다.
// 3. k점을 여러 발 맞혀도 k점만 가져간다.
// 4. 다 0점이면 아무도 k점을 가져가지 않는다.
// 5. 최종점수가 같으면 어피치가 이긴다.
// 가장 큰 점수차이로 이기기위해 화살을 어디에 맞혀야 하는지 구하기. 우승할 수 없다면 -1 반환
// 중복을 허용하는 조합을 생성하는 재귀 함수

function combinationsWithRepetition(arr, n) {
  // 기저 조건: 길이가 1이면 각 원소를 단일 배열로 변환
  if (n === 1) return arr.map(v => [v]);

  const result = [];

  // 배열의 각 원소를 고정하고 나머지 원소들로 재귀적 조합 생성
  arr.forEach((fixed, idx, arr) => {
    // 현재 인덱스부터의 나머지 배열 추출 (중복 허용을 위해)
    const rest = arr.slice(idx);

    // 남은 길이 -1로 재귀 호출 (현재 원소 고정 후 나머지 조합 생성)
    const combis = combinationsWithRepetition(rest, n - 1);

    // 고정된 원소와 생성된 조합들 결합
    const combine = combis.map(v => [fixed, ...v]);

    // 결과 배열에 추가
    result.push(...combine);
  });

  return result;
}

function solution(n, info) {
  // 최대 점수 차이와 최적의 조합을 저장할 변수들
  let maxdiff = 0;
  let maxComb = {};

  // 주어진 조합으로 점수 계산 함수
  function calculateScore(combi) {
    let score1 = 0; // 라이언의 점수
    let score2 = 0; // 어피치의 점수

    // 0~10점까지 각 점수대별 승패 계산
    for (let i = 1; i <= 10; i++) {
      // 라이언이 해당 점수대에서 어피치보다 더 많은 화살을 맞히면 라이언 점수
      if (info[10 - i] < combi.filter(x => x === i).length) {
        score1 += i;
      }
      // 어피치가 해당 점수대에 화살을 맞혔다면 어피치 점수
      else if (info[10 - i] > 0) {
        score2 += i;
      }
    }

    return [score1, score2];
  }

  // 최대 점수 차이 업데이트 함수
  function calculateDiff(diff, cnt) {
    // 현재 점수 차이가 기존 최대 차이보다 크면 업데이트
    if (diff > maxdiff) {
      maxComb = { ...cnt }; // 현재 화살 분배 조합 저장
      maxdiff = diff; // 최대 점수 차이 업데이트
    }
  }

  // 라이언의 가능한 모든 화살 분배 조합 탐색
  for (const combi of combinationsWithRepetition([...Array(11).keys()], n)) {
    // 화살 분배 조합을 점수대별로 카운트
    const cnt = combi.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

    // 현재 조합의 점수 계산
    const [score1, score2] = calculateScore(combi);

    // 점수 차이 계산
    const diff = score1 - score2;

    // 최대 점수 차이 업데이트 시도
    calculateDiff(diff, cnt);
  }

  // 최대 점수 차이가 양수인 경우 (라이언이 이긴 경우)
  if (maxdiff > 0) {
    // 결과 배열 초기화 (0점~10점)
    const answer = Array(11).fill(0);

    // 최적의 화살 분배 조합을 결과 배열에 반영
    for (const n of Object.keys(maxComb)) {
      answer[10 - n] = maxComb[n];
    }

    return answer;
  } else {
    // 라이언이 이길 수 없는 경우 -1 반환
    return [-1];
  }
}
