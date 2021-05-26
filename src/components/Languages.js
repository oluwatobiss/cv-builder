import HoverRating from "./HoverRating";

function Languages() {
    return (
        <section id="languages-section">
            <header className="aside-header">Languages</header>
            <div>
                <article>
                    <p className="sub-header">English</p>
                    <HoverRating defaultRating={1.5} />
                </article>
                <article>
                    <p className="sub-header">French</p>
                    <HoverRating defaultRating={4} />
                </article>
            </div>
        </section>
    )
}

export default Languages;