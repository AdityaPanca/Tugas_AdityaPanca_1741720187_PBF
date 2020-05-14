import React, {Component} from 'react';
import './register.scss'
import Button from '../Button/button';
import { registerUserAPI } from '../../Config/redux/action/action';
import{ connect } from 'react-redux';

class Register extends Component{
    state = {
        email:'',
        password:'',
        // isLoading: false
    }

    handleChangeText = (e) =>{
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = async () =>{
        const {email,password}=this.state;
        const res = this.props.registerAPI({email, password}).catch(err => err);
        if(res){
            console.log('register succes',res);
            const{history} = this.props;
            this.setState({
            email:'',
            password:''})
            history.push('/login')
        }else{
            console.log('register failed');
        }     
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p>Register Page</p>
                    <input id="email" className="input" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input id="password" className="input" placeholder="Password" type="text" onChange={this.handleChangeText} value={this.state.password}/>
                    {/* <button className="btn" onClick={this.handleLoginSubmit}>Registrasi</button> */}
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
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
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState,reduxDispatch)(Register);