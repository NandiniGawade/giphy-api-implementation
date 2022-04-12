# Getting Started with React Giphy API Implementation

## Approach :-

# Pagination
 
   - I have used pagination to show treading gif images. To handle large amount of data pagination is better approach to avoid multiple request to the server to fetch records.

   - In Giphy API maximum limit is to fetch data is 50. Total images in treading API is more than 3000. For this scenario, implementing virtual scrolling api, will make lot of request to server.

   - Gifs images take time to load. So User experience in virual scrolling will not be good.

# Giphy react component

    - For search image functionality, I have used Giphy react component to show the images.

    - Giphy libraries provided implementation to show gifs images in grid component. But on every scroll event, it fetching data from server.

# Material UI library

   - Used Material Ui library for HTML component implementation. As this library provide all the better feature to HTML component.

   - It is more responsive.


## Features implemented :-
  
  1. Show treading images from treading API from Giphy with pagination.
  2. On Image click open modal to show renditions images.
  3. Search image from search API from Giphy with Giphy react component grid implementation.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all the dependecies from Package json.
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
