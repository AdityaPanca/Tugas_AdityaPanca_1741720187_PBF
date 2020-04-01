import React from "react";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/InputSection";
import NotesSection from "./components/NotesSection";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
  useLocation,
  Redirect,
  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Catatanku!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
                    <AuthButton />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  LogOut
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/login" component={Login} exact />
        <PrivateRoute path="/home">
          {" "}
          <HomePage />
        </PrivateRoute>
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Tulis Catatan!</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  return fakeAuth.isAuthenticated ? (
    <h1 className="container">Terimaksih sudah login! </h1>
  ) : (
    <h1></h1>
  );
}

function SignOut() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <h1 className="container">
      Tekan Log Out untuk keluar
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/login"));
        }}
        style={{ marginTop: "25px" }}
        className="btn btn-success"
      >
        Sign Out
      </button>
    </h1>
  ) : (
    <h1></h1>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Login() {
  return (
    <Router>
      <div>
        <AuthButton />

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Logout() {
  return (
    <Router>
      <div>
        <SignOut />

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/login" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="container">
      <h1>Anda Harus Login terlebih Dahulu untuk Menulis Catatan</h1>
      <button
        onClick={login}
        style={{ marginTop: "25px" }}
        className="btn btn-success"
      >
        Log in
      </button>
    </div>
  );
}

