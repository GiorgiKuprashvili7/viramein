import styles from './latestBlogs.module.scss'
import { blogList } from '../../data/blog'
import { Link } from 'react-router-dom'

const LatestBlogs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>blog</h3>
        <h1 className={styles.title}>
          some of our latest
          <br />
          blogs
        </h1>

        <div className={styles.blogsContainer}>
          {blogList.map((post, index) => {
            return (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  <img src={post.imgLink} alt="" />
                  <p>{post.tag}</p>
                </div>
                <div className={styles.text_container}>
                  <h3>{post.title}</h3>
                  <h4>{post.date}</h4>
                  <p>{post.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.linkContainer}>
          <Link className={styles.blogLinkBtn} to="/blog">
            view more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogs
