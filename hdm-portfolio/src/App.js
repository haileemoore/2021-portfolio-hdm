import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a href="#">home</a>
        <a href="#">portfolio</a>
        <a href="#">contact</a>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WELCOME</h1>
      </header>
    </div>
  );
}

export default App;
