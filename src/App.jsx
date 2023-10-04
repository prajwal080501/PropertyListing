
import Header from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PropertyPreview from './pages/PropertyPreview'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PropertyPreview />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
