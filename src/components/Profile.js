import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function Profile() {
    const [profile, setProfile] = useState({text: faker.lorem.sentences(7), showInputEle: false});
    return (
        <section id="profile-section">
            <header className="main-header">Profile</header>
            <ElementMaker name="profile"
                mutableTagType="textarea"
                placeholder="Professional Summary"
                staticTagType="p"
                text={profile.text}
                handleEleDoubleClick={() => setProfile({...profile, showInputEle: true})}
                handleEleChange={e => setProfile({...profile, text: e.target.value})}
                handleEleBlur={() => setProfile({...profile, showInputEle: false})}
                showInputEle={profile.showInputEle}
            />
        </section>
    )
}

export default Profile;