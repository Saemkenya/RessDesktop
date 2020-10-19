import React from "react";
import PropTypes from "prop-types";


export default class NewParent extends React.Component {
  state = {
    email: null,
    password: null
  };

  static propTypes = {
    setToken: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.setState({ email: sessionStorage.getItem("email") });
    this.setState({ password: sessionStorage.getItem("password") });
  }


  startLogin = function(email, password) {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    this.setState({ email });
    this.setState({ password });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setToken } = this.props;
    const token = this.tokenInput.value;
    if (token) {
      setToken(token);
    }
  };

  render() {
    return (
      <div>
          <article className="pa4 black-80">
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Parent Info</label>
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
                    id="addrPoBox" 
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
                    id="addrPostalCode" 
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
                    id="addrTown" 
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
                    id="addrCounty" 
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
                    id="addrNationality" 
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
                    onClick={ console.log("Creating new parent") }/>
            </div>
        </article>
      </div>
    );
  }
}
