

const btnCss = {
    backgroundColor: 'transparent',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    boxShadow: 'rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 3px 3px -1px'
}

export default function SmallCircularBtn({iconPath,iconName}) {

    return (
        <button style={btnCss}>
            <img src={iconPath} alt={iconName} />
        </button>
    )
}