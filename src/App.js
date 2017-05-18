import './App.css';
import NewEvent from './new_event.jsx';
import React, { Component } from 'react';
import SingleEvent from './single_event.jsx';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class App extends Component {
  constructor () {
    super()

    this.state = {
      events: [],
      filteredEvents: [],
      filter: false
    }
  }

  addEvent (newEvent) {
    const updatedEventsList = this.state.events.concat(newEvent);

    this.setState({
      events: updatedEventsList,
      filter: false
    });
  }

  searchByTitle (e) {
    const events = this.state.events;
    const filteredEvents = [];

    events.forEach((event) => {
      if (event.title.toUpperCase().includes(e.target.value.toUpperCase())) {
        filteredEvents.push(event);
      }
    })

    this.setState({filteredEvents, filter: true})
  }

  sortByStartTime () {
    const events = this.state.events;

    events.sort((event1, event2) => {
      return new Date(event1.startTime) - new Date(event2.startTime);
    })

    this.setState({events});
  }

  /*
  Sorts events by their titles by converting titles to uppercase and removing
  all non-letter charaters.
  */
  sortByTitle () {
    const events = this.state.events;

    events.sort((event1, event2) => {
      const title1 = event1.title.toUpperCase().replace(/\W/g, '');
      const title2 = event2.title.toUpperCase().replace(/\W/g, '');

      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    })

    this.setState({events});
  }

  render() {
    let events;
    if (this.state.events) {
      events = this.state.filter ? this.state.filteredEvents : this.state.events
      events = events.map ((event, idx) => {

      return <SingleEvent event={event} key={idx}/>
      })
    }

    return (
      <div className="App">
        <h1>My Events</h1>
        <NewEvent addEvent={this.addEvent.bind(this)}/>

        <p className="header">Sort events</p>
        <input onChange={(e) => this.searchByTitle(e)} className="title-search" placeholder={"Search by title"}/>
        <button onClick={() => this.sortByTitle()}>SORT BY TITLE</button>
        <button onClick={() => this.sortByStartTime()}>SORT BY START TIME</button>

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {events}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
