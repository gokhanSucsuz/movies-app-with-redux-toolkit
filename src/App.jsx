import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import { MovieShow } from './pages/MovieShow'

function App() {
  const { movies } = useSelector(store => store.movies)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {
          movies.map(movie => <Route key={movie.Title} path={`/${movie.Title.replace(/\s+/g, '-').toLowerCase()}`} element={<MovieShow />} />)
        }
      </Routes>
    </>
  )
}

export default App
