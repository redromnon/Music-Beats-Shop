import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Create Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)" />
              <Form.Text className="text-muted">
                Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
              </Form.Text>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Signup</Button>
            </div>
            <div className="text-center mt-3">
              Already have an account? <a href="login.html">Login here.</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
