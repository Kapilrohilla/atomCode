// import css
import './navBar.css'
import React, { useRef, useState } from 'react';

export function NavBar() {
    let [dispayMenuIcon,setDisplayMenuIcon] = useState(false);
    const rotableMenuRef = useRef('');
    const handleMenuClick = () => {
        setDisplayMenuIcon(!dispayMenuIcon);
        if(rotableMenuRef.current.children[0].style.rotate !== '-45deg'){
            rotableMenuRef.current.children[0].style.rotate = '-45deg';
            rotableMenuRef.current.children[1].style.rotate = '45deg';
        }else{
            rotableMenuRef.current.children[0].style.rotate = 'initial';
            rotableMenuRef.current.children[1].style.rotate = 'initial';
        }
    }
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
            <div className={dispayMenuIcon?'desktop-routes':'hide desktop-routes'}>
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