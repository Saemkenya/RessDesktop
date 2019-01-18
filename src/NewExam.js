import React from "react";
import PropTypes from "prop-types";


export default class NewExam extends React.Component {
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
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Exam Info</label>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Examination</legend>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Exam name"  
                    id="exam-name" 
                    value={ this.state.name }
                    placeholder="Examination name ..."
                    onChange={ (e) => this.setState({
                        name: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="b pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Exam date"  
                    id="exam-date" 
                    value={ this.state.date }
                    placeholder="Date of exam ..."
                    onChange={ (e) => this.setState({
                        date: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Grade Name"  
                    id="grade-name" 
                    value={ this.state.grade }
                    placeholder="Grade to take this exam ..."
                    onChange={ (e) => this.setState({
                        grade: e.target.value
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
                    value="Save Examination" 
                    onClick={ console.log("Creating new exam") }/>
            </div>
        </article>
      </div>
    );
  }
}
