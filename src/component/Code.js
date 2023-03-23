import './code.css';
import PaymentCard from './PaymentCard';
import ProfileWrite, { ProfileBox } from './subBox/ProfileWrite';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/hljs/night-owl';

SyntaxHighlighter.registerLanguage('javascript', js);
export default function Code() {

  const codeBlock = `
    // This is random code from internet any mistake in this isn't my problem
    // define an array to hold the to-do items
    const toDoList = [];

    // function to add a new item to the list
    function addItem(item) {
      toDoList.push(item);
    }

    // function to remove an item from the list
    function removeItem(item) {
      const index = toDoList.indexOf(item);
      if (index > -1) {
        toDoList.splice(index, 1);
      }
    }

    // function to display the current list of items
    function displayList() {
      console.log("Current to-do list:");
    }

    // example usage
    addItem("Buy groceries");
    addItem("Clean the house");
    displayList();
    removeItem("Buy groceries");
    displayList();
    `;
  // regex pattern for HTML Tag
  // let regex = /<\/?[A-Z][a-z]*/g 
  // let log = codeBlock.match(regex);
  // console.log(typeof codeBlock);
  return (
    <div className="codeContainer">
      <div id="codeEditor">
        {/* <pre>
          <code className="language-js">
            {codeBlock}
          </code>
        </pre> */}
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {codeBlock}
        </SyntaxHighlighter>
      </div>
      <div className="forRealtive">
        {/* <div className="forAbsolute"> */}
        <div className="animation">
          <PaymentCard />
          <ProfileBox imgPath={'./images/profileIcon3-girl.png'} />
          <ProfileWrite />
          <PaymentCard />
          <ProfileBox imgPath={'./images/profileIcon3-girl.png'} />
          <ProfileWrite />
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}