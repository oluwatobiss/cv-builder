import { useState } from "react";
import ElementMaker from "./ElementMaker";

function UntitledContact() {
    const [subHeader, setSubHeader] = useState({text: "Title", showInputEle: false});
    const [myCustomContactText, setMyCustomContactText] = useState({text: "Contact Details", showInputEle: false});
    return (
        <article>
            <ElementMaker name="subHeader"
                mutableTagType="input"
                type="text"
                placeholder="Label"
                staticTagType="p"
                text={subHeader.text}
                handleEleDoubleClick={() => setSubHeader({...subHeader, showInputEle: true})}
                handleEleChange={e => setSubHeader({...subHeader, text: e.target.value})}
                handleEleBlur={() => setSubHeader({...subHeader, showInputEle: false})}
                showInputEle={subHeader.showInputEle}
            />
            <ElementMaker name="myCustomContactText"
                mutableTagType="input"
                type="text"
                placeholder="Link"
                staticTagType="p"
                text={myCustomContactText.text}
                handleEleDoubleClick={() => setMyCustomContactText({...myCustomContactText, showInputEle: true})}
                handleEleChange={e => setMyCustomContactText({...myCustomContactText, text: e.target.value})}
                handleEleBlur={() => setMyCustomContactText({...myCustomContactText, showInputEle: false})}
                showInputEle={myCustomContactText.showInputEle}
            />
        </article>
    )
}

export default UntitledContact;