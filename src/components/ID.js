import faker from "faker";

function ID() {
    return (
        <section id="id-section">
            <img id="avatar" src={faker.image.avatar()} alt="avatar" />
            <div>
                <p id="fullname">{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
                <p id="job-title">{faker.name.jobTitle()}</p>
            </div>
        </section>
    )
}

export default ID;