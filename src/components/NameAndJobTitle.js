import React, { Component } from "react";
import faker from "faker";

class NameAndJobTitle extends Component {
    constructor() {
        super();
        this.state = {
            avatar: faker.image.avatar(),
        };
    }

    render() {
        return (
            <div id="name-and-job-title-div">
                <p id="fullname">{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
                <p id="job-title">{faker.name.jobTitle()}</p>
            </div>
        )
    }

}

export default NameAndJobTitle;