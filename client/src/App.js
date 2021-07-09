import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Dashboard from "./routes/dashboard/Dashboard";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:3001${path}`
    : path;
}

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url("/api"))
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // const [data, setData] = useState('')
  // useEffect(() => {
  //   // https://heroku.com/nice-app
  //   // http://localhost:5000
  //   fetch(url('/api'))
  //     .then(res => res.json())
  //     .then(goods => setData(goods.data))
  // }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Fitness App...</h1>
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
