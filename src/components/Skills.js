import { Component } from "react";
import HoverRating from "./HoverRating";

class Skills extends Component {
    constructor() {
        super();
        this.state = { 
            reactHover: {readOnly: true},
            nodeJSHover: {readOnly: true},
        }
    }

    handleRateDoubleClick = (e) => {
        const {id} = e.target;
        console.log(`I double clicked ${id}`)
        this.setState({[id]: {readOnly: false}});
    }
    handleRateBlur = (e) => {
        const {id} = e.currentTarget;
        console.log(`I blurred ${id}`)
        this.setState({[id]: {readOnly: true}});
    }

    render() {
        return (
            <section id="skills-section">
                <header className="aside-header">Skills</header>
                <div>
                    <article>
                        <p className="sub-header">React</p>
                        <HoverRating hoverName="reactHover"
                            defaultRating={3.5} 
                            readOnly={this.state.reactHover.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                    <article>
                        <p className="sub-header">Node.js</p>
                        <HoverRating hoverName="nodeJSHover"
                            defaultRating={5} 
                            readOnly={this.state.nodeJSHover.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                </div>
            </section>
        )
    }
}

export default Skills;