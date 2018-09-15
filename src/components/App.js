import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addReminder, deleteReminder, clearReminders
} from '../actions'
import moment from 'moment'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      dueDate: '',
    }
  }

  deleteReminder (id) {
    this.props.deleteReminder(id)
  }

  renderReminder () {
    const { reminders } = this.props
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map(reminder => {
            return (
              <li key={ reminder.id } className="list-group-item">
                <div className="list-item">
                  <div>{ reminder.text }</div>
                  <div><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={ () => this.deleteReminder(reminder.id) }
                >
              &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  clearInput (...rest) {
    for (let elem of rest) {
      document.getElementById(elem).value = ''
    }
  }

  addReminder() {
    this.props.addReminder(
      this.state.text,
      this.state.dueDate
    );
    this.clearInput('text-elem', 'date-elem')
  }

  clearReminders () {
    this.props.clearReminders()
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input type="text"
                   className="form-control"
                   id="text-elem"
                   placeholder="I have to..."
                   onChange={ (e) => this.setState({ text: e.target.value }) }
            />
            <input
              type="datetime-local"
              id="date-elem"
              className="form-control"
              onChange={ (event) => this.setState({dueDate: event.target.value}) }
            />
          </div>
          <button type="button"
                  className="btn btn-success"
                  onClick={ (e) => this.addReminder() }>
            Add Reminder
          </button>
        </div>
        { this.renderReminder() }

        <div
          className="btn btn-danger mt-3"
          onClick={ () => this.clearReminders() }>
          Clear Reminders
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

export default connect(
  mapStateToProps,
  {
    addReminder,
    deleteReminder,
    clearReminders,
  }
)(App)
