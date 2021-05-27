import { Component } from "react";
import HoverRating from "./HoverRating";

class Skills extends Component {
    constructor() {
        super();
        this.state = { readOnly: true }
    }

    handleDoubleClick = () => this.setState({readOnly: false});
    handleBlur = () => this.setState({readOnly: true});

    render() {
        return (
            <section id="skills-section">
                <header className="aside-header">Skills</header>
                <div>
                    <article>
                        <p className="sub-header">React</p>
                        <HoverRating 
                            defaultRating={3.5} 
                            readOnly={this.state.readOnly} 
                            handleDoubleClick={this.handleDoubleClick}
                            handleBlur={this.handleBlur}
                        />
                    </article>
                    <article>
                        <p className="sub-header">Node.js</p>
                        <HoverRating 
                            defaultRating={5} 
                            readOnly={this.state.readOnly} 
                            handleDoubleClick={this.handleDoubleClick}
                            handleBlur={this.handleBlur}
                        />
                    </article>
                </div>
            </section>
        )
    }
}

export default Skills;