# Github Topic Explorer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

App to check Github topics and his related topics, with React as default topic

## Dependencies

Node >= 14
npm 5.2+ 

## Run the project

First add your Github personal token to the .env file to authenticate in the Git hub API (https://docs.github.com/en/graphql/guides/forming-calls-with-graphql)
**be careful and don't commit your personal token!**

To install dependencies run 
### `npm install`

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Future improvements
### Code Structuring
* **Layout components**: In the future could be a good pracice to create a Layout folder isolated from pages, to choose if we could use a diferent layout in different pages 
* **Custom styles**: Create a Styles folder to hold styles
* **Config file**: Add a config file for constants
### Refactoring
* **Redirects in the backend**: Remove redirect to /react from the frontend and add it to the Express server, all the redirects should be made by a backend server
* **Custom SCSS and components**: Remove mateial UI library and ad custom Styles with Sass
* **Look and feel**: Improve Look and feel by a UX expert
* **Automation tests**: While snapshops are useful they only provide a way to be aware of possible unwanted layout changes, the real test for frontend should be to add automation end to end tests by Cypress or something similar
* **Dont use bare keys!**: Find a way to securely handle Github API key, is a bad practice just put it on the env vars (AWS secret, Cyphers)
### Aditional features
* **Breadcrumbs**: Add a breadcrumb to follow a path for the clicked topics
* **Multiple topics**: Multiple topic search
* **Link to repos**: To add extra functionality a Link to the main repos for that topics should be useful