import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import CodePanel from "./CodePanel";

function App() {
  return (
    <div className="App">
      <Header />
      <p>description</p>
      <h2>Installation</h2>
      <CodePanel></CodePanel>
      <h2>Scripts</h2>
      <CodePanel></CodePanel>
      <CodePanel></CodePanel>
      <CodePanel></CodePanel>
      <CodePanel></CodePanel>
      <header className="App-header">
        {/*  Using Create React App*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <img src={logo.src} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
