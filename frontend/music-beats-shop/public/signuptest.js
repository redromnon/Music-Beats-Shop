import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Create Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)" />
          <small className="form-text text-muted">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</small>
        </div>
        <div className="button-align">
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
        <div className="button-align">
          <a href="login.html">Already have an Account?</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
