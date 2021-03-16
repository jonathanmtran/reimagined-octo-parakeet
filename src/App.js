import React from 'react';

import './App.css';

import CatFacts from './CatFacts.js';
import DemoForm from './DemoForm.js';
import Posts from './Posts.js';
import Welcome from './Welcome.js';
import Woof from './Woof.js';
import Yo from './Yo.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showCatFacts: false,
      showDemoForm: false,
      showWoof: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    let defaultState = {
      showCatFacts: false,
      showDemoForm: false,
      showWoof: false,
    };
    let newState = {};

    if (value === 'CatFacts') {
      newState = { showCatFacts: true };
    }
    else if (value === 'DemoForm') {
      newState = { showDemoForm: true };
    }
    else if (value === 'Woof') {
      newState = { showWoof: true };
    }

    this.setState({...defaultState, ...newState});
  }

  render() {
    let catFactsComponent = this.state.showCatFacts ? <CatFacts count="3" /> : undefined;
    let demoFormComponent = this.state.showDemoForm ? <DemoForm /> : undefined;
    let woofComponent = this.state.showWoof ? <Woof /> : undefined;

    return (
      <div className="App">
        <Container>
          <h1>my-app</h1>
          <Form>
            <Form.Group>
              <Form.Label>Component</Form.Label>
              <Form.Control as="select" onChange={this.handleChange}>
                <option>None</option>
                <option value="CatFacts">CatFacts</option>
                <option value="DemoForm">DemoForm</option>
                <option value="Woof">Woof</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        <Container>
        { catFactsComponent }
        { demoFormComponent }
        { woofComponent }
        </Container>
      </div>
    );
  }
}

export default App;
