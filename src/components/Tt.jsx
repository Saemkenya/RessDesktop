import React, { Component } from 'react'
import Calendar from './Calendar/index'

const style = {
  position: 'relative',
  margin: '50px auto'
}

class TimeTable extends Component {
  onDayClick = (e, day) => {
    alert(day)
  }

  state = {}
  render () {
    return <Calendar style={style} width='302px' onDayClick={(e, day) => this.onDayClick(e, day)} />
  }
}

export default TimeTable
