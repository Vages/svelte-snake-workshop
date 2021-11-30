let scores = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 42 },
];

export async function post(request) {
  scores.push(JSON.parse(request.body));
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
