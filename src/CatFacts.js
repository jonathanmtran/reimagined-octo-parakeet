import React from 'react';

class CatFacts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fact: undefined
        };

        this.getFacts = this.getFacts.bind(this);
    }

    getFacts() {
        fetch('https://cat-fact.herokuapp.com/facts/random')
            .then(response => response.json())
            .then(data => this.setState({
                fact: data
            }));
    }

    componentDidMount() {
        this.getFacts();
    }

    render() {
        let factText;

        if (typeof this.state.fact !== 'undefined') {
            factText = this.state.fact.text;
        }

        return (
            <div>
                <p>{factText}</p>
                <button onClick={this.getFacts}>Next Fact</button>
            </div>
        );
    }
}

export default CatFacts;
