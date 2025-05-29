// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import SingleProductPage from '@/pages/SingleProductPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
