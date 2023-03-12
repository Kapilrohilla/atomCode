import './boxContainer.css';
import FormBox from './subBox/FormBox';
import SingleBox,{SingleMiddleBox} from "./subBox/singleBox"

export default function BoxContainer(){

    return(
        <>
            <div className="boxContainer">
                <SingleBox />
                <SingleMiddleBox />
                <FormBox />
            </div>
        </>
    )
}