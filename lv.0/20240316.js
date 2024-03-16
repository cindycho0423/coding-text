// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

//입출력 예
//array	                n	result
//[1, 1, 2, 3, 4, 5]	1	2
//[0, 2, 3, 4]	        1	0

//입출력 예 #1

//[1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.
//입출력 예 #2

//[0, 2, 3, 4] 에는 1이 0개 있습니다.

const array1 = [1, 1, 2, 3, 4, 5];
const array2 = [0, 2, 3, 4];
const n2 = 0;
const n = 1;

function solution1(array, n) {
    let answer = 0;
    for (num of array) {
        if (num === n) {
            answer += 1;
        }
    }
    return answer;
}
console.log(`${array1} 에는 ${n}이 ${solution1(array1, n)}개 들어있습니다`);
console.log(`${array2} 에는 ${n2}이 ${solution1(array2, n2)}개 들어있습니다`);

function solution2(array, n) {
    const answer = array.filter(num => num == n).length;
    return answer;
}

console.log(`${array1} 에는 ${n}이 ${solution2(array1, n)}개 들어있습니다`);
console.log(`${array2} 에는 ${n2}이 ${solution2(array2, n2)}개 들어있습니다`);
