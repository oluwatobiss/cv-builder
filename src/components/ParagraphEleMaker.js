function ParagraphEleMaker(props) {
    return (
        <>
            {
                props.showInputEle ?
                <input type={props.type} className={props.name} name={props.name} value={props.text} onChange={props.handleChange} onBlur={props.handleBlur} autoFocus /> :
                <p className={props.name} onDoubleClick={props.handleDoubleClick}>{props.text}</p>
            }
        </>
    )
}

export default ParagraphEleMaker;