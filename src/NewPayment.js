import React from "react";
import PropTypes from "prop-types";


export default class NewPayment extends React.Component {
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
        <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">New Payment Info</label>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Fee Payment</legend>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="student nemisID"  
                    id="std-nemis" 
                    value={ this.state.nemis }
                    placeholder="Student nemis number ..."
                    onChange={ (e) => this.setState({
                        nemis: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="b pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Amount"  
                    id="amount" 
                    value={ this.state.amount }
                    placeholder="Amount in KSHS ..."
                    onChange={ (e) => this.setState({
                        amount: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Date"  
                    id="date" 
                    value={ this.state.date }
                    placeholder="Payment date ..."
                    onChange={ (e) => this.setState({
                        date: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Fee balance"  
                    id="balance" 
                    value={ this.state.balance }
                    placeholder="Balance remaining ..."
                    onChange={ (e) => this.setState({
                        balance: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Payment confirmed"  
                    id="confirmed" 
                    value={ this.state.confirmed }
                    placeholder="Confirm?"
                    onChange={ (e) => this.setState({
                        confirmed: e.target.value
                    }) }/>
            </div>

            <div className="mt3">
                <input 
                    className="pa2 input-reset ba bg-white w-100 measure" 
                    type="text" 
                    name="Fee account"  
                    id="account" 
                    value={ this.state.account }
                    placeholder="Account paid ..."
                    onChange={ (e) => this.setState({
                        account: e.target.value
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
                    value="Save Payment" 
                    onClick={ console.log("Creating new payment") }/>
            </div>
        </article>
      </div>
    );
  }
}
