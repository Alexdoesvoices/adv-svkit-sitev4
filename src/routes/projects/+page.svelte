<script>
	import { projects } from './projects';
</script>

<section id="projects" class="projects">
	<h1 class="title">Projects</h1>

	<div class="projects-container">
		{#each projects as project}
			<div class="project-card">
				<div class="project-image">
					<!-- <img src={project.image} alt={project.title} /> -->
				</div>

				<div class="project-info">
					<div class="text-top">
						<h3>{project.title}</h3>
						<p>{project.description}</p>

						<div class="tags">
							{#each project.tags as tag}
								<span class="tag" style="background-color: {tag.color};">
									{tag.name}
								</span>
							{/each}
						</div>
					</div>

					<div class="link-area">
						{#if project.link !== '#none'}
							<a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
								View Project
							</a>
						{/if}
						{#if project.github !== '#none'}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="github-link"
							>
								Github
							</a>
						{/if}
						{#if project.more !== '#none'}
							<a href={project.more} rel="noopener noreferrer" class="moreinfo-link"> More Info </a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section.projects {
		--card-max-width: 500px;
		--card-fixed-height: 300px;
		--image-ratio: 35%;
		--bg-card: #1c1c1f;
		--bg-border: #2d2d30;
		--accent-blue: #3b82f6;
		--glow-color: rgba(59, 130, 246, 0.4);
		--site-button-background: #3b82f6;
		--github-button-background: #1c3552;
		--moreinfo-button-background: #ff5b5b;
	}
	h1.title {
		margin-bottom: 50px;
	}
	div.project-card {
		padding-bottom: 30px;
		max-width: var(--card-max-width);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-bottom: 1rem;
	}
	.tag {
		color: #ffffff;
		padding: 4px 12px;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		border: none;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
	}
</style>
