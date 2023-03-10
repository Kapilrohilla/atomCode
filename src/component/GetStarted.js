import './getStarted.css';

const GetStarted = () => {
    return (
        <div id="getStarted">
            <h1>Design System for React JS</h1>
            <p>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</p>
            <div className="btns">
                <button className="btn gs">Get Started Now</button>
                <button className="btn wv">
                    <img src="./images/play.svg" alt="play"/>
                    Watch Video
                </button>
            </div>
        </div>
    )
}
export default GetStarted;