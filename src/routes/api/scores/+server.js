let scores = [
	{ name: "Bob", score: 42 },
	{ name: "Alice", score: 10 },
];

export async function POST({ request }) {
	const body = await request.json();
	scores.push(body);
	scores.sort((a, b) => b.score - a.score);
	return new Response(JSON.stringify(scores), {
		headers: { "content-type": "application/json; charset=utf-8" },
	});
}

export function GET() {
	return new Response(JSON.stringify(scores), {
		headers: { "content-type": "application/json; charset=utf-8" },
	});
}
