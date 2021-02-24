import React from 'react';

class Yo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        //this.updateDate = this.updateDate.bind(this);
    }

    render() {
        return (
            <div>
                <div>Yo, {this.props.name}!</div>
                <div>It is {this.state.date.toString()}.</div>

                <button onClick={(e) => this.updateDate(e)}>Update</button>
            </div>
        );
    }

    updateDate(e) {
        e.preventDefault();
        this.setState({ date: new Date() });
    }
}

export default Yo;
