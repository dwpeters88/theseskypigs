import React, { useState } from 'react';

// Utilizing global CSS variables and utility concepts where possible
const formStyle = {
  // Inherits .card like properties from global styles if wrapped in a div with class="card"
  // Or apply similar properties directly if not wrapping
  backgroundColor: 'var(--color-surface)', // Use CSS var
  padding: 'var(--space-l)', // Use CSS var
  borderRadius: 'var(--border-radius-medium)', // Use CSS var
  boxShadow: 'var(--box-shadow-sm)', // Use CSS var
  maxWidth: '450px', // Slightly wider
  margin: 'var(--space-xl) auto', // Use CSS var
};

const inputGroupStyle = {
  marginBottom: 'var(--space-m)', // Use CSS var
};

const labelStyle = {
  display: 'block',
  marginBottom: 'var(--space-s)', // Use CSS var
  fontWeight: '500', // Kept as is, good specificity
};

// inputStyle can be largely removed if global input styles are sufficient
// const inputStyle = { ... }; // Assuming global input styles are mostly fine

const buttonStyle = { // This style can be replaced by using <button className="success" style={{width: '100%'}}>
  // backgroundColor: 'var(--color-success)', // from className="success"
  // color: 'var(--color-surface)', // from global button styles
  // border: '1px solid var(--color-success)', // from className="success"
  // padding: 'var(--space-s) var(--space-m)', // from global button styles
  // borderRadius: 'var(--border-radius-small)', // from global button styles
  width: '100%', // Specific to this form button to be full-width
  fontSize: '1rem', // Consistent with global, can be removed if default is fine
  // cursor: 'pointer', // from global
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

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!name.trim()) {
      setError('Full Name is required.');
      return;
    }
    if (!email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Mock submission
    console.log('Signing up with:', { name, email, password });
    // In a real app, you'd make an API call here.
    // For now, simulate success and store a mock user session.
    try {
        localStorage.setItem('mockUser', JSON.stringify({ name, email, loggedIn: true }));
        localStorage.setItem('isAuthenticated', 'true'); // Simple flag
        setMessage('Sign up successful! You are now "logged in". Redirecting to dashboard...');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        // Simulate redirection after a short delay
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 2000);

    } catch (e) {
        // localStorage might not be available in all server-side rendering contexts initially,
        // but for client-side React component, it should be fine after mount.
        // This is primarily for client-side interaction.
        setError('Sign up failed. Could not persist session.');
        console.error("localStorage error:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} noValidate>
      {error && <p style={{...errorStyle, marginBottom: '1rem'}}>{error}</p>}
      {message && <p style={messageStyle}>{message}</p>}
      <div style={inputGroupStyle}>
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
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
      <div style={inputGroupStyle}>
        <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
```
