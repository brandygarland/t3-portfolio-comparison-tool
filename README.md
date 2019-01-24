# react-redux-express-ts-template

### Initialization 
First, Run the following commands to ensure that all global and local dependencies are installed ( or run `sh init.sh` on MacOS).

`npm install -g browserify watchify uglify babelify typescript`

`npm install`

Next, **Install Yarn**:  
* [Windows-installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable) 

* [MacOS-installation](https://yarnpkg.com/lang/en/docs/install/#macOS-stable) 

Also, [install SASS](https://sass-lang.com/install).

### Development

To start the development server with watchers, run `npm run dev` and wait for your bundle to build. The first bundle may take awhile. Navigate to `localhost:8081` in your browser.

An endpoint has been added in the server for CORS requests (example [request from the app](./web/src/content/sample/repeaterEpic.ts) and [React component that uses request](./web/src/content/sample/RepeaterSample.tsx) ) Use the endpoint `/repeater` and provide your configuration settings as headers. Be sure to include your request url! 

> Other accepted configuration settings can be found [here](https://github.com/axios/axios#request-config).

To test, run `npm test` to start the test watcher. Be sure to name your test file in a `<file-name>.test.<file-extension>` format.
 
### Production

To run the server with production build (which uses the production version of React and removes the redux-logger middleware), run `npm start`. 

###### Last updated date: 2018-07-08