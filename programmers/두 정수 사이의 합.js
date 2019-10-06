function solution(a, b) {
  let answer = 0;
  const min = Math.min(a, b);

  for (let i = min; i <= min + Math.abs(a - b); i++) {
    answer += i;
  }

  return answer;
}
console.log(solution(5, 3));
