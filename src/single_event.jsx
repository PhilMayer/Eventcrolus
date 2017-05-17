import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class SingleEvent extends Component {
  /*
  Renders an event's information.
  */
  render () {
    const title = this.props.event.title
    const startTime = new Date(this.props.event.start_time).toString().slice(0,16)
    const endTime = new Date(this.props.event.end_time).toString().slice(0,16)
    const formattedStartTime = dateFormat(startTime, "dddd, mmmm dS, yyyy")
    const formattedEndTime = dateFormat(endTime, "dddd, mmmm dS, yyyy")

    return (
      <div className="event">
        <h3>{title}</h3>

        <div className="dates">
          <span>{formattedStartTime}</span>
          <span className={startTime === endTime ? "hidden" : ""}>- {formattedEndTime}</span>
        </div>
      </div>
    )
  }
}
