function ElementMaker(props) {
    const MutableTagType = props.mutableTagType;
    const StaticTagType = props.staticTagType;
    return (
        <>
            {
                props.showInputEle ?
                <MutableTagType 
                    type={props.type}
                    className={props.name} 
                    name={props.name} 
                    value={props.text} 
                    onChange={props.handleChange} 
                    onBlur={props.handleBlur} 
                    autoFocus 
                /> :
                <StaticTagType className={props.name} onDoubleClick={props.handleDoubleClick}>{props.text}</StaticTagType>
            }
        </>
    )
}

export default ElementMaker;