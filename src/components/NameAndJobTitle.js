import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function NameAndJobTitle() {
    const [fullName, setFullName] = useState({text: `${faker.name.firstName()} ${faker.name.lastName()}`, showInputEle: false});
    const [jobTitle, setJobTitle] = useState({text: faker.name.jobTitle(), showInputEle: false});

    return (
        <div id="name-and-job-title-div">
            <ElementMaker name="fullName"
                mutableTagType="input"
                type="text"
                placeholder="Full Name"
                staticTagType="p"
                text={fullName.text}
                handleEleChange={e => setFullName({...fullName, text: e.target.value})}
                handleEleBlur={() => setFullName({...fullName, showInputEle: false})}
                handleEleDoubleClick={() => setFullName({...fullName, showInputEle: true})}
                showInputEle={fullName.showInputEle}
            />
            <ElementMaker name="jobTitle"
                mutableTagType="input"
                type="text"
                placeholder="Profession"
                staticTagType="p"
                text={jobTitle.text}
                handleEleChange={(e) => setJobTitle({...jobTitle, text: e.target.value})}
                handleEleBlur={() => setJobTitle({...jobTitle, showInputEle: false})}
                handleEleDoubleClick={() => setJobTitle({...jobTitle, showInputEle: true})}
                showInputEle={jobTitle.showInputEle}
            />
        </div>
    )
}

export default NameAndJobTitle;