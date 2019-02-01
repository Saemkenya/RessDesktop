import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2'

const data = {
  datasets: [
    {
      data: [21, 26, 4],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      label: 'My dataset' // for legend
    }
  ],
  labels: ['Boys', 'Girls', 'Tutors']
}

export default class GradeGraph extends Component {
  render () {
    return (
      <div>
        <h2>Grade Population</h2>
        <Polar data={data} />
      </div>
    )
  }
}
