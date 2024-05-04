import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  const [page, setPage] = useState(5);
  const apikey = "ae42f5cd567f4c2da341cacc53489bd1";
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" key="home">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/buisness" key="buisness">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment" key="entertanment">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general" key="general">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health" key="health">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science" key="science">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports" key="sports">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology" key="technology">
            <News
              pageSize={page}
              apikey={apikey}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
