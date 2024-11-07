function solution(record) {
  const userMap = new Map();
  const actions = [];
  const answer = [];

  for (const log of record) {
    const [action, userId, nickname] = log.split(' ');
    if (action === 'Enter' || action === 'Change') {
      userMap.set(userId, nickname);
    }
    if (action === 'Enter' || action === 'Leave') {
      actions.push([action, userId]);
    }
  }

  for (const [action, userId] of actions) {
    const nickname = userMap.get(userId);
    if (action === 'Enter') {
      answer.push(`${nickname}님이 들어왔습니다.`);
    } else if (action === 'Leave') {
      answer.push(`${nickname}님이 나갔습니다.`);
    }
  }

  return answer;
}

console.log(
  solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'])
);
