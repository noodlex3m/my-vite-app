function ProjectList({ projects }) {
	return (
		<ul>
			{projects.map((project) => (
				<li key={project.id}>
					<a href={project.link}>{project.name}</a>
				</li>
			))}
		</ul>
	);
}
export default ProjectList;
