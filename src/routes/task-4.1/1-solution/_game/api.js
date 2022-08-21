export async function fetchScores() {
	const res = await fetch("/api/scores");
	const json = await res.json();

	if (res.ok) {
		return json;
	}
	throw Error(res.statusText);
}

export async function postScore(body) {
	const res = await fetch("/api/scores", {
		method: "POST",
		body: JSON.stringify(body),
	});
	const json = await res.json();

	if (res.ok) {
		return json;
	}
	throw Error(res.statusText);
}
