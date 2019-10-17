function solution(s) {
  let count = 0;
  const word = s.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'p') count += 1;
    if (word[i] === 'y') count -= 1;
  }

  return count === 0;
}

console.log(solution('pPoooyY'));
