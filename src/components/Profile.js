import { Component } from "react";
import faker from "faker";
import ParagraphEleMaker from "./ParagraphEleMaker";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profile: {text: faker.lorem.sentences(7), showInputEle: false}
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}});
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], showInputEle: false}});
    }

    handleDoubleClick = (e) => {
        const {className} = e.target;
        this.setState({[className]: {...this.state[className], showInputEle: true}});
    }

    render() {
        return (
            <section id="profile-section">
                <header className="main-header">Profile</header>
                <ParagraphEleMaker name="profile"
                    tagName="textarea"
                    text={this.state.profile.text}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    handleDoubleClick={this.handleDoubleClick}
                    showInputEle={this.state.profile.showInputEle}
                />
            </section>
        )
    }
}

export default Profile;