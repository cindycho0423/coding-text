// function solution(participants, completion) {
//   const completions = new Map();
//   const answer = [];

//   for (let person of completion) {
//     completions.set(person);
//   }

//   for (let i = 0; i < participants.length; i++) {
//     if (completions.has(participants[i])) {
//       i;
//     } else {
//       answer.push(participants[i]);
//     }
//   }
//   return answer;
// }

function solution(participants, completion) {
  const participantsMap = new Map();
  let answer = '';

  for (let participant of participants) {
    if (participantsMap.has(participant)) {
      participantsMap.set(participant, participantsMap.get(participant) + 1);
    } else {
      participantsMap.set(participant, 1);
    }
  }

  for (person of completion) {
    if (participantsMap.has(person)) {
      participantsMap.set(person, participantsMap.get(person) - 1);
    }
  }

  for (let [name, count] of participantsMap) {
    if (count > 0) {
      return (answer = name);
    }
  }
  return answer;
}

// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
// console.log(solution(['marina', 'jospia', 'nikola', 'vinko', 'filipa'], ['jospia', 'filipa', 'marina', 'nikola']));
// console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
