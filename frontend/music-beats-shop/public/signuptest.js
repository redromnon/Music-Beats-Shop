import React, { useState } from 'react';
import { Container, Row, Col, Panel, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // do something with the form data
  }

  return (
    <Container>
      <Row>
        <Col md={6} mdOffset={3}>
          <Panel>
            <Panel.Heading>
              <h2 className="text-center">Create Account</h2>
            </Panel.Heading>
            <Panel.Body>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <ControlLabel>Username:</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password:</ControlLabel>
                  <FormControl
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)"
                  />
                  <HelpBlock>
                    Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                  </HelpBlock>
                </FormGroup>
                <Button type="submit" bsStyle="primary" block>Signup</Button>
                <p className="text-center">Already have an account? <a href="login.html">Login</a></p>
              </form>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
