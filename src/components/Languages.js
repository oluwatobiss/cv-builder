import { useState } from "react";
import uniqid from "uniqid";
import LanguageInfo from "./LanguageInfo";

function Languages() {
    const [myLanguages, setMyLanguages] = useState([<LanguageInfo key={uniqid()} />]);
    return (
        <section id="languages-section">
            <header className="aside-header">
                <span>Languages</span>
                <button className="aside-btn" onClick={() => setMyLanguages([...myLanguages, <LanguageInfo key={uniqid()} />])}>
                    Add More
                </button>
            </header>
            {myLanguages}
        </section>
    )
}

export default Languages;