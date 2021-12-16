import styles from './blogPage.module.scss'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import useScrollFromTop from '../../hooks/useScrollFromtop'
import { blogList } from '../../data/blogposts'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  useScrollFromTop()
  return (
    <>
      <Hero title="blog" />
      <section className={styles.section}>
        <div className={styles.content}>
          {blogList.map((post, index) => {
            return (
              <div className={styles.postBox} key={index}>
                <div className={styles.imageContainer}>
                  <img src={post.image} alt="" />
                </div>

                <div className={styles.textContainer}>
                  <div className={styles.tagsContainer}>
                    {post.tags.map((tag, index) => {
                      return (
                        <Link key={index} to="/blog">
                          {tag}
                        </Link>
                      )
                    })}
                  </div>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <div className={styles.line} />
                  <div className={styles.authorContainer}>
                    <p>
                      by <b>{post.author}</b>
                    </p>
                    <p>{post.date}</p>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button>
                      read more <HiArrowRight className={styles.icon} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default BlogPage
