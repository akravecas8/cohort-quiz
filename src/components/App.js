import logo from './DC.jpeg';
import '../stylesheets/App.css';
import MainContainer from './MainContainer'

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