// import css
import './navBar.css'
import React, { useState } from 'react';

export function NavBar() {
    let [dispayMenuIcon,setDisplayMenuIcon] = useState(true);
    return(
        <div id="navBar" >
            <div className="logo">
                atomcode
            </div>
            <div className="menu" onClick={()=> setDisplayMenuIcon(!dispayMenuIcon)}>
                {dispayMenuIcon?
                    <p><img src="../images/menu.svg" alt="menu" /></p>:
                    <p><img src="../images/close.svg" alt="close" /></p>
                }
            </div>
            <div className={dispayMenuIcon?'hide desktop-routes':'desktop-routes'}>
                <div>
                    <p>Features</p>
                </div>
                <div>
                    <p>Github</p>
                </div>
                <div>
                    <p>For designer</p>
                </div>
                <div>
                    <button>Documentation</button>
                </div>
            </div>
        </div>
    )
}