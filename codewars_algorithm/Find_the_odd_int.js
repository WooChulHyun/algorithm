function findOdd(A) {
  const B = [];
  A.map(num => {
    B.includes(num) ? B.splice(B.indexOf(num), 1) : B.push(num);
  });
  return Number(B.join());
}
