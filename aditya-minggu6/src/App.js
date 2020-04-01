import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'
import gambar5 from './gambar1.jpg';
import gambar1 from './4.jpg';
import gambar2 from './5.jpg';
import gambar3 from './6.jpg';
import tools from './tools.png';
import t1 from './t1.png';
import t2 from './t2.png';
import makeup from './makeup.png';
import satu from './satu.png';
import dua from './dua.png';
import tiga from './tiga.png';
import home1 from './home1.png';
import home2 from './home2.png';
import home3 from './home3.png';
import home4 from './home4.png';
import home5 from './home5.png';
import alis from './alis.jpg';
import bedak from './bedak.jpg';
import perona from './perona.jpg';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";
import { logDOM } from '@testing-library/react';

export default function AuthExample() {
  return (
    <Router>
      <div>

        <AuthButton />
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">SEPHORA</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/public">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active" href="/login">Makeup</a>
                <a className="nav-item nav-link active" href="/skincare">Skincare</a>
                <a className="nav-item nav-link active" href="/loginn">Login</a>

              </div>
            </div>
          </nav></div>
        {/* <ul>
          <li>
            <Link to = "/public">Public page</Link>
          </li>
          <li>
            <Link to = "/private">Private page</Link>
          </li>
          <li>
            <Link to = "/skincare">Skincare page</Link>
          </li>
        </ul> */}
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/loginn">
            <LoginnPage />
          </Route>
          {/* <Route path="/login">
            <LoginPage />
          </Route> */}
          <Route path="/skincare">
            <SkincarePage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  Authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function LoginnPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/loginn" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>SELAMAT DATANG DI SEPHORA!{from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Terimakasih Telah Berkunjung Ke SEPHORA{""}
      <button onClick={() => { fakeAuth.signout(() => history.push("/loginn")); }}>Back To Home</button>
    </p>
  ) : (
      <p>

      </p>
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
                pathname: "/loginn",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function PublicPage() {
  return <div className="card text-center">
    <div className="card-header">
      SEPHORA
  </div>
    <div className="card-body">
    <center>
        <img className="img-top" src={home1} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={home2} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={home3} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={home4} alt="Card cap" />
        </center>
        
      <h5 className="card-title">About Sephora</h5>
      <p className="card-text">Sephora is a visionary beauty-retail concept founded in France by Dominique Mandonnaud in 1970. Sephora's unique, open-sell environment features an ever-increasing amount of classNameic and emerging brands across a broad range of product categories including skincare, makeup, fragrance, body and hair care, in addition to Sephora's own private label. </p>
      <p className="card-text"> Today, Sephora is not only the leading chain of perfume and cosmetics stores in France, but also a powerful beauty presence in countries around the world.</p>
      <p className="card-text">Owned by LVMH Moët Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora is highly regarded as a beauty trailblazer, thanks to its unparalleled assortment of prestige products, unbiased service from experts, interactive shopping environment, disruptive spirit and constant innovation.</p>
      <p className="card-text">Sephora operates approximately 1,900 stores in 29 countries worldwide, with an expanding base of over 200 stores across the Asia Pacific region including Australia, China, Singapore, Malaysia, Thailand, Indonesia and India.</p>
    </div>
    <center>
        <img className="img-top" src={home5} alt="Card cap" />
        </center>
  </div>;
}
function SkincarePage() {
  return (
    <div className="card text-center">
      <div className="card-header">
        SEPHORA
  </div>
      <div className="container" style={{ marginTop: "80px" }} >
        <center>
          <img className="img-catalog" src={gambar5} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={makeup} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={satu} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={dua} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={tiga} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={tools} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={t1} alt="Card cap" />
        </center>
        <center>
        <img className="img-top" src={t2} alt="Card cap" />
        </center>
        <div className="row">
          <CreateTodo />
          <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">

          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

function ProtectedPage() {
  return <h3>Private</h3>;
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/loginn" } };
  let login = () => {
    fakeAuth.Authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div className="card-deck" style={{width:  'max-content', height: 'max-content'}}>
      <div className="card">
        <img className="img-catalog" src={gambar1} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">URBAN DECAY</h5>
          <p className="card-text">Best Popular cosmetics</p>
        </div>
        <div className="card-footer">
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">EYE PRIMER</button>
          <img className="img-catalog" src={alis} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">BENEFIT COSMETIC</h5>
          <p className="card-text">Best Popular cosmetics</p>
        </div>
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">ALIS</button>
          </div>
      </div>
      <div className="card">
        <img className="img-catalog" src={gambar2} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">DIOR</h5>
          <p className="card-text">Best Popular cosmetics</p>
        </div>
        <div className="card-footer">
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">LIPSTICK</button>
          <img className="img-catalog" src={bedak} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">DIOR</h5>
          <p className="card-text">Best Popular cosmetics</p>
        </div>
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">BEDAK</button>
          
        </div>
      </div>
      
      <div className="card">
        <img className="card-gambar3" src={gambar3} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">DIOR FOUNDATION</h5>
          <p className="card-text">A high perfection, long-wearing foundation formula that offers a 24-hour </p>
        </div>
        <div className="card-footer">
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">FOUNDATION</button>
          <img className="img-catalog" src={perona} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">BENEFIT COSMETICS</h5>
          <p className="card-text">Best Popular cosmetics</p>
        </div>
          <button onClick={login} type="button" className="btn btn-secondary btn-lg btn-block">PERONA PIPI</button>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <ul>
            <li><Link to="/beranda">Beranda</Link>
            </li>
            <li>
              <Link to="/produk">Product</Link>
            </li>
            <li>
              <Link to="/profil">Profile</Link>
            </li>
            <AuthButton />
          </ul>

          <Switch>
            <Route path="/beranda">
              <BerandaPage />
            </Route>
            {/* <Route path="/login">
              <LoginPage />
            </Route> */}
            <Route path="/skincare">
              <skincarePage />
            </Route>
            <PrivateRoute path="/produk">
              <ProtectedPage />
            </PrivateRoute>
            <PrivateRoute path="/private">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
function BerandaPage() {
  return (
    <div>
      <br />
      <h1 align="center">SEPHORA</h1>
      <p align="center">Ekspresikan Dirimu menggunakan Produk Kami</p>
    </div>
  );
}