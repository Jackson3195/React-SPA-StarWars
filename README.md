This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learning Notes (Feedback)

- Traversity Media has a great starters tutorial:
  - https://www.youtube.com/watch?v=sBws8MSXN7A&t=2479s
- React variable reactivity is interesting, seems to be a more work than Vue just to get a single variable reactive. One can argue that you get more control but the same can be achieve by using getters/setters in Vue.
- React testing is much easier than Vue when working with the default configuration.
- React and Vue 3 are similar in terms of you are responsible for the structure of the code within the component. Vue2, provides a skeleton and you fill in the blanks. Unsure which-one I prefer yet.
- Trying to get styling to work or keeping it all in once place is a win for Vue over react but solveable with some Webpack configurations.
- Jest is just beautiful.
- Think I'm going to try TDD more often due to code architecture benefits.
- Overall? This was fun, learning the kinks of testing took longer than building the app itself. (See git log for more timings etc...)

## Testing Notes (Feedback)

- Checkout src/pages/DefaultPage.test.tsx
  - Specifically the last test.
    - When testing it says the handleInputErrorMock mocked function has been called 0 times.
    - However the console log INSIDE that mocked function is ran and output implying that its called atleast once.
    - Do not believe it's a React specific issue as because other tests would break where I mock things.
    - Do not believe it's a Jest issue as previous mocked functions work fine.
    - Possibly a combination of the two? Unsure; Google doesn't give me much hope either. So would be awesome if you could tell me why I'm doing wrong here.
