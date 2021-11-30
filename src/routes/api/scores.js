let scores = [
  { name: "Bob", score: 42 },
  { name: "Alice", score: 10 },
];

export async function post(request) {
  scores.push(JSON.parse(request.body));
  scores.sort((a, b) => b.score - a.score);
  return {
    status: 200,
    body: scores,
  };
}

export function get() {
  return {
    status: 200,
    body: scores,
  };
}
