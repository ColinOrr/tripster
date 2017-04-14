import './Day.css'
import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import weekOfMonth from 'services/weekOfMonth'

const Day = (props) => {

  let dateFormat = 'D'
  if (props.value.getDate() === 1) dateFormat = 'D MMM'

  return (
    <div className={`Day Day-${format(props.value, 'ddd')} Day-Week-${weekOfMonth(props.value)}`}>
      {format(props.value, dateFormat)}
    </div>
  )
}

Day.PropTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
}

export default Day
