import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Name</label>
              <input type="text" name="password" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Date Of Birth</label>
              <input type="text" name="password" placeholder="YYYY-MM-DD" />
            </div>
            <div className="form-group">
              <label htmlFor="password">College/Company</label>
              <input type="text" name="password" placeholder="College/Company" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
