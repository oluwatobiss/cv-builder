import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profile: {text: faker.lorem.sentences(7), showInputEle: false}
        }
    }

    handleEleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}});
    }

    handleEleBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], showInputEle: false}});
    }

    handleEleDoubleClick = (e) => {
        const {className} = e.target;
        this.setState({[className]: {...this.state[className], showInputEle: true}});
    }

    render() {
        return (
            <section id="profile-section">
                <header className="main-header">Profile</header>
                <ElementMaker name="profile"
                    mutableTagType="textarea"
                    staticTagType="p"
                    text={this.state.profile.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.profile.showInputEle}
                />
            </section>
        )
    }
}

export default Profile;