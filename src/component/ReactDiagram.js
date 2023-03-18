// import section
import './reactDiagram.css';
import { forwardRef } from 'react';

//
function ReactDiagram(prop,ref){
    return (
        <div className="outerLayer" ref={ref}>
            <div id="rd1" className="circular">
                <div id="rd2" className="circular">
                    <div id="rd3" className="circular">
                        <div id="rd4" className="circular flex-center">
                            <img src="./images/reactjs.svg" alt="reactIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="rd-signUp">Sign up</button>
            <button className="rd-plus">+</button>
            <div className="rd-checkbox">
                <img src="./images/rd-checkbox.svg" alt="checkbox" />
            </div>
        </div>
    )
}

export default forwardRef(ReactDiagram);