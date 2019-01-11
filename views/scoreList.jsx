import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Score from './score';

class ScoreList extends Component {
    render() {
        if (this.props.allScoresQuery && this.props.allScoresQuery.loading) {
            return <div>Loading scores ...</div>
        }
        if (this.props.allScoresQuery && this.props.allScoresQuery.error) {
            return <div>Error loading scores from server!</div>
        }
        
        const ScoresToRender = this.props.allScoresQuery.scores.edges
        ScoresToRender.map(score => (
            console.log(score.node.students.edges[0].node.name),
            console.log(score.node.students.edges[0].node.nemisNo)
        ))

        return (
            <div>                    
                { ScoresToRender.map(score => (
                    <Score key={ score.node.id } score={ score.node }/>
                )) }
            </div>
        )
    }
}

const ALL_SCORES_QUERY = gql`
query allScoresQuery {
  scores {
    edges {
      node {
        id
        score
        students {
          edges {
            node {
              name
              nemisNo
            }
          }
        }
        subjects {
          edges {
            node {
              name
            }
          }
        }
        exams {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}`

export default graphql(ALL_SCORES_QUERY, { name: 'allScoresQuery' }) (ScoreList)