# Firebase and GitHub User App

This is a web application that allows users to sign up using Firebase Authentication and search for GitHub users using the GitHub API.

## Features

- User registration and login with Firebase Authentication.
- GitHub user search using the GitHub API.
- Displaying GitHub user profiles with relevant information.

## Demo

You can try out the live demo of the app [here](https://your-demo-url.com).

## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)
![Screenshot 2](/screenshots/screenshot2.png)

## Installation

To run this app locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

Install the dependencies using npm:
bash
Copy code
npm install
Create a new Firebase project and enable Firebase Authentication. Obtain the Firebase configuration object and replace the placeholder values in the src/firebase/firebaseConfig.js file with your Firebase project's configuration.

Create a GitHub OAuth application and obtain the client ID. Replace the placeholder value in the src/components/GitHubLogin.js file with your GitHub OAuth application's client ID.

Usage
To start the app, run the following command:

bash
Copy code
npm start
This will launch the app in development mode, and it should be accessible at http://localhost:3000 in your web browser.

Technologies Used
React.js: Frontend JavaScript library for building user interfaces.
Firebase: Backend-as-a-Service platform for authentication and database.
GitHub API: Interface for searching GitHub users.
Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request. For major changes, please discuss the proposed changes via issue before making them.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license. Attribution is appreciated but not required.
