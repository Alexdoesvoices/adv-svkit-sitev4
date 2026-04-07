<script>
	import { resolve } from '$app/paths';
	import './navbar.css';
	import ThemeToggle from '../theme-toggle/themetoggle.svelte';
	
</script>

<section id="navbar">
	<nav class="nav">
		<div>
			<ThemeToggle />
		</div>
		<div class="navlinks">
			<a href={resolve('/')} class="link"> Home / </a>
			<!-- <a href={resolve('/docs')} class="link"> Docs / </a> -->
			<a href={resolve('/projects')} class="link"> Projects / </a>
			<a href={resolve('/links')} class="link"> Links / </a>
		</div>
	</nav>
</section>
