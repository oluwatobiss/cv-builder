import { useState } from "react";
import uniqid from "uniqid";
import ElementMaker from "./ElementMaker";
import Achievement from "./Achievement";

function Education() {
    const [specialty, setSpecialty] = useState({text: "Business Administration", showInputEle: false});
    const [mySchoolName, setMySchoolName] = useState({text: "University of California", showInputEle: false});
    const [mySchoolCity, setMySchoolCity] = useState({text: "Berkeley", showInputEle: false});
    const [startYear, setStartYear] = useState({text: 2008, showInputEle: false});
    const [endYear, setEndYear] = useState({text: 2012, showInputEle: false});
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
                    placeholder="Degree"
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
                <ElementMaker name="mySchoolName"
                    mutableTagType="input"
                    type="text"
                    placeholder="School/Institution"
                    staticTagType="span"
                    text={mySchoolName.text}
                    handleEleDoubleClick={() => setMySchoolName({...mySchoolName, showInputEle: true})}
                    handleEleChange={e => setMySchoolName({...mySchoolName, text: e.target.value})}
                    handleEleBlur={() => setMySchoolName({...mySchoolName, showInputEle: false})}
                    showInputEle={mySchoolName.showInputEle}
                />
                <span>, </span>
                <ElementMaker name="mySchoolCity"
                    mutableTagType="input"
                    type="text"
                    placeholder="City"
                    staticTagType="span"
                    text={mySchoolCity.text}
                    handleEleDoubleClick={() => setMySchoolCity({...mySchoolCity, showInputEle: true})}
                    handleEleChange={e => setMySchoolCity({...mySchoolCity, text: e.target.value})}
                    handleEleBlur={() => setMySchoolCity({...mySchoolCity, showInputEle: false})}
                    showInputEle={mySchoolCity.showInputEle}
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

export default Education;