import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tech={project.tech}
                    isFeatured={project.isFeatured}
                    link={project.link}
                />
            ))}
        </div>
    );
}

export default ProjectList;
