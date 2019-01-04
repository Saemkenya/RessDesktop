import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateUser extends Component {
    constructor () {
        super()
        this.state = {
        Salute:          '',
        Name:            '',
        Email:           '',
        Password:        '',
        IDno:            '',
        NHIFno:          '',
        Cell:            '',
        Email:           '',
        School:          '',
        AddrPoBox:       '',
        AddrPostalCode:  '',
        AddrTown:        '',
        AddrCounty:      '',
        AddrNationality: '',
        }
        this._createUser = this._createUser.bind(this);
        
    }

    render() {
        return(
            <div>
                <article className="pa4 black-80">
                    <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">Add New Parent</label>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="salute"  
                                id="user-salute" 
                                value={ this.state.Salute }
                                placeholder="Salute ..."
                                onChange={ (e) => this.setState({
                                    Salute: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="name"  
                                id="full-names" 
                                value={ this.state.Name }
                                placeholder="Full Names ..."
                                onChange={ (e) => this.setState({
                                    Name: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                value={ this.state.Email }
                                placeholder="Email address ..."
                                onChange={ (e) => this.setState({
                                    Email: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="password" 
                                name="password"  
                                id="user-password" 
                                value={ this.state.Password }
                                placeholder="Password ..."
                                onChange={ (e) => this.setState({
                                    Password: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="ID Number"  
                                id="IDno" 
                                value={ this.state.IDno }
                                placeholder="ID Number ..."
                                onChange={ (e) => this.setState({
                                    IDno: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="NHIF Number"  
                                id="NHIFno" 
                                value={ this.state.NHIFno }
                                placeholder="NHIF Number ..."
                                onChange={ (e) => this.setState({
                                    NHIFno: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="cell Number"  
                                id="cell" 
                                value={ this.state.Cell }
                                placeholder="Cell phone Number ..."
                                onChange={ (e) => this.setState({
                                    Cell: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="email" 
                                name="school Email"  
                                id="school" 
                                value={ this.state.School }
                                placeholder="school email address ..."
                                onChange={ (e) => this.setState({
                                    School: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="P.O. Box"  
                                id="AddrPoBox" 
                                value={ this.state.AddrPoBox }
                                placeholder="P.O. Box number ..."
                                onChange={ (e) => this.setState({
                                    AddrPoBox: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Postal Code"  
                                id="AddrPostalCode" 
                                value={ this.state.AddrPostalCode }
                                placeholder="Postal code ..."
                                onChange={ (e) => this.setState({
                                    AddrPostalCode: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Postal Town"  
                                id="AddrTown" 
                                value={ this.state.AddrTown }
                                placeholder="Town ..."
                                onChange={ (e) => this.setState({
                                    AddrTown: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="County"  
                                id="AddrCounty" 
                                value={ this.state.AddrCounty }
                                placeholder="County ..."
                                onChange={ (e) => this.setState({
                                    AddrCounty: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Nationality"  
                                id="AddrNationality" 
                                value={ this.state.AddrNationality }
                                placeholder="Nationality ..."
                                onChange={ (e) => this.setState({
                                    AddrNationality: e.target.value
                                }) }/>
                        </div>

                        </fieldset>
                        <div className="mt3">
                            <input 
                                className="ph3 pv2 input-reset ba b--black bg-white grow pointer f6" 
                                type="submit" 
                                value="Save User" 
                                onClick={ async () => this._createUser() }/>
                        </div>
                    </article>
            </div>
        )
    }
    _createUser() {
        const { 
            Salute, 
            Name,
            IDno,
            NHIFno,
            Cell,
            Email,
            School,
            AddrPoBox,
            AddrPostalCode,
            AddrTown,
            AddrCounty,
            AddrNationality 
        } = this.state;
        this.props.createUserMutation({
            variables: {
                Salute, 
                Name,
                IDno,
                NHIFno,
                Cell,
                Email,
                School,
                AddrPoBox,
                AddrPostalCode,
                AddrTown,
                AddrCounty,
                AddrNationality
            }
        })
    }
}

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation(
        $email: String!,
        $password: String!,
        $salute: String!,
        $name: String!,
        $IDno: String!,
        $NHIFno: String!,
        $cell: String!,
        $school: String!,
        $AddrPoBox: String!,
        $AddrPostalCode: String!,
        $AddrTown: String!,
        $AddrCounty: String!,
        $AddrNationality: String!,
    ){
    addUser(
        email:  $email,
        password:  $password,
        salute:  $salute,
        name:  $name,
        IDno:  $IDno,
        NHIFno:  $NHIFno,
        cell:  $cell,
        school:  $school,
        addr_poBox:  $AddrPoBox,
        addr_postalCode:  $AddrPostalCode,
        addr_town:  $AddrTown,
        addr_county: $AddrCounty,
        addr_nationality: $AddrNationality
    ){
        id
        salute
        name
    }
    }`

export default graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }) (CreateUser)