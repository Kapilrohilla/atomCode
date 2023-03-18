//
import WhyAtomizeGridChild from './subWhyAtomize/WhyAtomizeGridChild';
import './whyAtomize.css';

export default function WhyAtomize() {
    const gridChild = [
        {
            id: 1,
            imgSrc: './images/grid.svg',
            paragraph: 'Change grid variables or give decimal column size.',
            heading: 'Flexible Grid'
        },
        {
            id: 2,
            imgSrc: './images/styleGuide.svg',
            paragraph: 'Update theme throughout the application easily.',
            heading: 'Style Guide'
        },
        {
            id: 3,
            imgSrc: './images/spacing.svg',
            paragraph: 'A better and controlled way of update spacing.',
            heading: 'Spacing'
        },
        {
            id: 4,
            imgSrc: './images/responsive.svg',
            paragraph: 'Better control to make the app responsive.',
            heading: 'Responsive'
        }
    ]
    return (
        <div>
            <span id="key-features">key features</span>
            <h3 id="key-features-heading">Why use Atomize React?</h3>
            <p>Atomize React helps you in building fully responsive websites and products that match your style.</p>
            <div id="whyAtomizeGrid">
                {
                    gridChild.map((obj)=>{
                        return <WhyAtomizeGridChild key={obj.id} imgSrc={obj.imgSrc} heading={obj.heading} para={obj.paragraph} />
                    })
                }
            </div>
        </div>
    )
}