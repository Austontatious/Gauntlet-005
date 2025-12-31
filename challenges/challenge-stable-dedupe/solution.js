export function solve(lines) {
  const seen = new Set();
  const result = [];

  for (const line of lines) {
    if (!seen.has(line)) {
      seen.add(line);
      result.push(line);
    }
  }

  return result;
}
