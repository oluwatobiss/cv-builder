import faker from "faker";

function Education() {
    return (
        <section id="education-section">
            <header class="main-header">Education</header>
            <p className="specialty">Business Administration</p>
            <p>University of California, Berkeley</p>
            <p><em>2010 - 2015</em></p>
            <ul>
                <li>{faker.lorem.sentence()}</li>
                <li>{faker.lorem.sentence()}</li>
                <li>{faker.lorem.sentence()}</li>
            </ul>
        </section>
    )
}

export default Education;