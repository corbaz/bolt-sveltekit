<svelte:head>
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<nav>
	<a class="text-blue-800" href="/">Home Inicial</a>
	<a class="text-green-800" href="/about">About</a>
	<a class="text-purple-800" href="/info">Info</a>
</nav>

<slot />

<style>
	nav {
		padding: 1rem;
		position: fixed;
		top: 0;
		width: 100%;
		background: white;
		box-shadow: 0 1px 5px rgba(0,0,0,0.1);
	}

	a {
		text-decoration: none;
		padding: 0.5rem 1rem;
		margin: 0 0.5rem;
	}

	a:hover {
		text-decoration: underline;
	}
</style>