import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Col key={fact._id}>{fact.text}</Col>
            ));
        }

        return (
            <div>
                <h2>Cat Facts</h2>
                <Row>
                { facts }
                </Row>
                <Button onClick={this.getFacts}>Next Fact</Button>
            </div>
        );
    }
}

export default CatFacts;
