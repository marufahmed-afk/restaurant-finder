## Getting Started with Restaurant Finder

## After cloning

Install the dependencies using:

### `npm install`

Then create your .env file with the following env variables:

REACT_APP_GOOGLE_API_TOKEN = "GoogleApiToken"
REACT_APP_FOURSQUARE_CLIENT_ID = "FoursquareClientId"
REACT_APP_FOURSQUARE_CLIENT_SECRET = "FoursquareClientSecret"
REACT_APP_FOURSQUARE_BASEURL = "api route for foursquare"

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

## Reason for technical choices

**React JS**
Regardless of being a requirement for this assignment. I always opt for react because of how speedy, realiable and
easy to understand it is. The component based structure and more perks like HOCs, custom hooks and also newly added
hooks all help into making React one of the best frontend framework.

**Redux**
Redux is my primary choice for application state management. It solves a big problemm in React which is "Prop Drilling" an issue where we need to pass a state several layers deep to have access to it. With Redux we can maintain a central store that can be accessed by any component. With the addition of react-redux hooks: useSelector and useDispatch, it makes life much easier. Even though Redux has some boiler plate code I have gotten comfortable using it over the years.

**TypeScript**
Javascript being untyped can cause unwanted errors down the line and TypeScript as a superset lets us define types for our variables. Now that we have all the benefit of Typed language it also helps prevent silly mistakes that can be left in the code without a trace.

**React Testing Library**
I spent some time learning unit/integration testing in ReactJS. I tinkered with Jest+Enzyme for a bit then I found React Testing Library which comes in built with latest ReactJS. I found it easier for writing the tests as it was more understandable.

**Tailwind CSS**
I have always been working with custom CSS and am super used to it. I like the idea of having complete control of everything I design even if it can be a lot of extra work. Being skeptical of using CSS frameworks lately I'm giving tailwind CSS a try and I like it so far. I chose Tailwind for this project not just to speed things up but mainly so I can practice getting used to it a bit.

**Axios**
Axios is what I have been using for evey other project and for no particular reason. I am just used to the flow of writing requests in axios.

**SASS**
As I prefer writing custom CSS, SASS is amazing as it lets us write nestes CSS and more perks like mixins. I didn't need to write much SASS for this project but if I needed to write custom CSS for a specific section/purpose that tailwind alone can't solve this is what I prefer.

## What I'd do differently

If I was to work on this project for a longer period of time, I would write improved automated unit/integrated tests and also try end-to-end test using Cypress. As I am fairly new to TypeScript I would try to improve my typescript code and also would improve my code by applying SOLID principles more strictly.
