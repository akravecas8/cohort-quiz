import logo from './DC.jpeg';
import './App.css';
import MainContainer from './components/MainContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainContainer />
        
      </header>
    </div>
  );
}

export default App;
