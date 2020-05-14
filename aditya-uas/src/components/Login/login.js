import React, {Component} from 'react';
import './login.scss'
import '../../Config/redux/action/action'
import { connect } from 'react-redux';
import Button from '../Button/button';
import { LoginUserAPI } from '../../Config/redux/action/action';


class Login extends Component{
    state = {
        email:'',
        password:'',
    }


    handleChangeText = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleLoginSubmit = async () =>{
        const {email,password}=this.state;
        const{history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res){
            console.log('login succes',res);
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
            email:'',
            password:''
        })
        history.push('/')
        }else{
            console.log('login failed');
        }     
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p>Login Page</p>
                    <input id="email" className="input" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input id="password" className="input" placeholder="Password" type="text" onChange={this.handleChangeText} value={this.state.password}/>
                    {/* <button className="btn" onClick={this.handleLoginSubmit}>Registrasi</button> */}
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                </div>            
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}



const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch)=>({
    loginAPI: (data) => dispatch(LoginUserAPI(data))
})

export default connect(reduxState, reduxDispatch) (Login);