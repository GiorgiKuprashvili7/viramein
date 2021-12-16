import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import styles from './header.module.scss'

type sizeType = {
  width: number | undefined
  height: number | undefined
}

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  const [pagetop, setpagetop] = useState(false)

  const [size, setsize] = useState<sizeType>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 0) {
        setpagetop(true)
      } else {
        setpagetop(false)
      }
    }
    window.addEventListener('scroll', changeBackground)

    const handleResize = () => {
      setsize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  useEffect(() => {
    if (size.width) {
      if (size.width > 768 && menuOpen) {
        setmenuOpen(false)
      }
    }
  }, [size.width, menuOpen])

  const menuToggle = () => {
    setmenuOpen(!menuOpen)
  }

  //UI --------------------------------------------------------------

  return (
    <header className={`${styles.header} ${pagetop && styles.active}`}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          Viramein.
        </Link>
        <nav className={`${styles.nav} ${menuOpen && styles.active}`}>
          <ul>
            <li>
              <Link onClick={menuToggle} to="/">
                home
              </Link>
            </li>
            <li>
              <Link onClick={menuToggle} to="/projects">
                projects
              </Link>
            </li>
            <li>
              <Link onClick={menuToggle} to="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link onClick={menuToggle} to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
        {menuOpen ? (
          <VscChromeClose className={styles.menu_icon} onClick={menuToggle} />
        ) : (
          <AiOutlineMenu className={styles.menu_icon} onClick={menuToggle} />
        )}
      </div>
    </header>
  )
}

export default Header
