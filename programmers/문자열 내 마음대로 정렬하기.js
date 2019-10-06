function solution(strings, n) {
  const newArray = strings.map(value => value.slice(n, n + 1) + value).sort();

  return newArray.map(value => value.slice(1));
}
console.log(solution(['abce', 'abcd', 'cdx'], 2));
