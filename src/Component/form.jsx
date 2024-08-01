import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Fetch IP address
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIpAddress(response.data.ip);
        console.log('IP Address:', response.data.ip);
      })
      .catch(error => {
        console.error('There was an error fetching the IP address!', error);
      });

    // Clear the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* {ipAddress && <p>Your IP Address is: {ipAddress}</p>} */}
    </div>
  );
};

export default FormComponent;
