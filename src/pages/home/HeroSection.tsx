import styles from './heroSection.module.scss'
import useScrollFromTop from '../../hooks/useScrollFromtop'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  useScrollFromTop()
  return (
    <section className={styles.section}>
      <div className={styles.background_image} />
      <div className={styles.content}>
        <h2 className={styles.hero_subtitle}>architecture / interior</h2>
        <h1 className={styles.hero_title}>
          we are building <br />
          experts
        </h1>
        <Link to="/projects" className={styles.hero_btn}>
          our projects
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
