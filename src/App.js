// import section
import './App.css';
import GetStarted from './component/GetStarted';
import { NavBar } from './component/NavBar';



function App() {
  return (
    <div id="container">
      <header>
        <NavBar />
      </header>
      <main>
        <GetStarted />
        
      </main>
    </div>
  );
}

export default App;
