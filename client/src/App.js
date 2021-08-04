// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Welcome to React INFO 3139</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React from "react";
// function App() {
//   return React.createElement("h1", { className: "bigred" }, "Hello World!");
// }
// export default App;

// import "./App.css";
// import React from "react";
// import FunctionalNonJSX from "./week6/functionalnonjsx";
// function App() {
//   return React.createElement(FunctionalNonJSX, {
//     somedata: "stuff for non jsx component",
//   });
// }
// export default App;

// import "./App.css";
// import React from "react";
// import FunctionalNonJSX from "./week6/functionalnonjsx";
// function App() {
//   return <FunctionalNonJSX somedata="stuff for non jsx component in jsx" />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import FunctionalJSX from "./week6/functionaljsx";
// function App() {
//   return <FunctionalJSX somedata="stuff for jsx component in jsx" />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import ClassyComponent from "./week6/classycomponent";
// function App() {
//   return <ClassyComponent />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Lab11 from "./week6/lab11component";
// function App() {
//   return <Lab11 />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import MaterialUIEx1Component from "./week7/class1/materialuiex1";
// function App() {
//   return <MaterialUIEx1Component />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Lab12 from "./week7/class1/lab12";
// function App() {
//   return <Lab12 />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Project1Component from "./project1/project1component";
// function App() {
//   return <Project1Component />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import MaterialUiEx4 from "./week7/class2/materialuiex4";
// function App() {
//   return <MaterialUiEx4 />;
// }
// export default App;

// import React, { useState } from "react";
// import { Route, Link, Redirect } from "react-router-dom";
// import Reorder from "@material-ui/icons/Reorder";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
// import Lab13Component from "./week7/class2/Lab13Component";
// import Lab13HomeComponent from "./week7/class2/Lab13HomeComponent";
// import {
//   Toolbar,
//   AppBar,
//   Menu,
//   MenuItem,
//   IconButton,
//   Typography,
// } from "@material-ui/core";
// const App = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   return (
//     <MuiThemeProvider theme={theme}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" color="inherit">
//             INFO3139 - Lab 13
//           </Typography>
//           <IconButton
//             onClick={handleClick}
//             color="inherit"
//             style={{ marginLeft: "auto", paddingRight: "1vh" }}
//           >
//             <Reorder />
//           </IconButton>
//           <Menu
//             id="simple-menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem component={Link} to="/home" onClick={handleClose}>
//               Home
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/homecomponent"
//               onClick={handleClose}
//             >
//               Search Users
//             </MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <div>
//         <Route exact path="/" render={() => <Redirect to="/home" />} />
//         <Route path="/homecomponent" render={() => <Lab13Component />} />
//         <Route path="/home" component={Lab13HomeComponent} />
//       </div>
//     </MuiThemeProvider>
//   );
// };
// export default App;

// import "./App.css";
// import React from "react";
// import Lab12 from "./week7/class1/lab12";
// function App() {
//   return <Lab12 />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Project1Component from "./project1/project1component";
// function App() {
//   return <Project1Component />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import MaterialUiEx4 from "./week7/class2/materialuiex4";
// function App() {
//   return <MaterialUiEx4 />;
// }
// export default App;

//For case study 1

// import React, { useState } from "react";
// import { Route, Link, Redirect } from "react-router-dom";
// import Reorder from "@material-ui/icons/Reorder";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
// import AlertComponent from "./project1/alertsetupcomponent";
// import Project1Component from "./project1/project1component";
// import AdvisoryComponent from "./project1/advisoryaddcomponent";
// import AdvisoryListComponent from "./project1/advisorylistcomponent";
// import {
//   Toolbar,
//   AppBar,
//   Menu,
//   MenuItem,
//   IconButton,
//   Typography,
// } from "@material-ui/core";
// const App = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   return (
//     <MuiThemeProvider theme={theme}>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" color="inherit">
//             INFO3139 - Case Study #1
//           </Typography>
//           <IconButton
//             onClick={handleClick}
//             color="inherit"
//             style={{ marginLeft: "auto", paddingRight: "1vh" }}
//           >
//             <Reorder />
//           </IconButton>
//           <Menu
//             id="simple-menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem component={Link} to="/home" onClick={handleClose}>
//               Home
//             </MenuItem>
//             <MenuItem component={Link} to="/resetalerts" onClick={handleClose}>
//               Reset Alerts
//             </MenuItem>
//             <MenuItem component={Link} to="/advisory" onClick={handleClose}>
//               Add Advisory
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/listadvisories"
//               onClick={handleClose}
//             >
//               List Advisories
//             </MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <div>
//         <Route exact path="/" render={() => <Redirect to="/home" />} />
//         <Route path="/resetalerts" render={() => <AlertComponent />} />
//         <Route path="/home" component={Project1Component} />
//         <Route path="/advisory" render={() => <AdvisoryComponent />} />
//         <Route
//           path="/listadvisories"
//           render={() => <AdvisoryListComponent />}
//         />
//       </div>
//     </MuiThemeProvider>
//   );
// };
// export default App;

// import "./App.css";
// import React from "react";
// import SocketClient from "./week10/socketclient";
// function App() {
//   return <SocketClient />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import AllRooms from "./week10/allrooms";
// function App() {
//   return <AllRooms />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Lab15Client from "./week10/lab15client";
// function App() {
//   return <Lab15Client />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Street from "./week11/street";
// function App() {
//   return <Street />;
// }
// export default App

import "./App.css";
import React from "react";
import ScenarioEnhanced from "./casestudy2/scenariosenhanced";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <ScenarioEnhanced />
    </HttpsRedirect>
  );
}
export default App;

// import "./App.css";
// import React from "react";
// import Exercise1 from "./week13/clientexercises/exercise1";
// function App() {
//   return <Exercise1 />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Exercise2 from "./week13/clientexercises/exercise2";
// function App() {
//   return <Exercise2 />;
// }
// export default App;

// import "./App.css";
// import React from "react";
// import Exercise3 from "./week13/clientexercises/exercise3";
// function App() {
//   return <Exercise3 />;
// }
// export default App;
