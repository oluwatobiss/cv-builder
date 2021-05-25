import { Component } from "react";
import ID from "./ID";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Skills from "./Skills";
import Languages from "./Languages";

class CVPage extends Component {
    render() {
        return (
            <div id="cv-page-div">
                <main>
                    <ID />
                    <Profile />
                    <Experience />
                    <Education />
                </main>
                <aside>
                    <Contact />
                    <Skills />
                    <Languages />
                </aside>
            </div>
        )
    }
}

export default CVPage;