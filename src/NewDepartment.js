import React from "react";
import PropTypes from "prop-types";


export default class NewDepartment extends React.Component {
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
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Department Info</label>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Department</legend>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="name"  
                    id="dept-name" 
                    value={ this.state.name }
                    placeholder="Department Name ..."
                    onChange={ (e) => this.setState({
                        name: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="b pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="head of department"  
                    id="hod-email" 
                    value={ this.state.hodEmail }
                    placeholder="Head of dept email ..."
                    onChange={ (e) => this.setState({
                        hodEmail: e.target.value
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
                    value="Save Department" 
                    onClick={ console.log("Creating new department") }/>
            </div>
        </article>
      </div>
    );
  }
}
