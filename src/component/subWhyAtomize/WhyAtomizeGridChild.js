
import './whyAtomizeGridChild.css'

export default function WhyAtomizeGridChild ({imgSrc,heading,para}) {

    return (
        <div className="whyAtomizeGridChild">
            <div id="w-a-g-c-img">
                <img src={imgSrc} alt="grid" />
            </div>
            <h4 className="w-a-g-c-heading">{heading}</h4>
            <p>{para}</p>
            <p>See How</p>
        </div>
    )
}