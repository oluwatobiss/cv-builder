import { useState } from "react";
import uniqid from "uniqid";
import EducationInfo from "./EducationInfo";

function Education() {
    const [educationInfoArray, setEducationInfoArray] = useState([<EducationInfo key={uniqid()} />]);
    return (
        <section id="education-section">
            <header className="main-header">
                <span>Education</span>
                <button className="header-btn" onClick={() => setEducationInfoArray([...educationInfoArray, <EducationInfo key={uniqid()} />])}>
                    Add Education
                </button>
            </header>
            {educationInfoArray}
        </section>
    )
}

export default Education;