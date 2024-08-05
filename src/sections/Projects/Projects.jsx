import styles from './ProjectsStyles.module.css';
import vibrr from '../../assets/vibrr.jpg';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import download from '../../assets/download.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={vibrr}
          link="https://github.com/Rakshith18123/airline-management-system.git"
          h3="Flight management system"
          
        />
        
        <ProjectCard
          src={download}
          link="#"
          h3="Contact Manager"
        />
      </div>
    </section>
  );
}

export default Projects;
