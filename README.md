# CTF-Platform

This project is a web-based Capture The Flag (CTF) platform built with React and Tailwind CSS. It provides a complete framework for hosting CTF competitions, including user authentication, different game levels, a dashboard for tracking progress, and an administrative interface.

## About The Project

The CTF-Platform is designed to offer an immersive and interactive experience for participants in cybersecurity competitions. It features a sleek and modern user interface, responsive design, and a variety of challenge types. The platform is built with a modular and scalable architecture, making it easy to customize and expand.

### Built With

*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Redux:** A predictable state container for JavaScript apps.
*   **React Router:** A library for declarative routing in React.
*   **Axios:** A promise-based HTTP client for the browser and Node.js.
*   **Chart.js:** A flexible JavaScript charting library.
*   **Socket.IO:** A library for real-time, bidirectional communication between web clients and servers.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/gitvivek14/iste-ctf.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm start
    ```

## Features

*   **User Authentication:** Secure user registration and login functionality.
*   **Game Levels:** Multiple levels with a variety of challenges to solve.
*   **Dashboard:** A personalized dashboard for each user to track their progress, including their current level, score, and flags captured.
*   **Real-time Updates:** Real-time updates for events like flag captures and leaderboard changes.
*   **Responsive Design:** A fully responsive design that works on all devices.

## Project Structure

```
└── gitvivek14-iste-ctf/
    ├── README.md
    ├── package.json
    ├── tailwind.config.js
    ├── public/
    │   ├── index.html
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── index.js
        ├── components/
        │   ├── Button.jsx
        │   ├── Card.jsx
        │   ├── Form.css
        │   ├── Form.jsx
        │   ├── Navbar.jsx
        │   ├── Particle.jsx
        │   ├── PrivateRoute.jsx
        │   ├── PublicRoute.jsx
        │   ├── QuesModal.jsx
        │   └── ui/
        │       ├── button.jsx
        │       ├── dialog.jsx
        │       └── tabs.jsx
        ├── config/
        │   └── persistConfig.js
        ├── lib/
        │   └── utils.js
        ├── pages/
        │   ├── Auth.jsx
        │   ├── Home.css
        │   ├── Home.jsx
        │   ├── login.css
        │   ├── Login.jsx
        │   ├── signup.css
        │   ├── SignUp.jsx
        │   ├── Dashboard/
        │   │   └── DashBoard.jsx
        │   └── levels/
        │       ├── Level.jsx
        │       └── ZeroLevel.jsx
        ├── reducer/
        │   └── index.js
        ├── services/
        │   ├── apiconnector.js
        │   ├── apis/
        │   │   └── api.js
        │   └── operations/
        │       ├── authapi.js
        │       └── gameapi.js
        └── slices/
            ├── authSlice.js
            ├── gameSlice.js
            └── profileSlice.js
```
