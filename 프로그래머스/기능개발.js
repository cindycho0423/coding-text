function solution(progresses, speeds) {
  //  각 작업이 완성되는 시간을 계산한다.
  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  // 가장 오래 걸리는 일의 완성 시간
  let maxDay = days[0];

  // 한 번에 배포할 작업의 개수
  let count = 0;

  // 각 배포마다 배포된 기능의 수를 저장할 배열
  const result = [];

  // 각 작업의 완료 일수를 순회하면서 처리
  for (let i = 0; i < days.length; i++) {
    // 현재 작업이 maxDay 이하에 완료되면, 같은 배포에 포함될 수 있으므로 count 증가
    if (days[i] <= maxDay) {
      count++;
    }
    // 현재 작업이 maxDay 보다 늦게 완료되면, 이전 배포를 마무리하고 새로운 배포를 시작
    else {
      // 지금까지 그룹화된 작업들을 배포
      result.push(count);
      // 새로운 작업 그룹을 시작하고, 현재 작업을 첫 번째로 넣음
      count = 1;
      // 새로운 기준 시간을 설정하고 이후 작업들은 이 시간과 비교
      maxDay = days[i];
    }
  }
  // 마지막 작업 그룹 처리
  // 다 확인 후, 아직 배포하지 않은 작업들이 있다면 이를 마지막으로 배달 보냄
  if (count > 0) {
    result.push(count);
  }

  return result;
}

let progressesArr1 = [95, 90, 99, 99, 80, 99];
let speeds1 = [1, 1, 1, 1, 1, 1, 1];
console.log(solution(progressesArr1, speeds1));

let progressesArr2 = [93, 30, 55];
let speeds2 = [1, 30, 5];
console.log(solution(progressesArr2, speeds2));

// 결론적으로, 이 문제는 배열의 순차적 처리만으로도 효율적으로 해결할 수 있기 때문에
// 큐 자료구조를 사용할 필요가 없다.
// 큐는 보통 실시간으로 데이터를 처리하거나,
// 작업의 우선순위가 동적으로 변경되는 경우 등에 더 유용하게 사용된다.
