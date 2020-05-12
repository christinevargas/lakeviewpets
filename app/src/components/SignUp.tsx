import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React, { FC } from 'react';



//TODO:
// The error below seems to be a TS thing. A workaround seems to be using "require" keyword instead of "import"
import awsConfig from '../aws-exports.js';

Amplify.configure(awsConfig);

const SignUp: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./BunnyLogo.png" className="App-logo" alt="logo"/>
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
      <AmplifySignOut/>
    </div>
  );
};

export default withAuthenticator(SignUp);