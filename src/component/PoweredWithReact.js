import './poweredWithReact.css';
import PwrGridChild from './pwrGridChild/PwrGridChild';

export default function PoweredWithReact() {
    const pwrGridArr = [
        {
            id: 1,
            imgSrc: "./images/reactUI/atomic.svg",
            heading: 'Atomic',
            paragraph: 'Based on Atomic Design Methodology.'
        },
        {
            id: 2,
            imgSrc: './images/reactUI/alphabet.svg',
            heading: 'Theme Setup',
            paragraph: 'Auto updating colors and Styleguide.'
        },
        {
            id: 3,
            imgSrc: './images/reactUI/component.svg',
            heading: 'Components',
            paragraph: 'Ever-increasing list of components.'
        },
        {
            id: 4,
            imgSrc: './images/reactUI/responsiveDevice.svg',
            heading: 'Responsive',
            paragraph: 'Build fully responsive structures easily.'
        },
        {
            id: 5,
            imgSrc: './images/reactUI/customization.svg',
            heading: 'Customization',
            paragraph: 'Multiple customisations to suit your style.'
        },
        {
            id: 6,
            imgSrc: './images/reactUI/heartAdd.svg',
            heading: 'Icon System',
            paragraph: 'An inbuilt Icon system for faster development.'
        }
    ]
    return(
        <div>
          <h2 id="p-w-r-heading">Beautiful & consistant UI powered with <span>React</span>.</h2>  
          <div id="p-w-r-grid">
            {
                pwrGridArr.map((obj)=>{
                    return <PwrGridChild key={obj.id} imgSrc={obj.imgSrc} heading={obj.heading} paragraph={obj.paragraph} />
                })
            }
          </div>
        
        </div>
    )
}