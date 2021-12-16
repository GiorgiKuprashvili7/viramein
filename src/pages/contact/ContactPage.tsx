import Hero from '../../components/Hero'
import useScrollFromTop from '../../hooks/useScrollFromtop'
import styles from './contactPage.module.scss'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

const ContactPage = () => {
  useScrollFromTop()
  return (
    <>
      <Hero title="contact us" />
      <section className={styles.section}>
        <div className={styles.content}>
          <form className={styles.form}>
            <h1>send message</h1>
            <div>
              <label>name</label>
              <input type="text" required />
            </div>
            <div>
              <label>email</label>
              <input type="email" required />
            </div>
            <div>
              <label>password</label>
              <input type="password" required />
            </div>
            <div>
              <label>confirm password</label>
              <input type="password" required />
            </div>
            <div>
              <label>your message</label>
              <textarea required></textarea>
            </div>
            <button>send</button>
          </form>

          <div className={styles.contactInfo}>
            <h1>get in touch</h1>
            <div>
              <a
                href="mailto:georgekuprashvili115@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdMail className={styles.icon} />{' '}
                georgekuprashvili115@gmail.com
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100004282518671&sk=about"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className={styles.icon} /> giorgi kuprashvili
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/george_kuprashvili/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className={styles.icon} /> geroge_kuprashvili
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/kuprashviligio1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className={styles.icon} /> kuprashviligio1
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
