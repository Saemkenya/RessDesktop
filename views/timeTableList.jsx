import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import TimeTable from './timeTable';

class TimeTableList extends Component {
    render() {
        if (this.props.allTTsQuery && this.props.allTTsQuery.loading) {
            return <div>Loading time tables ...</div>
        }
        if (this.props.allTTsQuery && this.props.allTTsQuery.error) {
            return <div>Error loading time tables from server!</div>
        }
        
        const TTsToRender = this.props.allTTsQuery.timeTables.edges
        TTsToRender.map(timeTable => (
            console.log(timeTable.node.ID),
            console.log(timeTable.node.TimeDate)
        ))

        return (
            <div>                    
                { TTsToRender.map(timeTable => (
                    <TimeTable key={ timeTable.node.ID } timeTable={ timeTable.node }/>
                )) }
            </div>
        )
    }
}

const ALL_TTS_QUERY = gql`
query allTTsQuery{
  timeTables {
    edges {
      node{
        ID
        TimeDate
      }
    }
  }
}`

export default graphql(ALL_TTS_QUERY, { name: 'allTTsQuery' }) (TimeTableList)