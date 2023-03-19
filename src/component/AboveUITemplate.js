

export default function AboveUITemplate({boldCharacter,paragraph}){
    const aboveUI_template_block_css = {
        padding: '25px',
        textAlign: 'center',
        wordSpacing: '3px'
    }
    const para_first = {
        fontSize: '40px',
        fontWeight: 700,
        marginBottom: '20px'
    }
    return (
        <div style={aboveUI_template_block_css} id="aboveUI-template-block">
           <p style={para_first}>{boldCharacter}</p> 
           <p style={{color: 'rgb(80,82,86)'}}>{paragraph}</p>
        </div>
    )
}