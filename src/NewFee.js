import React from "react";
import PropTypes from "prop-types";


export default class NewFeeStructure extends React.Component {
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
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Fee Structure Info</label>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Fee Structure</legend>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="grade ID"  
                    id="grade" 
                    value={ this.state.grade }
                    placeholder="Grade ID ..."
                    onChange={ (e) => this.setState({
                        grade: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="b pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Year"  
                    id="year" 
                    value={ this.state.year }
                    placeholder="Effective Year ..."
                    onChange={ (e) => this.setState({
                        year: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Amount"  
                    id="amount" 
                    value={ this.state.amount }
                    placeholder="Fee amount in KSHS ..."
                    onChange={ (e) => this.setState({
                        amount: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Term or semester"  
                    id="semester" 
                    value={ this.state.semester }
                    placeholder="Semester or term ..."
                    onChange={ (e) => this.setState({
                        semester: e.target.value
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

            </fieldset>
            <div className="mt3">
                <input 
                    className="ph3 pv2 input-reset ba b--black bg-white grow pointer f6" 
                    type="submit" 
                    value="Save Fee Structure" 
                    onClick={ console.log("Creating new fee structure") }/>
            </div>
        </article>
      </div>
    );
  }
}
