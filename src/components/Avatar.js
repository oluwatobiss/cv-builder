import React, { Component } from "react";
import faker from "faker";

class Avatar extends Component {
    constructor() {
        super();
        this.avatarInputEleRef = React.createRef();
        this.state = {
            avatar: faker.image.avatar(),
        };
    }

    handleChange = (e) => {
        e.target.files[0].type.split("/")[0] === "image" ?
        this.setState({avatar: URL.createObjectURL(e.target.files[0])}) :
        window.alert("Invalid Upload: Only Image Files Allowed.")
    }

    handleDoubeClick = () => this.avatarInputEleRef.current.click();
    handleLoad = e => URL.revokeObjectURL(e.target.src);

    render() {
        return (
            <div>
                <input id="avatar-input-ele" type="file" accept="image/*" onChange={this.handleChange} ref={this.avatarInputEleRef} />
                <img id="avatar" src={this.state.avatar} alt="Avatar" onDoubleClick={this.handleDoubeClick} onLoad={this.handleLoad} />
            </div>
        )
    }
}

export default Avatar;