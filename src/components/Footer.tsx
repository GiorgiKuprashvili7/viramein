import styles from './footer.module.scss'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scroolTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div className={styles.contact_us}>
        <h1>let ' s work together</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
          fuga illo similique dolorum nemo.
        </p>
        <Link to="/contact" className={styles.contact_btn}>
          contact us
        </Link>
      </div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p className={styles.copyright}>© 2021. george kuprashvili</p>
          <p className={styles.goTop} onClick={scroolTop}>
            go to top
          </p>
          <div className={styles.social_icons_box}>
            <a
              href="https://www.facebook.com/profile.php?id=100004282518671&sk=about"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className={styles.icon} />
            </a>

            <a
              href="https://www.instagram.com/george_kuprashvili/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className={styles.icon} />
            </a>

            <a
              href="https://twitter.com/kuprashviligio1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className={styles.icon} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
