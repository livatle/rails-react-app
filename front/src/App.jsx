import React from 'react';
import { Detail, New, Header, List} from './components'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './assets/styles/style.css'

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<List />} />
            <Route path='/new' element={<New />} />
            <Route path='/post/:id' element={<Detail />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
