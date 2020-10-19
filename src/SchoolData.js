import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SCHOOL_QUERY = gql`
  query SchoolParentsQuery($email: String!) {
    school(email: $email) {
      id
      name
      motto
      email
      website
      addrPoBox
      addrPostalCode
      addrTown
      addrCounty
      addrCountry
    }
  }
`

export default class SchoolData extends React.Component {
  state = {
    toggleNavStatus: false
  }

  toggleNav = () => {
    let getSideBar = document.querySelector('.body-side-menu')
    let getSideBarLinks = document.querySelectorAll('.body-side-menu div a')

    if (this.state.toggleNavStatus === false) {
      getSideBar.style.width = '200px'

      let arrayLength = getSideBarLinks.length
      for (let i = 0; i < arrayLength; i++) {
        getSideBarLinks[i].style.opacity = '1'
      }

      this.setState({
        toggleNavStatus: true
      })
    } else if (this.state.toggleNavStatus === true) {
      getSideBar.style.width = '50px'

      let arrayLength = getSideBarLinks.length
      for (let i = 0; i < arrayLength; i++) {
        getSideBarLinks[i].style.opacity = '0'
      }

      this.setState({
        toggleNavStatus: false
      })
    }
  }

  render () {
    return (
      <Fragment>
        <Query query={SCHOOL_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            console.log(data)
            return (
              <div className='main-body-header' onClick={this.toggleNav}>
                <span className='btn-toggle-nav' />
                <div>
                  <ul>
                    <li className='main-header-text'>
                      <span>{data.school.name}</span>
                    </li>
                    <li className='main-motto-text'>
                      <span>{data.school.motto}</span>
                    </li>
                  </ul>
                </div>
                <div className='main-address-text'>
                  <ul>
                    <li>
                      <span>
                        P.O. Box {data.school.AddrPoBox}-{data.school.AddrPostalCode}, {data.school.AddrTown} |{' '}
                        {data.school.AddrCounty} county, {data.school.AddrCountry}
                      </span>
                    </li>
                    <li>
                      <span>
                        {data.school.email} | {data.school.website}
                      </span>
                    </li>
                  </ul>
                </div>
                <input className='main-search-input' placeholder='Search ...' />
                <span className='main-flag-section' />
              </div>
            )
          }}
        </Query>
      </Fragment>
    )
  }
}
