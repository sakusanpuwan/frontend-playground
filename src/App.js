import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Image from './components/Image';
import Text from './components/Text';
import Other from './components/Other';

function App() {
  return (
    <div className="App">
        <h1>Frontend Playground</h1>
        <nav className='navbar'>
          <ul className="navigation">
              <li><Link to="/">Image</Link></li>
              <li><Link to="/text">Text</Link></li>
              <li><Link to="/other">Other</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route exact path='/' element={<Image/>}/>
          <Route path='/text' element={<Text/>}/>
          <Route exact path='/other' element={<Other/>}/>
        </Routes>



    </div>
  );
}

export default App;
