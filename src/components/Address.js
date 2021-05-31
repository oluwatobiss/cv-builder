import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Address extends Component {
    constructor() {
        super();
        this.state = {
            myContactStreetName: {text: `73 ${faker.address.streetName()}`, showInputEle: false},
            myContactCityName: {text: faker.address.cityName(), showInputEle: false},
            myContactZipCode: {text: faker.address.zipCode(), showInputEle: false},
            myContactCountry: {text: faker.address.country(), showInputEle: false},
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
            <div>
                <p className="subHeader">Address</p>
                <ElementMaker name="myContactStreetName"
                    mutableTagType="input"
                    type="text"
                    placeholder="Street Name"
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
                        placeholder="City"
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
                        placeholder="Zip Code"
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
                    placeholder="Country"
                    staticTagType="p"
                    text={this.state.myContactCountry.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.myContactCountry.showInputEle}
                />
            </div>
        )
    }
}

export default Address;