// import section
import './App.css';
import BoxContainer from './component/BoxContainer';
import GetStarted from './component/GetStarted';
import { NavBar } from './component/NavBar';
import WhyAtomize from './component/WhyAtomize';



function App() {
  return (
    <div id="container">
      <header>
        <NavBar />
      </header>
      <main> 
        <section id="get-boxContainer">
          <GetStarted />
          <BoxContainer />
        </section>
        <section id="why-atomize">
          <WhyAtomize />
        </section>
      </main>
    </div>
  );
}

export default App;
