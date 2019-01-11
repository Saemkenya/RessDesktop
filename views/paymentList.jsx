import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Payment from './payment';

class PaymentList extends Component {
    render() {
        if (this.props.allPaymentsQuery && this.props.allPaymentsQuery.loading) {
            return <div>Loading payments ...</div>
        }
        if (this.props.allPaymentsQuery && this.props.allPaymentsQuery.error) {
            return <div>Error loading payments from server!</div>
        }
        
        const PaymentsToRender = this.props.allPaymentsQuery.payments.edges
        PaymentsToRender.map(pay => (
            console.log(pay.node.amount),
            console.log(pay.node.students.edges[0].node.name)
        ))

        return (
            <div>                    
                { PaymentsToRender.map(payment => (
                    <Payment key={ payment.node.id } payment={ payment.node }/>
                )) }
            </div>
        )
    }
}

const ALL_PAYMENTS_QUERY = gql`
query allPayments{
  payments {
    edges {
      node {
        id
        amount
        date
        balance
        confirmed
        account
        students {
          edges {
            node {
              name
              nemisNo
            }
          }
        }
      }
    }
  }
}`

export default graphql(ALL_PAYMENTS_QUERY, { name: 'allPaymentsQuery' }) (PaymentList)