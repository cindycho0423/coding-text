// function solution(s) {
//   let tuple = '';
//   let arr = s.slice(2, -2).split('},{');
//   let max = 0;
//   let answer = [];

//   arr.map(a => {
//     if (a.length > max) {
//       max = a.length;
//       tuple = a;
//     }
//   });
//   console.log(tuple);
//   tuple.split(',').map(a => answer.push(Number(a)));

//   return answer;
// }

function solution(s) {
  let arr = s
    .slice(2, -2)
    .split('},{')
    .sort((a, b) => a.length - b.length);
  let answer = [];

  arr.map(a => {
    let nums = a.split(',');
    nums.map(num => {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    });
  });

  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
