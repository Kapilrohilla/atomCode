// import css
import './navBar.css'
import React, { useRef, useState } from 'react';

export function NavBar() {
    let [dispayMenuIcon,setDisplayMenuIcon] = useState(false);
    const rotableMenuRef = useRef('');
    const handleMenuClick = () => {
        setDisplayMenuIcon(!dispayMenuIcon);
        if(rotableMenuRef.current.children[0].style.transform !== 'rotate(-40deg)'){
            // rotation of icon
            rotableMenuRef.current.children[0].style.transform = 'rotate(-40deg)';
            rotableMenuRef.current.children[1].style.transform = 'rotate(40deg)';
            // transition
            rotableMenuRef.current.children[0].style.transition = '0.2s linear transform';
            rotableMenuRef.current.children[1].style.transition = '0.2s linear transform';
            
        }else{
            // setting menu to it's initial state;
            rotableMenuRef.current.children[0].style.transform = 'initial';
            rotableMenuRef.current.children[1].style.transform = 'initial';
        }
    }
    // ----- trying to change the shape of icon using useEffect -----
    // useEffect(()=>{
    //     if(dispayMenuIcon === undefined){
    //         // rotableMenuRef.current.children[0].style.rotate = '-45deg';
    //         // rotableMenuRef.current.children[1].style.rotate = '45deg';
    //         console.log(useRef.current);
    //     } else if(dispayMenuIcon === true){
    //         rotableMenuRef.current.children[0].style.rotate = '45deg';
    //         rotableMenuRef.current.children[1].style.rotate = '-45deg';
    //     }else if(dispayMenuIcon === false){
    //         rotableMenuRef.current.children[0].style.rotate = '-45deg';
    //         rotableMenuRef.current.children[1].style.rotate = '45deg';
    //     } 
    // },[dispayMenuIcon])
    return(
        <div id="navBar" >
            <div className="logo">
                <img src="./images/logo.svg" alt="logo" />
                atomcode
            </div>
            {/* <div className="menu" onClick={()=> setDisplayMenuIcon(!dispayMenuIcon)}>
                {dispayMenuIcon?
                    <p><img src="../images/menu.svg" alt="menu" /></p>:
                    <p><img src="../images/close.svg" alt="close" /></p>
                }
            </div> */}
            <div ref={rotableMenuRef} className="rotableMenu" onClick={handleMenuClick}>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <nav className={dispayMenuIcon?'desktop-routes':'hide desktop-routes'}>
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
            </nav>
        </div>
    )
}