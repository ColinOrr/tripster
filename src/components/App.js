import './App.css'
import React, { Component } from 'react'
import parse from 'date-fns/parse'
import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Calendar start={parse('2017-01-01')} end={parse('2017-12-31')} />
      </div>
    )
  }
}

export default App
