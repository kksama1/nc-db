import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TableEditorPage from "../src/pages/TableEditor";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/table_editor" Component={TableEditorPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
