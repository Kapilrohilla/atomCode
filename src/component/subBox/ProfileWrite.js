
import './profile-write.css';


export default function ProfileWrite ({image,name,post}) {

    return (
        <div id="profileCss">
            <div className="profileLeft">
                <div className="profileIcon" >
                    <img src="./images/profileIcon1.png" alt="profileIcon1" />
                </div>
                <div>
                    <h3>John Doe</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
            <div>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M18.556 8.90942L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L15.0647 5.35974C15.0742 5.4062 15.0969 5.45049 15.1329 5.48653L18.5506 8.90426C18.5524 8.90601 18.5542 8.90773 18.556 8.90942Z" fill="#323232"></path> <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.3096 5.30981L18.7273 8.72755" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
        </div>
    )
}

export function PlainProfile({iconLink,svgPath}) {

    return (
        <div id="plainProfile">
            <div className="plainProfileLeft">
                <div className="profileIcon2">
                    <img src={iconLink} alt="profile1" />
                </div>
                <div>
                    <p>Meagan Fisher</p>
                </div>
            </div>
            <div>
                <img src={svgPath} alt="heart or plus icon" />
            </div>
        </div>
    )
}

export function ProfileBox ({imgPath,imageName="profileBox"}) {

    return (
        <div id="profileBox">
            <div className="imageSection">
                <img src={imgPath} alt={imageName} />
                <h4>Meagan Fisher</h4>
                <p>Engineering Manager</p>
            </div>
            <div className='curvedBtn'>
                <button>
                    <p>Follow</p>
                    <img src="./images/plus.svg" alt="plus" />
                </button>
                <button>
                    <p>Message</p>
                    <img src="./images/message.svg" alt="message" />    
                </button>
            </div>
        </div>
    )
}