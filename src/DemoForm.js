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

    componentDidMount() {
        fetch('http://localhost:9093/todo', {})
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({ items: response });
        });
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        let newItem = {
            text: this.state.text,
        }

        fetch('http://localhost:9093/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
        .then(response => {
            return response.json();
        })
        .then(object => {
            let currentItems = this.state.items;

            this.setState({
                items: currentItems.concat(object),
                text: '',
            });
        });
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
                        <li key={item._id}>{item.text}<br /><small>({item._id})</small></li>
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
