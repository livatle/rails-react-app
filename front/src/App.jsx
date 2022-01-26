import React from 'react';
import {Create, Header, List} from './components'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './assets/styles/style.css'

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<List />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
