const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

interface HelloApiResponse {
	code: number;
	message: string;
	data: {
		message: string;
	};
}

export async function getHello(): Promise<string> {
	const response = await fetch(`${API_URL}/api/v1/hello`);

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	const body: HelloApiResponse = await response.json();
	return body.data.message;
}