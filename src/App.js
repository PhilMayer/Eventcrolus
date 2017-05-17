
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

  /*
  Creates a new object containing information for the new event. If errors are present,
  compnonent re-renders with errors. Otherwise, the new event is added to the existing
  events and the state is updated.
  */
  handleSubmit () {
    const newEvent = {
      end_time: this.state.endTime,
      start_time: this.state.startTime,
      title: this.state.title,
      description: ""
    }
    if (newEvent.end_time === "") newEvent.end_time = newEvent.start_time;

    const start = new Date(newEvent.start_time);
    let end = new Date(newEvent.end_time);

    if (newEvent.title === "") {
      this.setState({titleEmptyError: true, invalidDateError: false});
    } else if (start > end || newEvent.start_time === "") {
      this.setState({invalidDateError: true, titleEmptyError: false});
    } else {
      const updatedEventsList = this.state.events.concat(newEvent);

      this.setState({
        events: updatedEventsList,
        title: "",
        startTime: "",
        endTime: "",
        titleEmptyError: false,
        invalidDateError: false
      });
    }
  }

  sortByStartTime () {
    const events = this.state.events;

    events.sort((event1, event2) => {
      return new Date(event1.start_time) - new Date(event2.start_time);
    })

    this.setState({events});
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
        <button onClick={() => this.sortByStartTime()}>SORT BY START TIME</button>
        {events}
      </div>
    );
  }
  }

  export default App;
