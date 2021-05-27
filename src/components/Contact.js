import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            myContactEmail: {text: faker.internet.email(), showInputEle: false},
            myContactStreetName: {text: `73 ${faker.address.streetName()}`, showInputEle: false},
            myContactCityName: {text: faker.address.cityName(), showInputEle: false},
            myContactZipCode: {text: faker.address.zipCode(), showInputEle: false},
            myContactCountry: {text: faker.address.country(), showInputEle: false},
            myContactTel: {text: faker.phone.phoneNumber(), showInputEle: false},
        }
    }

    handleEleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}})
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
            <section id="contact-section">
                <header className="aside-header">Contact</header>
                <div>
                    <p className="sub-header">Email</p>
                    <ElementMaker name="myContactEmail"
                        mutableTagType="input"
                        type="email"
                        staticTagType="p"
                        text={this.state.myContactEmail.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myContactEmail.showInputEle}
                    />
                </div>
                <div>
                    <p className="sub-header">Address</p>
                    <ElementMaker name="myContactStreetName"
                        mutableTagType="input"
                        type="text"
                        staticTagType="p"
                        text={this.state.myContactStreetName.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myContactStreetName.showInputEle}
                    />
                    <p>
                        <ElementMaker name="myContactCityName"
                            mutableTagType="input"
                            type="text"
                            staticTagType="span"
                            text={this.state.myContactCityName.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.myContactCityName.showInputEle}
                        />
                        <span>, </span>
                        <ElementMaker name="myContactZipCode"
                            mutableTagType="input"
                            type="text"
                            staticTagType="span"
                            text={this.state.myContactZipCode.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.myContactZipCode.showInputEle}
                        />
                    </p>
                    <ElementMaker name="myContactCountry"
                        mutableTagType="input"
                        type="text"
                        staticTagType="p"
                        text={this.state.myContactCountry.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myContactCountry.showInputEle}
                    />
                </div>
                <div>
                    <p className="sub-header">Phone</p>
                    <ElementMaker name="myContactTel"
                        mutableTagType="input"
                        type="tel"
                        staticTagType="p"
                        text={this.state.myContactTel.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myContactTel.showInputEle}
                    />
                </div>
            </section>
        )
    }
}

export default Contact;