function solution(n, lost, reserve) {
  let answerArray = [];
  const person = [];

  for (let i = 0; i < n; i++) {
    person.push(1);
  }

  for (let i = 0; i < lost.length; i++) {
    person[lost[i] - 1] -= 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    person[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < person.length; i++) {
    if (person[i] === 2) {
      if (person[i - 1] === 0) {
        person[i - 1] += 1;
        person[i] -= 1;
      } else if (person[i + 1] === 0) {
        person[i + 1] += 1;
        person[i] -= 1;
      }
    }
  }

  answerArray = person.filter(item => item !== 0);

  return answerArray.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
