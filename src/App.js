import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import { Home, About, Help } from "./Components/Inde"



function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Router>
          <Routes>

            <Route path='/' Component={Home} />  home
            <Route path='/home' Component={Home} /> home
            <Route path='/about' Component={About} />  about

            <Route path='/help' Component={Help} /> help

          </Routes>


        </Router>

      </header>
    </div>
  );
}

export default App;
