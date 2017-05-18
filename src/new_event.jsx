import React, { Component } from 'react';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      startTime: "",
      endTime: "",
      titleEmptyError: false,
      invalidDateError: false
    }
  }

  errorsPresent () {
    const {title, startTime, endTime} = this.state;
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (title === "") {
      this.setState({titleEmptyError: true, invalidDateError: false});
      return true;
    } else if (start > end || startTime === "") {
      this.setState({invalidDateError: true, titleEmptyError: false});
      return true;
    }

    return false;
  }

  /*
  If errors are present, compnonent re-renders with errors. Otherwise, the new event is added to the existing
  events and NewEvent state is updated with empty fields, and errors are cleared.
  */
  handleSubmit () {
    if (this.state.endTime === "") this.state.endTime = this.state.startTime;

    if (!this.errorsPresent()) {
      this.props.addEvent(this.state)

      this.setState({
        title: "",
        startTime: "",
        endTime: "",
        titleEmptyError: false,
        invalidDateError: false
      });
    }
  }

  render () {
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

          <button
            onClick={() => this.setState({title: "", startTime: "", endTime: ""})}
            className="submit-button">CLEAR ALL
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
}


export default NewEvent;
