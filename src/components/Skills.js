import HoverRating from "./HoverRating";

function Skills() {
    return (
        <section id="skills-section">
            <header className="aside-header">Skills</header>
            <div>
                <article>
                    <p className="sub-header">React</p>
                    <HoverRating defaultRating={3.5} />
                </article>
                <article>
                    <p className="sub-header">Node.js</p>
                    <HoverRating defaultRating={5} />
                </article>
            </div>
        </section>
    )
}

export default Skills;