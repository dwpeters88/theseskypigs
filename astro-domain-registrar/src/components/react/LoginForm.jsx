import React, { useState } from 'react';

const formStyle = {
  marginTop: '1rem',
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  maxWidth: '400px',
  margin: '2rem auto',
};

const inputGroupStyle = {
  marginBottom: '1rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.25rem',
  fontWeight: '500',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  width: '100%',
};

const errorStyle = {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
};

const messageStyle = {
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email.trim() || !password.trim()) {
      setError('Email and Password are required.');
      return;
    }

    // Mock login: Check if there's a user in localStorage (from signup)
    // In a real app, this would be an API call.
    try {
      const storedUser = localStorage.getItem('mockUser');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        // For this mock, we're not actually checking the password, just if the email exists from a previous mock signup.
        // A real login would validate credentials against a backend.
        if (user.email === email) {
          localStorage.setItem('isAuthenticated', 'true'); // Simple flag
          localStorage.setItem('currentUser', JSON.stringify({name: user.name, email: user.email})); // Store minimal current user info
          setMessage('Login successful! Redirecting to dashboard...');
          setEmail('');
          setPassword('');

          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 1500);
          return;
        }
      }
      setError('Invalid email or password. (Ensure you have signed up with this email if testing).');
    } catch (e) {
        setError('Login failed. Could not access session storage.');
        console.error("localStorage error:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} noValidate>
      {error && <p style={{...errorStyle, marginBottom: '1rem'}}>{error}</p>}
      {message && <p style={messageStyle}>{message}</p>}
      <div style={inputGroupStyle}>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="password" style={labelStyle}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
}

export default LoginForm;
```
