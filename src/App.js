import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './About.css';
import './Home.css';
import './UserForm.css'

function App() {
  return (
    <div >
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to = '/'>This page </Link></li>
            <li><Link to = '/home'>Home page </Link></li>
            <li><Link to = '/about'>About page </Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
