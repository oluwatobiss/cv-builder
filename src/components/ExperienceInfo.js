import { useState } from "react";
import faker from "faker";
import uniqid from "uniqid";
import ElementMaker from "./ElementMaker";
import Achievement from "./Achievement";

function ExperienceInfo() {
    const [specialty, setSpecialty] = useState({text: faker.name.jobType(), showInputEle: false});
    const [myCompanyName, setMyCompanyName] = useState({text: faker.company.companyName(), showInputEle: false});
    const [myCompanyCity, setMyCompanyCity] = useState({text: faker.address.city(), showInputEle: false});
    const [startYear, setStartYear] = useState({text: 2012, showInputEle: false});
    const [endYear, setEndYear] = useState({text: 2015, showInputEle: false});
    const [myAchievements, setMyAchievements] = useState([<Achievement key={uniqid()} />, <Achievement key={uniqid()} />]);

    const handleNumEleChange = e => {
        const {name, value} = e.target;
        if (Number(value) !== 0) {
            switch (name) {
                case "startYear": setStartYear({...startYear, text: value}); break;
                case "endYear": setEndYear({...endYear, text: value}); break;
                default: console.error("Issue with this element's name attribute");
            }
        } else { alert("Invalid Input: Only Numbers Allowed.") }
    }

    return (
        <>
            <div className="specialty-div">
                <ElementMaker name="specialty"
                    mutableTagType="input"
                    type="text"
                    placeholder="Job Title"
                    staticTagType="span"
                    text={specialty.text}
                    handleEleDoubleClick={() => setSpecialty({...specialty, showInputEle: true})}
                    handleEleChange={e => setSpecialty({...specialty, text: e.target.value})}
                    handleEleBlur={() => setSpecialty({...specialty, showInputEle: false})}
                    showInputEle={specialty.showInputEle}
                />
                <button className="header-btn" onClick={() => setMyAchievements([...myAchievements, <Achievement key={uniqid()} />])}>
                    Add Achievement
                </button>
            </div>
            <p>
                <ElementMaker name="myCompanyName"
                    mutableTagType="input"
                    type="text"
                    placeholder="Employer"
                    staticTagType="span"
                    text={myCompanyName.text}
                    handleEleDoubleClick={() => setMyCompanyName({...myCompanyName, showInputEle: true})}
                    handleEleChange={e => setMyCompanyName({...myCompanyName, text: e.target.value})}
                    handleEleBlur={() => setMyCompanyName({...myCompanyName, showInputEle: false})}
                    showInputEle={myCompanyName.showInputEle}
                />
                <span>, </span>
                <ElementMaker name="myCompanyCity"
                    mutableTagType="input"
                    type="text"
                    placeholder="City"
                    staticTagType="span"
                    text={myCompanyCity.text}
                    handleEleDoubleClick={() => setMyCompanyCity({...myCompanyCity, showInputEle: true})}
                    handleEleChange={e => setMyCompanyCity({...myCompanyCity, text: e.target.value})}
                    handleEleBlur={() => setMyCompanyCity({...myCompanyCity, showInputEle: false})}
                    showInputEle={myCompanyCity.showInputEle}
                />
            </p>
            <p>
                <em>
                    <ElementMaker name="startYear"
                        mutableTagType="input"
                        type="number"
                        staticTagType="span"
                        text={startYear.text}
                        handleEleDoubleClick={() => setStartYear({...startYear, showInputEle: true})}
                        handleEleChange={handleNumEleChange}
                        handleEleBlur={() => setStartYear({...startYear, showInputEle: false})}
                        showInputEle={startYear.showInputEle}
                    />
                    <span> - </span>
                    <ElementMaker name="endYear"
                        mutableTagType="input"
                        type="number"
                        staticTagType="span"
                        text={endYear.text}
                        handleEleDoubleClick={() => setEndYear({...endYear, showInputEle: true})}
                        handleEleChange={handleNumEleChange}
                        handleEleBlur={() => setEndYear({...endYear, showInputEle: false})}
                        showInputEle={endYear.showInputEle}
                    />
                </em>
            </p>
            <ul>{myAchievements}</ul>
        </>
    )
}

export default ExperienceInfo;