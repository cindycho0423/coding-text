function solution(idList, report, k) {
  const reportedUser = new Map();
  const mailCount = new Map();

  for (const r of report) {
    const [userId, reportedId] = r.split(' ');
    if (!reportedUser.has(reportedId)) {
      reportedUser.set(reportedId, new Set());
    }
    reportedUser.get(reportedId).add(userId);
  }

  for (const [reportedId, users] of reportedUser) {
    if (users.size >= k) {
      for (const userId of users) {
        mailCount.set(userId, (mailCount.get(userId) || 0) + 1);
      }
    }
  }
  return idList.map(userId => mailCount.get(userId) || 0);
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
