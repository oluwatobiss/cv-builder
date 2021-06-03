import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function Email() {
    const [myContactEmail, setMyContactEmail] = useState({text: faker.internet.email(), showInputEle: false});
    return (
        <div>
            <p className="subHeader">Email</p>
            <ElementMaker name="myContactEmail"
                mutableTagType="input"
                type="email"
                placeholder="Email"
                staticTagType="p"
                text={myContactEmail.text}
                handleEleChange={e => setMyContactEmail({...myContactEmail, text: e.target.value})}
                handleEleBlur={() => setMyContactEmail({...myContactEmail, showInputEle: false})}
                handleEleDoubleClick={() => setMyContactEmail({...myContactEmail, showInputEle: true})}
                showInputEle={myContactEmail.showInputEle}
            />
        </div>
    )
}

export default Email;