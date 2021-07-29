import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/messages"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Messages
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
} 

function SignUp(){
  return (
    <>
      <form>
        <div>
          <input type ="text" name="signup" placeholder="Username"/>
          <label>Username</label>
        </div>
        <div>
          <input type ="text" name="password" placeholder="Password"/>
          <label>Password</label>
        </div>
        <div>
          <input type="submit" value="Sign Up"/>
        </div>
      </form>
    </>
  )
}

function Messages(){
  return (
    <>
      <p>MESSAGES</p>
      <p>MESSAGES</p>
      <p>MESSAGES</p>
      <p>MESSAGES</p>
      <p>MESSAGES</p>
      <p>MESSAGES</p>
    </>
  )
}

ReactDOM.render(
<BrowserRouter>
  <Navbar />
  <Switch >
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/messages">
      <Messages />
    </Route>
  </Switch>
</BrowserRouter>, 
document.getElementById("root")
);
