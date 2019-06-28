import React, { Component } from "react";
import "./contact.css";
import PropTypes from 'prop-types'


class Contact extends Component {

  state = {
    showInfo: false
  };

  showAndHide = (e) => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  delete = () =>{
    this.props.deleteClickHandler();
  }

  render() {
    const { contact } = this.props;
    const { name, email, phone } = contact;
    const { showInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4 className="card-title">
          Name: {name}
          <i className="fas fa-sort-down" onClick={this.showAndHide} style={{cursor:'pointer'}} />
          <i className="fas fa-times" onClick={this.delete} style={{cursor:'pointer', float: 'right', color:'red'}}></i>
        </h4>
        {showInfo ? (<ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul>) : null}
        
      </div>
    );
  }
}

Contact.protoTypes = {
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;
