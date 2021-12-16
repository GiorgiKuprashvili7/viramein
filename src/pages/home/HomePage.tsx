import Footer from '../../components/Footer'
import useScrollFromTop from '../../hooks/useScrollFromtop'
import HeroSection from './HeroSection'
import LatestBlogs from './LatestBlogs'
import ProjectsSection from './ProjectsSection'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'

const HomePage = () => {
  useScrollFromTop()
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <ProjectsSection />
      <LatestBlogs />
      <Footer />
    </>
  )
}

export default HomePage
