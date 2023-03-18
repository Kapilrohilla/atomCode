import './pwrGridChild.css';


export default function PwrGridChild({imgSrc,heading,paragraph}){

    return(
        <div id="pwr-g-c">
            <div><img src={imgSrc} alt="reactUIGrid" /></div>
            <h4>{heading}</h4>
            <p>{paragraph}</p>
        </div>
    )
}