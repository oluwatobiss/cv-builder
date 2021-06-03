import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function Phone() {
    const [myContactTel, setMyContactTel] = useState({text: faker.phone.phoneNumber(), showInputEle: false});
    return (
        <div>
            <p className="subHeader">Phone</p>
            <ElementMaker name="myContactTel"
                mutableTagType="input"
                type="tel"
                placeholder="Phone"
                staticTagType="p"
                text={myContactTel.text}
                handleEleDoubleClick={() => setMyContactTel({...myContactTel, showInputEle: true})}
                handleEleChange={e => setMyContactTel({...myContactTel, text: e.target.value})}
                handleEleBlur={() => setMyContactTel({...myContactTel, showInputEle: false})}
                showInputEle={myContactTel.showInputEle}
            />
        </div>
    )
}

export default Phone;