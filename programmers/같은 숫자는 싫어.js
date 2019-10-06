function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([4, 4, 4, 3, 3]));

// function solution(arr) {
//   return arr.filter((val, index) => val !== arr[index + 1]);
// }
