import React from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./sections/Home";
import {Projects} from "./sections/Projects";
import Resume from "./sections/WorkExp";
import Games from "./components/Games";
import ContactMe from "./sections/GetInTouch";

const App = () => {
  return (
      <div id='App'>
        {/*Routes for each web page*/}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/Games" element={<Games/>}/>
          <Route path="/ContactMe" element={<ContactMe/>}/>
        </Routes>
      </div>
  );
}

export default App;
