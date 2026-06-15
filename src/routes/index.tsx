import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main>
			<h1>Welcome to React Router!</h1>
			<p>
				This is a simple example of a React Router application using the new
				file-based routing API.
			</p>
		</main>
	);
}
