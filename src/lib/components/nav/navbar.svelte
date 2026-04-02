<script>
	import { resolve } from '$app/paths';
	import './navbar.css';

	import { onMount } from 'svelte';

	let theme = $state('light');

	onMount(() => {
		const savedTheme = document.documentElement.getAttribute('data-theme') || 'light';
		theme = savedTheme;
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
			<label>
				<input type="checkbox" role="switch" checked={theme === 'dark'} onchange={toggleTheme} />
			</label>
		</div>
		<div class="navlinks">
			<a href={resolve('/')} class="link">Home / </a>
			<a href={resolve('/projects')} class="link">Projects / </a>
		</div>
	</nav>
</section>
