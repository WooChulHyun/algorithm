function solution(participant, completion) {
  let answer = '';
  const sortParticipant = participant.sort();
  const sortCompletion = completion.sort();

  answer = sortParticipant.filter(
    (name, index) => name !== sortCompletion[index]
  );
  return answer[0];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
