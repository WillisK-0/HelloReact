// import React from 'react';
// import logo from './logo.svg';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

import React from "react";
import { Component } from "react";
import Menu from "./components/Menu";
import Post from "./components/Post";
import Name from "./components/Name";
import Jumbotron from "./components/Jumbotron";
import Article from "./components/Article";
import "./App.css";

class App extends Component {
  // render is used to display html on the screen
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron />
        <Article
          title="Hello WatchKit"
          body="Blast month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
          comments="24"
          likes="124"
        />
        <Article
          title="Introduction to Swift"
          body="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
          comments="4"
          likes="245"
        />
        <Article
          title="Creating Gravity Enabled Notification Banner Control in iOS 7"
          body="iOS 7 framework introduced many new features which allowed the developers to create the next generation of applications. One of the most interesting feature is UIKit Dynamics framework. UIKit Dynamics allows the developer to create physics enabled effects which users can relate to the real world. In this article we are going to implement a notification banner control which utilizes the features provided by the UIKit Dynamics framework."
          comments="15"
          likes="96"
        />
      </div>
    );
  }
}

export default App;
