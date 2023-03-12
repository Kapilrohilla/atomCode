// import section
import './singleBox.css'
import ProfileWrite, { PlainProfile,ProfileBox } from './ProfileWrite'
import SmallCircularBtn from './SmallCircularBtn'


export default function SingleBox() {
    return(
        <div className="singleBoxContainer">
            <div className="icons">
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredHeart.svg'} iconName={'colored Heart'} />
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredEye.svg'} iconName={'colored Heart'} />
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredPencil.svg'} iconName={'colored Heart'} />
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredClip.svg'} iconName={'colored Heart'} />
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredPlay.svg'} iconName={'colored Heart'} />
                <SmallCircularBtn iconPath={'./images/smallBtnColorIcon/coloredDownload.svg'} iconName={'colored Heart'} />
            </div>
            <div className="singleProfileBox">
                <ProfileBox imgPath={'./images/profileIcon3-girl.png'}/>
            </div>
        </div>
    )
}


export function SingleMiddleBox () {
    
    return(
        <div id="singleMiddleBox">
            <div className="upperMiddleBox">
                <img src="./images/singleMiddleBox.png" alt="" />
                <PlainProfile iconLink='./images/profileIcon2-girl.png' svgPath="./images/heart.svg" />
            </div>
            <div className="lowerMiddleBox">
                <ProfileWrite />
            </div>
            
        </div>
    )
}