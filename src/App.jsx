import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import { Home,About,Projects,Contact } from "./components/pages";
import NoMatch from './components/NoMatch';

function App() {
  return (
    <main className="bg-stone-200/25 h-full">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/Projects" element= {<Projects/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="*" element={<NoMatch/>}/>
          <Route path="/ayush-portfolio" element={<Home/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
