# Commercial bank website

OpenClassrooms project

## Built with

HTML, CSS, JavaScript, React, React Router, Redux.

Additionally used React-toastify for the error messages and Swagger for the API documentation.

## Task

- Build a responsive web application for the bank using React
- Refactoring of the provided static HTML and CSS files (homepage, login page, profile page)
- Use Redux to manage the state accross the application
- Work on the login feature and possibility to update the user details in the profile
- Complete the tasks mentioned in the following [issues templates](https://github.com/Dimterion/Commercial-bank-website/tree/master/.github/ISSUE_TEMPLATE)
- Connect the application to the [provided API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
- Provide the structure for the APIs that are needed for the future features implementation using Swagger syntax (view all transactions, view additional details, add, change and remove additional information about transactions). Can be viewed [here](https://github.com/Dimterion/Commercial-bank-website/blob/master/argent-bank-frontend/swagger.yaml)

## Project goals

- Interact with an API
- Authenticate to a secure API
- Create API models
- Implement a state management system in a React app

## Code

[Backend](https://github.com/Dimterion/Commercial-bank-website/tree/master/server)

[Frontend](https://github.com/Dimterion/Commercial-bank-website/tree/master/argent-bank-frontend)

## How to run the project

This app uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions to run the backend

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://localhost:3001 and you will have two users in your MongoDB database.

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that is used for the proposed future features, the wireframe can be found in `/designs/wireframes/transactions.png`.

### Instructions to run the frontend (once the above steps are completed)

1. cd .\argent-bank-frontend\
2. npm start
