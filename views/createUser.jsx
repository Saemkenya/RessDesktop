import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateUser extends Component {
    constructor () {
        super()
        this.state = {
        email:            '',
        password:         '',
        salute:           '',
        name:             '',
        IDno:             '',
        NHIFno:           '',
        cell:             '',
        school:           '',
        addr_poBox:       '',
        addr_postalCode:  '',
        addr_town:        '',
        addr_county:      '',
        addr_nationality: '',
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
                                value={ this.state.salute }
                                placeholder="Salute ..."
                                onChange={ (e) => this.setState({
                                    salute: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="name"  
                                id="full-names" 
                                value={ this.state.name }
                                placeholder="Full Names ..."
                                onChange={ (e) => this.setState({
                                    name: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                value={ this.state.email }
                                placeholder="Email address ..."
                                onChange={ (e) => this.setState({
                                    email: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="password" 
                                name="password"  
                                id="user-password" 
                                value={ this.state.password }
                                placeholder="Password ..."
                                onChange={ (e) => this.setState({
                                    password: e.target.value
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
                                value={ this.state.cell }
                                placeholder="Cell phone Number ..."
                                onChange={ (e) => this.setState({
                                    cell: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="email" 
                                name="school Email"  
                                id="school" 
                                value={ this.state.school }
                                placeholder="school email address ..."
                                onChange={ (e) => this.setState({
                                    school: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="P.O. Box"  
                                id="AddrPoBox" 
                                value={ this.state.addr_poBox }
                                placeholder="P.O. Box number ..."
                                onChange={ (e) => this.setState({
                                    addr_poBox: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Postal Code"  
                                id="AddrPostalCode" 
                                value={ this.state.addr_postalCode }
                                placeholder="Postal code ..."
                                onChange={ (e) => this.setState({
                                    addr_postalCode: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Postal Town"  
                                id="AddrTown" 
                                value={ this.state.addr_town }
                                placeholder="Town ..."
                                onChange={ (e) => this.setState({
                                    addr_town: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="County"  
                                id="AddrCounty" 
                                value={ this.state.addr_county }
                                placeholder="County ..."
                                onChange={ (e) => this.setState({
                                    addr_county: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-white w-100 measure" 
                                type="text" 
                                name="Nationality"  
                                id="AddrNationality" 
                                value={ this.state.addr_nationality }
                                placeholder="Nationality ..."
                                onChange={ (e) => this.setState({
                                    addr_nationality: e.target.value
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
    async _createUser() {
        const { 
            email,          
            password, 
            salute,
            name,
            IDno,
            NHIFno,
            cell,
            school,
            addr_poBox,
            addr_postalCode,
            addr_town,
            addr_county,
            addr_nationality 
        } = this.state;
        await this.props.createUserMutation({
            variables: {
                email,
                password, 
                salute,
                name,
                IDno,
                NHIFno,
                cell,
                school,
                addr_poBox,
                addr_postalCode,
                addr_town,
                addr_county,
                addr_nationality
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
        $addr_poBox: String!,
        $addr_postalCode: String!,
        $addr_town: String!,
        $addr_county: String!,
        $addr_nationality: String!,
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
        addr_poBox:  $addr_poBox,
        addr_postalCode:  $addr_postalCode,
        addr_town:  $addr_town,
        addr_county: $addr_county,
        addr_nationality: $addr_nationality
    ){
        id
        salute
        name
    }
    }`

export default graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }) (CreateUser)