import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

class StudentGraph extends Component {
  getData = () => {
    let scores = []
    this.props.data.node.scores.edges.map(score => {
      scores.push(score.node.score)
    })
    return scores
  }
  getLabels = () => {
    let labels = []
    this.props.data.node.scores.edges.map(score => {
      console.log(score.node.exams.edges[0].node.name)
      labels.push(score.node.subjects.edges[0].node.name)
    })
    return labels
  }
  getName = () => {
    let name
    this.props.data.node.scores.edges.map(score => {
      name = score.node.exams.edges[0].node.name
    })
    return name
  }

  render () {
    return (
      <div>
        <h2>Student's Perfomance</h2>
        <HorizontalBar data={this.data} />
      </div>
    )
  }
  data = {
    labels: this.getLabels(),
    datasets: [
      {
        label: this.getName(),
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.getData()
      }
    ]
  }
}
export default StudentGraph
