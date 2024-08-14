// src/AvatarFinder.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/useDebounce';

function AvatarFinder() {
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [error, setError] = useState(null);

  const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    if (debouncedUsername) {
      axios.get(`https://api.github.com/users/${debouncedUsername}`)
        .then(response => {
          setAvatarUrl(response.data.avatar_url);
          setError(null);
        })
        .catch(error => {
          setAvatarUrl(null);
          setError('User not found');
        });
    } else {
      setAvatarUrl(null);
      setError(null);
    }
  }, [debouncedUsername]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GitHub User Avatar Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {avatarUrl && <img src={avatarUrl} alt="User Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default AvatarFinder;
