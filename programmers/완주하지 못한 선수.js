function solution(participant, completion) {
  let answer = '';
  let order = 0;
  const sortParticipant = participant.sort();
  const sortCompletion = completion.sort();

  while (order < sortParticipant.length) {
    if (sortParticipant[order] !== sortCompletion[order]) {
      answer = sortParticipant[order];
      break;
    } else {
      order++;
    }
  }

  return answer;
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
