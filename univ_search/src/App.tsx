import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBox from './components/SearchBox'
import UniversityDetail from './pages/UniversityDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <SearchBox />
            </div>
          }
        />
        <Route
          path="/university/:universityName"
          element={<UniversityDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
