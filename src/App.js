import logo from './logo.svg';
import './App.css';

import React, { PureComponent } from 'react'
import Greeter from './components/Greeter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      names: ['name1', 'name2', 'name3', 'name4', 'name5']
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <header className="App-header">
            <Routes>
              <Route path='/' element={<Greeter name = "Jordan Mateen"/>}/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}

export default App