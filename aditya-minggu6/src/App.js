import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
  useLocation,
  Redirect,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            CatsStore
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              {/* <button className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </button> */}
            </ul>
          </div>
        </nav>

        <Route path="/" component={Home} exact />
        <PrivateRoute path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

function Cart() {
  return <div>Cart</div>;
}

function Home() {
  return <div>Home</div>;
}

function Product({ children, ...rest }) {
  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        <div className={"col-4"}>
          <div class="card">
            <img src={"/img/1.png"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-text">Card Title</h5>
              <p>Price 100$</p>

              <a href="#" class="btn btn-primary">
                Details
              </a>
            </div>
          </div>

          <div class="card">
            <img src={"/img/1.png"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-text">Card Title</h5>
              <p>Price 100$</p>

              <a href="#" class="btn btn-primary">
                Details
              </a>
            </div>
          </div>

          <div class="card">
            <img src={"/img/1.png"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-text">Card Title</h5>
              <p>Price 100$</p>

              <a href="#" class="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
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

    </div>
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
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
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
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/product" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
