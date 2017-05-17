import React, { Component } from 'react';

export default class SingleEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {description: "short"}
  }

  /*
  Renders an event's information. If the event's description is longer than
  200 characters, a preview is given, along with an option to display more or
  an option to display less if the description is expanded.
  */
  render () {
    const {title, description} = this.props.event
    const shortDescription = description.slice(0, 200)
    const endTime = new Date(this.props.event.end_time).toString().slice(0,16)
    const startTime = new Date(this.props.event.start_time).toString().slice(0,16)
    const displayDescription = this.state.description === "short" ? shortDescription : description

    return (
      <div className="event">
        <h3>{title}</h3>

        <div className="dates">
          <span>{startTime}</span>
          <span className={startTime === endTime ? "hidden" : ""}>- {endTime}</span>
        </div>

        <div className="description">
          <span>{displayDescription}</span>

          <span
            className={displayDescription === description ? "hidden" : "more-or-less"}
            onClick={() => this.setState({description: "long"})}>
            ...more
          </span>

          <span
            className={displayDescription.length > 200 ? "more-or-less" : "hidden"}
            onClick={() => this.setState({description: "short"})}>
            ...less
          </span>
        </div>
      </div>
    )
  }
}
