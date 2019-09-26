function solution(answers) {
  const answer = [];
  let a = 0;
  let b = 0;
  let c = 0;
  let max;

  const person = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  for (let i = 0; i < answer.length; i++) {
    if (person[0][i % 5] === answers[i]) {
      a++;
    }
    if (person[1][i % 8] === answers[i]) {
      b++;
    }
    if (person[2][i % 10] === answers[i]) {
      c++;
    }
  }

  max = Math.max(a, b, c);

  if (a === max) {
    answer.push(1);
  }
  if (b === max) {
    answer.push(2);
  }
  if (c === max) {
    answer.push(3);
  }

  console.log(a);
  console.log(b);
  console.log(c);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
