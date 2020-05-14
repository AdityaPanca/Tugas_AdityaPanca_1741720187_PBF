import React, {Component} from 'react';
import "./home.scss"
import "../../Config/redux/reducer/reducer"
// import './Maps.css'
import Api from "./../PageApi/Api"

class Home extends Component{
    

    render(){
        const {notes} = this.props;
        console.log('notes: ',notes);
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" class="text-danger" href="#">Catatanku!!!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="/">Catatan</a>
          </div>

          
        </div>
      </nav>
    <div>
              <Api/>
          </div>
        </div>
    )
    }
}

export default Home;