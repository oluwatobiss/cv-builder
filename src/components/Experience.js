import faker from "faker";

function Experience() {
    return (
        <section id="experience-section">
            <header class="main-header">Experience</header>
            <p className="specialty">{faker.name.jobType()}</p>
            <p>{faker.company.companyName()}, {faker.address.city()}</p>
            <p><em>2015 - Present</em></p>
            <ul>
                <li>{faker.lorem.sentence()}</li>
                <li>{faker.lorem.sentence()}</li>
                <li>{faker.lorem.sentence()}</li>
            </ul>
        </section>
    )
}

export default Experience;