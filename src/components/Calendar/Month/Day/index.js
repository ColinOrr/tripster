import './Day.css'
import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = (props) => (
  <div className='Day'>
    {format(props.value, 'DD/MM/YYYY')}
  </div>
)

Day.PropTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
}

export default Day
