import './formBox.css'
import Input from './Input'

export default function FormBox(){
    return (
        <div id="form">
            <h4>Login into your account</h4>
            <p>Don't have an account yet? <span>Create New</span></p>
            <form onClick={(e)=>e.preventDefault()}>
                <Input iconSrc='./images/grey-email.svg' inputType='email' placeholder="kapilrohilla200@gmail.com"/>
                <Input iconSrc='./images/grey-eye.svg' inputType='password' placeholder="password" />
                <button id="formSubmit" type='submit'>Login</button>
            </form>
        </div>
    )
}