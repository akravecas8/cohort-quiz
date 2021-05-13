import logo from './DC.jpeg';
import '../stylesheets/App.css';
import MainContainer from './MainContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id = "imgs" src={logo} className="App-logo" alt="logo" />
        <span id = "quiztitle">THE COHORT QUIZ</span>     
      </header>
      <MainContainer />
    

      
    </div>
  );
}

export default App;
