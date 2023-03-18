// import section
import { useEffect, useRef } from 'react';
import './App.css';
import BoxContainer from './component/BoxContainer';
import GetStarted from './component/GetStarted';
import { NavBar } from './component/NavBar';
import PoweredWithReact from './component/PoweredWithReact';
import ReactDiagram from './component/ReactDiagram';
import WhyAtomize from './component/WhyAtomize';



function App() {
  const screenWidth = useRef('');
  // ----- to hide the ReactDiagram component when width is less than 1000px
  function hideReactDiagram(){
    (window.outerWidth < 1000)?
      screenWidth.current.style.display = 'none'
    : screenWidth.current.style.display = 'flex';
  }
  useEffect(hideReactDiagram);
  window.onresize = hideReactDiagram; 
  // -----
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
        <section id="reactUI">
          <ReactDiagram ref={screenWidth}/>
          <PoweredWithReact />
        </section>
      </main>
    </div>
  );
}

export default App;
