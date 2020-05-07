import React, { FC } from 'react';


import Amplify, { Auth } from 'aws-amplify';
const awsconfig = require("../aws-exports.js")
Amplify.configure(awsconfig);

const SignUp: FC = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./BunnyLogo.png" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}

export default SignUp;
