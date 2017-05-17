
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
