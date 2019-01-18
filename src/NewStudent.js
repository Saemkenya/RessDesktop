import React from "react";
import PropTypes from "prop-types";


export default class NewStudent extends React.Component {
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
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Student Info</label>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Student</legend>

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
                    type="text" 
                    name="nemis-number"  
                    id="nemis-number" 
                    value={ this.state.nemisNo }
                    placeholder="Nemis number ..."
                    onChange={ (e) => this.setState({
                        nemis: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="b pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="nhif-status"  
                    id="nhif-status" 
                    value={ this.state.nhifStatus }
                    placeholder="NHIF status ..."
                    onChange={ (e) => this.setState({
                        nhifStatus: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Birth Certificate Number"  
                    id="bCertNo" 
                    value={ this.state.bCertNo }
                    placeholder="Birth Certificate Number ..."
                    onChange={ (e) => this.setState({
                        bCertNo: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Nick Name"  
                    id="nickName" 
                    value={ this.state.nickName }
                    placeholder="Nick Name ..."
                    onChange={ (e) => this.setState({
                        nickName: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Parent Email"  
                    id="parentEmail" 
                    value={ this.state.parentEmail }
                    placeholder="Parent Email address ..."
                    onChange={ (e) => this.setState({
                        parentEmail: e.target.value
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
                    value="Save Student" 
                    onClick={ console.log("Creating new student") }/>
            </div>
        </article>
      </div>
    );
  }
}
