import { useEffect, useState } from "react";
import { getHello } from "#/lib/api";

export function HelloWorld() {
	const [message, setMessage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getHello()
			.then(setMessage)
			.catch((err: Error) => setError(err.message));
	}, []);

	return (
		<div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
			<div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
				<h2 className="font-medium text-gray-900 text-lg dark:text-white">
					Message from go-helloworld API
				</h2>
				{error && (
					<p className="mt-2 text-red-600 dark:text-red-400">
						Failed to load message: {error}
					</p>
				)}
				{!error && message === null && (
					<p className="mt-2 text-gray-600 dark:text-gray-300">Loading...</p>
				)}
				{!error && message !== null && (
					<p className="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
				)}
			</div>
		</div>
	);
}