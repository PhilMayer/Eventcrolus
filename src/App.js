
import React, { Component } from 'react';
import './App.css';
import SingleEvent from './single_event.jsx';

class App extends Component {
  constructor () {
    super()

    this.state = {
      events: [],
      title: "",
      startTime: "",
      endTime: "",
      titleEmptyError: false,
      invalidDateError: false
    }
  }

  /*
  Renders three inputs--a text input for title, and two date inputs for start and end times.
  If errors are present, they are displayed below the form.
  */
  newEvent () {
    return (
      <div>
        <p className="header">Create a new event</p>
        <div className="event-form">
          <div>
            <span className="form-label">Title</span>
            <input
              value={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}/>
          </div>

          <div>
            <span className="form-label">Start Time</span>
            <input
              type="date"
              value={this.state.startTime}
              onChange={(e) => this.setState({startTime: e.target.value})}/>
          </div>

          <div>
            <span className="form-label">End Time</span>
            <input
              type="date"
              value={this.state.endTime}
              onChange={(e) => this.setState({endTime: e.target.value})}/>
          </div>

          <button
            onClick={() => this.handleSubmit()}
            className="submit-button">CREATE EVENT
          </button>
        </div>

        <p className={this.state.titleEmptyError ? "errors" : "hidden"}>
          Isn't it maybe a little silly to have an event without a title?
        </p>
        <p className={this.state.invalidDateError ? "errors" : "hidden"}>
          Dates are so invalid it's not even funny
        </p>
      </div>
    )
  }

  render() {
    let events;
    if (this.state.events) {
      events = this.state.events.map ((event, idx) => {
        return <SingleEvent event={event} key={idx}/>
      })
    }

    const newEvent = this.newEvent();

    return (
      <div className="App">
        <h1>My Events</h1>
        {newEvent}

        <p className="header">Sort events</p>
        {events}
      </div>
    );
  }
  }

  export default App;
