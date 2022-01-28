import React from 'react';
import { Edit, Detail, New, Header, List} from './components'
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
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
