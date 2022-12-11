import Home from './Home'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <header class="center">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
