import './dd-card.css';


export default function DdCard ({imgSrc,heading,paragraph,visitLink}) {

    return (
        <div id="dd-block">
            <div className="dd-img">
                <img src={imgSrc} alt="dd-img" />
            </div>
            <div className="dd-heading">
                <h4>{heading}</h4>
            </div>
            <div className="dd-paragraph">
                <p>{paragraph}</p>
            </div>
            <div className="dd-visit-link">
                <p>{visitLink}&nbsp;&nbsp;&nbsp;&nbsp;<img src="./images/arrow-right.svg" alt="arrow right" /></p>
            </div>
        </div>
    )
}