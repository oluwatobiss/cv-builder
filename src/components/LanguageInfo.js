import { useState } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

function LanguageInfo() {
    const [myLanguage, setMyLanguage] = useState({text: "English", showInputEle: false, readOnly: true})
    return (
        <article>
            <ElementMaker name="myLanguage"
                mutableTagType="input"
                type="text"
                placeholder="Language"
                staticTagType="p"
                text={myLanguage.text}
                handleEleDoubleClick={() => setMyLanguage({...myLanguage, showInputEle: true})}
                handleEleChange={e => setMyLanguage({...myLanguage, text: e.target.value})}
                handleEleBlur={() => setMyLanguage({...myLanguage, showInputEle: false})}
                showInputEle={myLanguage.showInputEle}
            />
            <HoverRating hoverName="myLanguage"
                defaultRating={1.5} 
                readOnly={myLanguage.readOnly} 
                handleRateDoubleClick={() => setMyLanguage({...myLanguage, readOnly: false})}
                handleRateBlur={() => setMyLanguage({...myLanguage, readOnly: true})}
            />
        </article>
    )
}

export default LanguageInfo;