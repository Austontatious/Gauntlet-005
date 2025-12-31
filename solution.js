export function solve(lines) {
  const seen = new Set();
  const out = [];

  for (let i = 0; i < lines.length; i += 1) {
    const value = lines[i];
    if (!seen.has(value)) {
      seen.add(value);
      out.push(value);
    }
  }

  return out;
}
