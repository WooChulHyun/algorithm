function solution(arr, divisor) {
  const answer = arr
    .filter(value => value % divisor === 0)
    .sort((a, b) => a - b);
  if (answer.length === 0) return [-1];
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
