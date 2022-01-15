import React, { Component } from "react";
import Navbar from '../components/navbar/navbar';

class Create extends Component {
  constructor(props) {
    super(props);
    // Data to be submitted and used need to be states to
    // ensure we don't reload the page every time there is a state change
    this.state = {
      user_id: "",
      user_password: "",
    };

    //Required, else the functions don't work, javascript nuances
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeId = this.onChangePersonId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  // These methods will update the state properties.
  onChangePersonId(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
 
  onChangePassword(e) {
    this.setState({
      person_position: e.target.value,
    });
  }

  onSubmit(event) {
    const url = "/record/add";
    const postBody = {
      user_id: this.state.user_id,
      user_password: this.state.user_password,
    };
    const requestMetadata = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postBody),
    };
    fetch(url, requestMetadata)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            user_id: "",
            user_password: "",
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="text-center bg-green-50">
            <label>User ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_id}
              onChange={this.onChangePersonId}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_password}
              onChange={this.onChangePassword}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
