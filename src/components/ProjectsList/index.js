import './index.css'

const ProjectsList = ({projects}) => (
  <ul className="projects-list">
    {projects.map(project => (
      <li key={project.id} className="project-item">
        <img
          src={project.image_url}
          alt={project.name}
          className="project-image"
        />
        <p className="project-name">{project.name}</p>
      </li>
    ))}
  </ul>
)

export default ProjectsList
