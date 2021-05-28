import { Component } from "react";
import uniqid from "uniqid";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";
import UntitledContact from "./UntitledContact";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            myContacts: [<Email key={uniqid()} />, <Address key={uniqid()} />, <Phone key={uniqid()} />]
        }
    }

    handleBtnClick = () => {
        this.setState({
            myContacts: [...this.state.myContacts, <UntitledContact key={uniqid()} />]
        })
    }

    render() {
        return (
            <section id="contact-section">
                <header className="aside-header">
                    <span>Contact</span>
                    <button className="aside-btn" onClick={this.handleBtnClick}>Add More</button>
                </header>
                {this.state.myContacts}
            </section>
        )
    }
}

export default Contact;