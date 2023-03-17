

export default function Input ({inputType,iconSrc,placeholder}){
    if(inputType==="password"){
               
    }
    const inputCss = {
        width: '100%',
        borderRadius: '10000px',
        height: '2.5rem',
        paddingLeft: '1rem',
        border: '1px solid #a7aab0',
        paddingInline: '20px 40px',
        
    }
    const imgCss = {
        transform: 'translate(100px,-27px)',

    }
    return(
        <div style={{width: '100%'}}>
            <input type={inputType} placeholder={placeholder} style={inputCss}/>
            <img style={imgCss} src={iconSrc} alt="greyEye" />
        </div>
    )
}