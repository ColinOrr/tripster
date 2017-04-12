import './Month.css'
import React from 'react'
import PropTypes from 'prop-types'
import startOfMonth from 'date-fns/start_of_month'
import endOfMonth from 'date-fns/end_of_month'
import format from 'date-fns/format'
import { dateRange } from 'services/range'
import Day from './Day'

const Month = (props) => (
  <div className='Month'>
    {dateRange(startOfMonth(props.value), endOfMonth(props.value)).map(day => (
      <Day key={format(day, 'YYYY-MM-DD')} value={day} />
    ))}
  </div>
)

Month.PropTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
}

export default Month
