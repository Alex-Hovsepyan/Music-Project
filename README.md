# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Components

### `/MusicUploadForm/MusicUploadForm.js`

This component allows users to upload and submit music files to the application. 
It provides a user-friendly interface for users to select and upload their music files with ease.

### `/SongList/AddAllButton.js`

This component allows users to select all available music files.

### `/SongList/PlayAllButton.js`

This component allows users to play all available music files sequentially.

### `/SongList/SongList.js`

This component displays a list of all songs

### `/SongList/SongRow.js`

A Component to render individual song details within the `SongList`.

## Libraries

### `react-loader-spinner`

This library is used to display a loading spinner component in the application.
To use this library, make sure it is installed by running: `npm install react-loader-spinner --save`

## Preprocessors

### `Sass`

Sass is a CSS preprocessor used in this project.
To use Sass in your project, install it by running: `npm install sass --save`

## State Management

### `@reduxjs/toolkit`

This project utilizes `@reduxjs/toolkit` for state management.
To use `@reduxjs/toolkit`, make sure it is installed by running: `npm install @reduxjs/toolkit --save`