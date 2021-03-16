import React from 'react';

// https://reactjs.org/#an-application
class DemoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        let newItem = {
            id: Date.now(),
            text: this.state.text,
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
        }));
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>DemoForm Component</h2>

                <TodoList items={this.state.items} />

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-item">Item</label>:&nbsp;
                    <input id="new-item" type="text" name="item" onChange={this.handleChange} value={this.state.text} />&nbsp;
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return null;
        }

        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default DemoForm;
