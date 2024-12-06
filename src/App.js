import {useState, useEffect} from 'react'
import Categories from './components/Categories'
import ProjectsList from './components/ProjectsList'
import FailureView from './components/FailureView'
import Loader from './components/Loader'
import './App.css'

//This is the list (static data) used in the application. You can move it to any component if needed.

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

// Replace your code here
const App = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [activeCategory, setActiveCategory] = useState('ALL')

  const fetchProjects = async category => {
    setIsLoading(true)
    setError(false)
    try {
      const response = await fetch(
        `https://apis.ccbp.in/ps/projects?category=${category}`,
      )
      if (response.ok) {
        const data = await response.json()
        setProjects(data.projects)
      } else {
        throw new Error('Failed to fetch projects')
      }
    } catch (err) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchProjects(activeCategory)
  }, [activeCategory])

  const handleRetry = () => {
    fetchProjects()
  }

  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>
      </header>
      <Categories
        categoriesList={categoriesList}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <FailureView onRetry={handleRetry} />
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  )
}

export default App
