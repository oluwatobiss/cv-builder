import faker from "faker";

function Profile() {
    return (
        <section id="profile-section">
            <header className="main-header">Profile</header>
            <p>{faker.lorem.sentences(7)}</p>
        </section>
    )
}

export default Profile;