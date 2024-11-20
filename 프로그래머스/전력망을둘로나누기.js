function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);

  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) {
      if (child !== parent) {
        cnt += dfs(child, node);
      }
    }
    return cnt;
  }

  let minDiff = Infinity;
  for (const [a, b] of wires) {
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    const cntA = dfs(a, b);
    const cntB = n - cntA;

    minDiff = Math.min(minDiff, Math.abs(cntA - cntB));

    graph[a].push(b);
    graph[b].push(a);
  }
  return minDiff;
}

console.log(
  solution(9, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
