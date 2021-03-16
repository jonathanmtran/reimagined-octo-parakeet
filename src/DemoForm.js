import React from 'react';

class DemoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: '',
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        let newItem = {
            id: Date.now(),
            text: this.state.text,
        }

        let currentItems = this.state.items;

        this.setState(
            {
                items: currentItems.concat(newItem),
                text: '',
            }
        );
    }

    handleOnChange(event) {
        //console.log(event.target.value);
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>DemoForm Component</h2>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="new-item">Item</label>
                    <input type="text" id="new-item" name="new-item" onChange={this.handleOnChange} value={this.state.text} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default DemoForm;
