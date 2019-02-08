import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['English', 'Kiswahili', 'Mathematics', 'Religious Education', 'Social Studies'],
  datasets: [
    {
      label: 'End of term Exam, Second Term, 2019',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 0, 0, 0]
    }
  ]
}
const ScoreGraph = () => (
  <Fragment>
    <div>Grade Three Average Scores</div>
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>
  </Fragment>
)
export default ScoreGraph
