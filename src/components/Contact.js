import { useState } from "react";
import uniqid from "uniqid";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";
import UntitledContact from "./UntitledContact";

function Contact() {
    const [myContacts, setMyContacts] = useState([<Email key={uniqid()} />, <Address key={uniqid()} />, <Phone key={uniqid()} />]);
    return (
        <section id="contact-section">
            <header className="aside-header">
                <span>Contact</span>
                <button className="aside-btn" onClick={() => setMyContacts([...myContacts, <UntitledContact key={uniqid()} />])}>
                    Add More
                </button>
            </header>
            {myContacts}
        </section>
    )
}
export default Contact;