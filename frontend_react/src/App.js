// import React from "react";

// import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
// import { Navbar } from "./components";
// import "./App.scss";
// import NavigationDots from "./components/globalCmp/NavigationDots";
// import SocialMedia from "./components/globalCmp/SocialMedia";

// const App = (idName) => (
//   <div id={idName}>
//     <NavigationDots active={idName} />
//     <SocialMedia/>
//     <div className="app">
//       <Navbar />
//       <Header />
//       <About />
//       <Work />
//       <Skills />
//       <Testimonial />
//       <Footer />
//     </div>

//   </div>
// );

// export default App;



import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;


