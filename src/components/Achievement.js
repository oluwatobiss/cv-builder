import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function Achievement() {
    const [myAchievement, setMyAchievement] = useState({text: faker.lorem.sentence(), showInputEle: false});
    return (
        <ElementMaker name="myAchievement"
            mutableTagType="input"
            type="text"
            placeholder="Your Achievement"
            staticTagType="li"
            text={myAchievement.text}
            handleEleChange={e => setMyAchievement({...myAchievement, text: e.target.value})}
            handleEleBlur={() => setMyAchievement({...myAchievement, showInputEle: false})}
            handleEleDoubleClick={() => setMyAchievement({...myAchievement, showInputEle: true})}
            showInputEle={myAchievement.showInputEle}
        />
    )
}

export default Achievement;