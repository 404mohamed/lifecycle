import React, { Component, Fragment } from "react";

export default class ChangeUser extends Component {

  //  Reate life cycle
  
  state = {
    userName: "Moahmed Abdullah",
    userEmail: "m@gmail.com",
  };

  changeName = () => {
    this.setState({
      userName: "sayed",
    });
  };

  changeEmail = () => {
    this.setState({
      userEmail: "banan@gmail.com",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container my-5">
          <h1>{this.state.userName}</h1>
          <button onClick={this.changeName} className="btn btn-info">
            Change User name
          </button>
          <br />
          <br />
          <h2>{this.state.userEmail}</h2>
          <br />
          <br />
          <button onClick={this.changeEmail} className="btn btn-success">Change user email</button>
        </div>
      </Fragment>
    );
  }



}
