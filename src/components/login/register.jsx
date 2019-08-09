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
          <form action="http://localhost:8000/user/register" method="POST">

          
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="text" name="dob" placeholder="YYYY-MM-DD" />
              </div>
              <div className="form-group">
                <label htmlFor="college">College/Company</label>
                <input type="text" name="college" placeholder="College/Company" />
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
            <div className="footer">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </form>
      </div>
        
      </div>
    );
  }
}
