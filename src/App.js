import logo from './logo.svg';
import './App.css';
import Hello from './components/Header';
import ClassComp from './components/ClassComp';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <ClassComp/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's Learn React Js with me.
        </p>
        <h2></h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
