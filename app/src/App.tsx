import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

//Components
import Homepage from "./components/Homepage"


// export interface AppProps {
//   readonly prop1: string;
// }


const App: FC = () => { //default props/values should go in as params 
  return (
    <Router>
    <Homepage/>
    </Router>
  );
}

export default App;
