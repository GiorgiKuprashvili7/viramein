import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ProjectsPage from './pages/projects/ProjectsPage'
import BlogPage from './pages/blog/BlogPage'
import ContactPage from './pages/contact/ContactPage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
