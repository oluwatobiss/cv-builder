import { useState } from "react";
import uniqid from "uniqid";
import ExperienceInfo from "./ExperienceInfo";

function Experience() {
    const [experienceInfoArray, setExperienceInfoArray] = useState([<ExperienceInfo key={uniqid()} />]);
    return (
        <section id="experience-section">
            <header className="main-header">
                <span>Experience</span>
                <button className="header-btn" onClick={() => setExperienceInfoArray([...experienceInfoArray, <ExperienceInfo key={uniqid()} />])}>
                    Add Experience
                </button>
            </header>
            {experienceInfoArray}
        </section>
    )
}
export default Experience;