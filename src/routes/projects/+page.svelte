<script>
	import { projects } from './projects';
	import './projects.css';
</script>

<section id="projects" class="projects">
	<h1 class="title">Projects</h1>

	<div class="projects-container">
		{#each projects as project}
			{#if project.visability == '#visable'}
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
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link"
								>
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
								<a href={project.more} rel="noopener noreferrer" class="moreinfo-link">
									More Info
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
