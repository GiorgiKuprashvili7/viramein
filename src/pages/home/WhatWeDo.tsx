import styles from './whatWeDo.module.scss'
import { posts } from '../../data/whatWedoData'

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3>what we do</h3>
        <h1>
          provide the best
          <br />
          services
        </h1>
        <div className={styles.box_container}>
          {posts.map((post, index) => {
            return (
              <div key={index} className={styles.box}>
                <i>{post.icon}</i>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
