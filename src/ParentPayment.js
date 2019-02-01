import React, { Component, Fragment } from 'react'
import { Bar } from 'react-chartjs-2'

export default class ParentPayment extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  getLabels = () => {
    let labels = ['']
    this.props.data[0].node.payments.edges.map(node => labels.push(String(node.node.date)))
    return labels
  }
  getdata = () => {
    let payData = [0]
    this.props.data[0].node.payments.edges.map(node => payData.push(node.node.amount))
    return payData
  }
  state = {
    graphData: {
      labels: this.getLabels(),
      datasets: [
        {
          label: 'Payments By this Parent',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.getdata()
        }
      ]
    }
  }
  componentDidMount () {}
  render () {
    return (
      <Fragment>
        <Bar
          data={this.state.graphData}
          height={100}
          width={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        {/* <div>{this.props.data.users.edges[0].node.amount}</div> */}
      </Fragment>
    )
  }
}
