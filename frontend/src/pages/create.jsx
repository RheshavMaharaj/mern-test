import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    // Data to be submitted and used need to be states to
    // ensure we don't reload the page every time there is a state change
    this.state = {
      person_name: "",
      person_position: "",
      person_level: "",
    };

    //Required, else the functions don't work, javascript nuances
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
    this.onChangePersonLevel = this.onChangePersonLevel.bind(this);

  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
 
  onChangePersonPosition(e) {
    this.setState({
      person_position: e.target.value,
    });
  }
 
  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }

  onSubmit(event) {
    const url = "/record/add";
    const postBody = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_level: this.state.person_level,
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
            person_name: "",
            person_position: "",
            person_level: "",
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
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="text-center bg-green-50">
            <label>Name of the person: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Person's position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.person_level === "Junior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.person_level === "Senior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create person"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
