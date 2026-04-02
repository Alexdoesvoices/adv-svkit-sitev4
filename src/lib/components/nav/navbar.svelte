<script>
	import { resolve } from '$app/paths';
	import './navbar.css';
	import { onMount } from 'svelte';

	let theme = $state('dark');

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'dark';
		theme = savedTheme;
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<section id="navbar">
	<nav class="nav">
		<div class="themetoggle">
			<button onclick={toggleTheme} class="theme-btn-pure" aria-label="Toggle theme">
				{#if theme === 'dark'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
							d="m4.93 4.93 1.41 1.41"
						/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
							d="m6.34 17.66-1.41 1.41"
						/><path d="m19.07 4.93-1.41 1.41" />
					</svg>
				{/if}
			</button>
		</div>
		<div class="navlinks">
			<a href={resolve('/')} class="link"> Home / </a>
			<a href={resolve('/projects')} class="link"> Projects / </a>
			<!-- <a href={resolve('/equipment')} class="link"> Equipment / </a> -->
		</div>
	</nav>
</section>
