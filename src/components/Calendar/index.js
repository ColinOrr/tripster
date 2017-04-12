import './Calendar.css'
import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import { monthRange } from 'services/range'
import Month from './Month'

const Calendar = (props) => (
  <div className='Calendar'>
    {monthRange(props.start, props.end).map(month => (
      <Month key={format(month, 'YYYY-MM')} value={month} />
    ))}
  </div>
)

Calendar.PropTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end  : PropTypes.instanceOf(Date).isRequired,
}

export default Calendar
