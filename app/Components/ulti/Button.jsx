const PrimaryBtn = ({ label, onclick, style, className }) => {
    return (
        <>
            <button onClick={onclick} className={className} style={style}>
                {label}
            </button>
        </>
    )
}