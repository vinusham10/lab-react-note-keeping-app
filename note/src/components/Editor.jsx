import React, { Component } from 'react';
import './Editor.css'; // Import your CSS file for styling

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="main">
                <div className="input">
                    <h3>Input</h3>
                    <textarea
                        className="input-text"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>
            </div>
        );
    }
}

export default Editor;