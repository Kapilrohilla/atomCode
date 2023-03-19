// import section
import { useEffect, useRef } from 'react';
import './App.css';
import AboveUITemplate from './component/AboveUITemplate';
import BoxContainer from './component/BoxContainer';
import Code from './component/Code';
import DdCard from './component/ddCard';
import Footer from './component/Footer';
import GetStarted from './component/GetStarted';
import { NavBar } from './component/NavBar';
import PoweredWithReact from './component/PoweredWithReact';
import ReactDiagram from './component/ReactDiagram';
import UITemplate from './component/UITemplate';
import WhyAtomize from './component/WhyAtomize';



function App() {
  const screenWidth = useRef('');
  // ----- to hide the ReactDiagram component when width is less than 1000px
  function hideReactDiagram() {
    (window.outerWidth < 1000) ?
      screenWidth.current.style.display = 'none'
      : screenWidth.current.style.display = 'flex';
  }
  useEffect(hideReactDiagram);
  window.onresize = hideReactDiagram;
  // -----
  const aboveUITemplateData = [
    {
      id: 1,
      boldChar: '15+',
      para: 'Ready to use React Components'
    },
    {
      id: 2,
      boldChar: '60+',
      para: 'Predefined colors for theme setup'
    },
    {
      id: 3,
      boldChar: '</>',
      para: 'Detailed documentation for each component'
    },
    {
      id: 4,
      boldChar: 'FREE',
      para: 'Open source with regular updates'
    }
  ]
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
          <ReactDiagram ref={screenWidth} />
          <PoweredWithReact />
        </section>
        <section id="code" className="generalSpacing">
          <h2 className="secondHeading">Code the perfect design for each project using Atomize.</h2>
          <Code />
        </section>
        <section id="design-development" className="generalSpacing">
          <h2 className='secondHeading'>Code the perfect design for each project using Atomize.</h2>
          <div id="dd-card-container">
            <DdCard paragraph="Design your website by using Atomize for Sketch App." heading="Design" visitLink="Design Resource" imgSrc="./images/diamond.svg" />
            <DdCard paragraph="Bring your designs to life with Atomize for React JS." heading="Development" visitLink="Documentation" imgSrc="./logo192.png" />
          </div>
        </section>
        <section id="aboveUI-template-container" className='generalSpacing'>
          {
            aboveUITemplateData.map((obj) => {
              return <AboveUITemplate boldCharacter={obj.boldChar} paragraph={obj.para} key={obj.id} />
            })
          }
        </section>
        <section id="uiTemplate">
          <UITemplate />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
