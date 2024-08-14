### GitHub User Avatar Finder Web App: Full Stack Web Development Assignment

---

### Project Overview

This assignment requires building a simple React-based web application that allows users to search for a GitHub username and displays the user's avatar using the GitHub API. The app must also implement debouncing to optimize API calls, and the code should be well-organized, modular, and error-free.

---

### Project Structure

```plaintext
github-avatar-finder/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   └── AvatarDisplay.js
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── ...
│
├── README.md
└── package.json
```

---

### Step-by-Step Implementation

#### 1. **Initialize the Project**

Create a new React project:

```bash
npx create-react-app github-avatar-finder
cd github-avatar-finder
npm install axios
```

---

#### 2. **Custom Debounce Hook (`useDebounce`)**

Create a custom hook that will manage the debouncing logic, ensuring that the API is not called excessively while the user is typing.

**File: `src/hooks/useDebounce.js`**

```javascript
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

**Explanation:**
- The `useDebounce` hook takes `value` and `delay` as arguments.
- It returns the debounced value after the specified delay, preventing rapid API calls.

---

#### 3. **Avatar Display Component**

This component will handle fetching the GitHub avatar using the provided username and the GitHub API.

**File: `src/components/AvatarDisplay.js`**

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AvatarDisplay.css'; // For styling

const AvatarDisplay = ({ username }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchAvatar = async () => {
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`);
          setAvatarUrl(response.data.avatar_url);
          setError(null);
        } catch (error) {
          setAvatarUrl(null);
          setError('User not found');
        }
      };
      fetchAvatar();
    }
  }, [username]);

  return (
    <div className="avatar-container">
      {error && <p className="error">{error}</p>}
      {avatarUrl && <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />}
    </div>
  );
};

export default AvatarDisplay;
```

**Explanation:**
- This component fetches the avatar URL from the GitHub API using the provided username.
- It handles errors by displaying a user-friendly message if the username is not found.

---

#### 4. **Main Application Component**

Integrate the custom hook and the `AvatarDisplay` component into the main application.

**File: `src/App.js`**

```javascript
import React, { useState } from 'react';
import AvatarDisplay from './components/AvatarDisplay';
import useDebounce from './hooks/useDebounce';
import './styles.css';

function App() {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 500); // Debounce delay of 500ms

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <h1>GitHub User Avatar Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
        className="username-input"
      />
      <AvatarDisplay username={debouncedUsername} />
    </div>
  );
}

export default App;
```

**Explanation:**
- The `App` component includes an input field for the GitHub username and uses the `useDebounce` hook to optimize API calls.
- The debounced value is passed to the `AvatarDisplay` component to fetch and display the avatar.

---

#### 5. **Styling the Application**

Add some basic styles to make the app user-friendly and visually appealing.

**File: `src/styles.css`**

```css
.App {
  text-align: center;
  padding: 20px;
}

.username-input {
  padding: 10px;
  width: 250px;
  font-size: 16px;
  margin-top: 20px;
}

.avatar-container {
  margin-top: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #000;
}

.error {
  color: red;
  font-weight: bold;
}
```

**Explanation:**
- Basic styling for the input field, avatar container, and error messages to ensure the UI is clean and easy to navigate.

---

#### 6. **Run and Test the Application**

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Enter different GitHub usernames to test the functionality.

---

### Submission Guidelines

1. **GitHub Repository:**
   - Create a GitHub repository for your project.
   - Commit your changes regularly.
   - Include a `README.md` file with instructions on how to run the app locally.

2. **README File:**
   - Provide clear instructions on how to install dependencies, run the project, and any additional notes.
   - Include a link to a recorded video (optional but recommended) showing the code and output.

3. **Evaluation Criteria:**
   - Implementation of the required UI components and functionality.
   - Proper integration of the GitHub API and handling of API responses.
   - Successful implementation of debouncing using the custom `useDebounce` hook.
   - Code quality, modularity, readability, and appropriate use of comments.
   - Effective error handling and user-friendly error messages.
   - Overall user experience and visual appeal of the app.
   - Adherence to best practices and project structure.

---

### Good Luck!

Focus on fulfilling the functional requirements and demonstrate your skills in React development, API integration, and debouncing implementation. If you need any further assistance, feel free to ask!