import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render() {
    /* console.log( "this.state: ", this.state.text ) */
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input type="text"
                   className="form-control"
                   placeholder="I have to..."
                   onChange={ (e) => this.setState({ text: e.target.value }) }
            />
          </div>
          <button type="button" className="btn btn-success">Add Reminder</button>
        </div>

      </div>
    );
  }
}

export default App;
