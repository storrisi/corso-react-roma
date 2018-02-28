import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <button onClick={this.handleSubmit}>Add New Element</button>
        );
    }
}

export default AddButton;