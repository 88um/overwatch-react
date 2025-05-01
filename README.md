Welcome to Overwatch Creator Hub!

This project is a next JS fullstack aplication written in TypeScript React and Node.js

## Features

The styling is done using Tailwind CSS and the database is LowDB.

The authentication is handled with a simple implementation of json web tokens and cookies.

The API is done through Next actions and all the server functions are in the actions folder.
An additional API route is stored in app/api/auth/check-session/route.ts which is used to sync the session with the client.

Middleware is used to protect the routes and add authorization to the requests.

## Getting Started
To get started with the project, follow these steps:
1. Clone the repository to your local machine.
```bash
git clone
cd overwatch-react
```
2. Install the dependencies.
```bash
npm install
```
3. Start the development server.
```bash
npm run dev
```
4. Open your browser and navigate to `http://localhost:3000` to see the application in action.