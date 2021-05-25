import faker from "faker";

function Contact() {
    return (
        <section id="contact-section">
            <header class="aside-header">Contact</header>
            <div>
                <p className="sub-header">Email</p>
                <p>{faker.internet.email()}</p>
            </div>
            <div>
                <p className="sub-header">Address</p>
                <p>73 {faker.address.streetName()}</p>
                <p>{faker.address.cityName()}, {faker.address.zipCode()}</p>
                <p>{faker.address.country()}</p>
            </div>
            <div>
                <p className="sub-header">Phone</p>
                <p>{faker.phone.phoneNumber()}</p>
            </div>
        </section>
    )
}

export default Contact;