function ElementMaker(props) {
    const MutableTagType = props.mutableTagType;
    const StaticTagType = props.staticTagType;
    return (
        <>
            {
                props.showInputEle ?
                <MutableTagType 
                    type={props.type}
                    placeholder={props.placeholder}
                    className={props.name} 
                    name={props.name} 
                    value={props.text}
                    onChange={props.handleEleChange} 
                    onBlur={props.handleEleBlur} 
                    autoFocus 
                /> :
                <StaticTagType className={props.name} onDoubleClick={props.handleEleDoubleClick}>{props.text}</StaticTagType>
            }
        </>
    )
}

export default ElementMaker;