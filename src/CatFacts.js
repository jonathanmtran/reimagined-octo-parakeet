import React from 'react';

class CatFacts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            facts: undefined
        };

        this.getFacts = this.getFacts.bind(this);
    }

    getFacts() {
        let url = 'https://cat-fact.herokuapp.com/facts/random';

        if (typeof this.props.count !== 'undefined') {
            url = url + '?amount=' + this.props.count;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                facts: data
            }));
    }

    componentDidMount() {
        this.getFacts();
    }

    render() {
        let facts;

        if (typeof this.state.facts !== 'undefined') {
            facts = this.state.facts.map(fact => (
                <p key={fact._id}>{fact.text}</p>
            ));
        }

        return (
            <div>
                { facts }
                <button onClick={this.getFacts}>Next Fact</button>
            </div>
        );
    }
}

export default CatFacts;
