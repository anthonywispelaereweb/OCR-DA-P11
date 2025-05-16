import myRoutes from './routing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {myRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
