import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import useScrollFromTop from '../../hooks/useScrollFromtop'
import { RiZoomInLine } from 'react-icons/ri'
import { projectList } from '../../data/projectlist'
import styles from './projectsPage.module.scss'

const ProjectsPage = () => {
  useScrollFromTop()
  return (
    <>
      <Hero title="projects" />
      <section className={styles.section}>
        {projectList.map((project, index) => {
          return (
            <div className={styles.box} key={index}>
              <img className={styles.image} src={project.image} alt="" />
              <div className={styles.textContainer}>
                <div className={styles.iconCirce}>
                  <RiZoomInLine className={styles.icon} />
                </div>
                <p className={styles.name}>{project.name}</p>
              </div>
            </div>
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default ProjectsPage
