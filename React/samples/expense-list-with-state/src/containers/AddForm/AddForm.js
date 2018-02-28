import React, { PureComponent } from 'react';

const customStyle = {display: 'flex', flexDirection: 'column', border: '1px solid black', padding:'10px'};

class AddForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            description:'',
            date: '',
            amount: '',
            flag: true
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            description: nextProps.updatingItem ? nextProps.updatingItem.description : '',
            date: nextProps.updatingItem ? nextProps.updatingItem.date : '',
            amount: nextProps.updatingItem ? nextProps.updatingItem.amount : ''
        });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => console.log(this.state))
    }

    handleSubmit = () => {
        this.props.addElement(this.state);
    }

    render() {
        const {updatingItem} = this.props;
        const {description, amount, date, notes} = this.state;

        return (
            <div style={customStyle}>
                <h2>{updatingItem ? `Update Element ${description}` : 'Add a New Element'}</h2>
                <input type="text" name="description" placeholder="Description" value={description} onChange={this.handleChange} />
                <input type="text" name="date" placeholder="Date" onChange={this.handleChange} value={date} />
                <input type="text" name="amount" placeholder="Amount" onChange={this.handleChange} value={amount} />
                <button onClick={this.handleSubmit}>Add New Element</button>
            </div>
        );
    }
}

export default AddForm;