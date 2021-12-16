import styles from './projectsSection.module.scss'
import img1 from '../../assets/images/image11.jpg'
import img2 from '../../assets/images/image12.jpg'
import img3 from '../../assets/images/image9.jpg'
import { RiZoomInLine } from 'react-icons/ri'

type projectType = {
  image: string
  Category: string
}[]
const projectList: projectType = [
  { image: img1, Category: 'arch building' },
  { image: img2, Category: 'furniture design' },
  { image: img3, Category: 'our interiors' },
]

const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      {projectList.map((project, index) => {
        return (
          <div className={styles.box} key={index}>
            <img className={styles.image} src={project.image} alt="" />
            <div className={styles.textContainer}>
              <div className={styles.iconCirce}>
                <RiZoomInLine className={styles.icon} />
              </div>
              <p className={styles.category}>
                {project.Category}
                <br />
                projects
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProjectsSection
