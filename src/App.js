import React from "react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import AddPost from "./component/Posts/AddPost";
import ViewPost from "./component/Posts/ViewPost";
import EditPost from "./component/Posts/EditPost";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/post/:id" component={ViewPost} />
        <Route path="/edit/:id" component={EditPost} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
