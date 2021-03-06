import React, { Component } from 'react';
import dateFormat from 'dateformat';

const SingleEvent = (props) => {
  const title = props.event.title
  const startTime = new Date(props.event.startTime).toString().slice(0,16)
  const endTime = new Date(props.event.endTime).toString().slice(0,16)
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

export default SingleEvent;
