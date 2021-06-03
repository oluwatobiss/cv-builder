import { useState } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

function SkillInfo() {
    const [mySkill, setMySkill] = useState({text: "React", showInputEle: false, readOnly: true});
    return (
        <article>
            <ElementMaker name="mySkill"
                mutableTagType="input"
                type="text"
                placeholder="Skill"
                staticTagType="p"
                text={mySkill.text}
                handleEleDoubleClick={() => setMySkill({...mySkill, showInputEle: true})}
                handleEleChange={e => setMySkill({...mySkill, text: e.target.value})}
                handleEleBlur={() => setMySkill({...mySkill, showInputEle: false})}
                showInputEle={mySkill.showInputEle}
            />
            <HoverRating hoverName="mySkill"
                defaultRating={3.5} 
                readOnly={mySkill.readOnly} 
                handleRateDoubleClick={() => setMySkill({...mySkill, readOnly: false})}
                handleRateBlur={() => setMySkill({...mySkill, readOnly: true})}
            />
        </article>
    )
}

export default SkillInfo;