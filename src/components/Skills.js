import { useState } from "react";
import uniqid from "uniqid";
import SkillInfo from "./SkillInfo";

function Skills() {
    const [mySkills, setMySkills] = useState([<SkillInfo key={uniqid()} />]);
    return (
        <section id="skills-section">
            <header className="aside-header">
                <span>Skills</span>
                <button className="aside-btn" onClick={() => setMySkills([...mySkills, <SkillInfo key={uniqid()} />])}>
                    Add More
                </button>
            </header>
            {mySkills}
        </section>
    )
}
export default Skills;