import React from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./components/Home";
import {Projects} from "./components/Projects";
import Resume from "./components/Resume";
import Games from "./components/Games";
import ContactMe from "./components/ContactMe";

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
