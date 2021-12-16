import styles from './hero.module.scss'

type heroPropType = {
  title: string
}

const Hero = ({ title }: heroPropType) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgImage} />
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Hero
