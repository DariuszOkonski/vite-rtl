import { useState } from 'react';

const Username = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <div data-testid='username'>{username}</div>
      <button onClick={() => setUsername('bar')} data-testid='button'>
        click
      </button>
      <input
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        data-testid='usernameInput'
      />
    </div>
  );
};

export default Username;
