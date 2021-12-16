import styles from './whoWeAre.module.scss'
import img1 from '../../assets/images/image1.jpg'
import img2 from '../../assets/images/image2.jpg'

const WhoWeAre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.image_box}>
          <img alt="viramein project" src={img1} className={styles.img1} />
          <img alt="viramein project" src={img2} className={styles.img2} />
        </div>
        <div className={styles.text_box}>
          <h3>who we are</h3>
          <h1>
            architecture
            <br /> studio
          </h1>
          <h4>
            An award-winning design and development team that is proud of out
            work
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quisquam recusandae soluta consectetur sit tenetur voluptatem,
            voluptate velit minus, quo iusto autem dolores ipsa fugit laboriosam
            corporis rem quos molestiae voluptatibus fugiat.
          </p>
          <button>read more</button>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
