import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Routes>
        <Route path='/home' exact element={ Home }>
          
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
